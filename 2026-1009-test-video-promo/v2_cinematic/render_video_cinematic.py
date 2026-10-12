import os
import sys
import time
import shutil
import base64
import argparse
import subprocess
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BASE_DIR)
RAW_DIR = os.path.join(BASE_DIR, ".temp_raw")
FINAL_OUT_V2 = os.path.join(REPO_ROOT, "output", "video-gioi-thieu-vlncn-v2_cinematic.mp4")
FINAL_OUT_CINEMATIC = os.path.join(REPO_ROOT, "output", "video-gioi-thieu-vlncn-cinematic.mp4")
AUDIO_IN = os.path.join(REPO_ROOT, "assets", "audio", "master_audio.mp3")
HTML_FILE = os.path.join(BASE_DIR, "video_stage_cinematic.html")

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FPS = 60

def run_worker(worker_id, start_frame, end_frame, fps, out_part):
    html_abs = HTML_FILE.replace("\\", "/")
    file_url = f"file:///{html_abs}"
    total_frames = end_frame - start_frame

    print(f"[Worker {worker_id}] Initializing frames {start_frame} -> {end_frame} ({total_frames} frames)...", flush=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=CHROME_PATH if os.path.exists(CHROME_PATH) else None,
            headless=True,
            args=[
                "--use-gl=angle",
                "--use-angle=d3d11",
                "--enable-gpu-rasterization",
                "--enable-zero-copy",
                "--ignore-gpu-blocklist",
                "--disable-background-timer-throttling",
                "--disable-backgrounding-occluded-windows",
                "--disable-renderer-backgrounding"
            ]
        )
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(file_url, wait_until="domcontentloaded")
        time.sleep(1.0)

        cdp = page.context.new_cdp_session(page)

        ff_cmd = [
            "ffmpeg", "-y", "-loglevel", "error",
            "-f", "image2pipe", "-framerate", str(fps),
            "-c:v", "mjpeg", "-i", "-",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", "17",
            "-pix_fmt", "yuv420p",
            out_part
        ]
        proc = subprocess.Popen(ff_cmd, stdin=subprocess.PIPE)

        t_start = time.time()
        for i, f in enumerate(range(start_frame, end_frame)):
            t = f / float(fps)
            page.evaluate("(t) => window.seekTo(t)", t)
            res = cdp.send("Page.captureScreenshot", {"format": "jpeg", "quality": 90})
            raw = base64.b64decode(res["data"])
            proc.stdin.write(raw)

            if i > 0 and i % 120 == 0:
                elapsed = time.time() - t_start
                rate = i / elapsed if elapsed > 0 else 0
                remaining = (total_frames - i) / rate if rate > 0 else 0
                print(f"[Worker {worker_id}] Frame {f}/{end_frame} ({i/total_frames*100:.1f}%) - {rate:.1f} fps - ~{remaining:.0f}s left", flush=True)

        proc.stdin.close()
        proc.wait()
        page.close()
        browser.close()

    print(f"[Worker {worker_id}] COMPLETED {total_frames} frames -> {out_part}", flush=True)


def main():
    parser = argparse.ArgumentParser(description="Deterministic 60FPS Video Renderer")
    parser.add_argument("--worker", type=int, default=None)
    parser.add_argument("--start-frame", type=int, default=0)
    parser.add_argument("--end-frame", type=int, default=0)
    parser.add_argument("--fps", type=int, default=FPS)
    parser.add_argument("--out-part", type=str, default="")
    parser.add_argument("--num-workers", type=int, default=4)
    args = parser.parse_args()

    # If invoked as a worker process
    if args.worker is not None:
        run_worker(args.worker, args.start_frame, args.end_frame, args.fps, args.out_part)
        sys.exit(0)

    # Master orchestrator
    print("=" * 60)
    print("  VLNCN CINEMATIC PROMO VIDEO - 60FPS HIGH PRECISION RENDERER")
    print("=" * 60)

    os.makedirs(RAW_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(FINAL_OUT_V2), exist_ok=True)

    # Clean raw temp dir
    for f in os.listdir(RAW_DIR):
        try:
            p = os.path.join(RAW_DIR, f)
            if os.path.isfile(p):
                os.remove(p)
        except Exception:
            pass

    # 1. Probe master audio duration
    probe_cmd = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        AUDIO_IN
    ]
    res = subprocess.run(probe_cmd, capture_output=True, text=True, check=True)
    audio_duration = float(res.stdout.strip())
    total_frames = int(round(audio_duration * FPS))

    print(f"Master Audio Duration : {audio_duration:.3f} seconds")
    print(f"Target Video FPS      : {FPS} fps")
    print(f"Total Target Frames   : {total_frames} frames (0 to {total_frames - 1})")
    print(f"Parallel Worker Count : {args.num_workers}")

    # 2. Divide frames among workers
    num_workers = args.num_workers
    frames_per_worker = total_frames // num_workers
    worker_slices = []
    for w in range(num_workers):
        sf = w * frames_per_worker
        ef = (w + 1) * frames_per_worker if w < num_workers - 1 else total_frames
        out_part = os.path.join(RAW_DIR, f"part_{w}.mp4")
        worker_slices.append((w, sf, ef, out_part))

    print("\nWorker frame distribution:")
    for w, sf, ef, part in worker_slices:
        print(f"  Worker {w}: frames {sf:4d} -> {ef:4d} ({ef - sf:4d} frames, t={sf/FPS:5.2f}s -> {ef/FPS:5.2f}s)")

    # 3. Launch worker subprocesses in parallel
    print("\n>>> Spawning parallel rendering workers...")
    t_start = time.time()
    processes = []
    this_script = os.path.abspath(__file__)

    for w, sf, ef, part in worker_slices:
        cmd = [
            sys.executable, this_script,
            "--worker", str(w),
            "--start-frame", str(sf),
            "--end-frame", str(ef),
            "--fps", str(FPS),
            "--out-part", part
        ]
        proc = subprocess.Popen(cmd)
        processes.append(proc)

    for w, p in enumerate(processes):
        ret = p.wait()
        if ret != 0:
            raise RuntimeError(f"Worker {w} failed with exit code {ret}!")

    render_time = time.time() - t_start
    print(f"\nAll {num_workers} workers completed in {render_time:.1f} seconds! ({total_frames / render_time:.1f} effective fps)")

    # 4. Concatenate parts losslessly
    concat_list_path = os.path.join(RAW_DIR, "concat_list.txt")
    with open(concat_list_path, "w", encoding="utf-8") as f:
        for _, _, _, part in worker_slices:
            norm_part = part.replace("\\", "/")
            f.write(f"file '{norm_part}'\n")

    temp_combined = os.path.join(RAW_DIR, "combined_video.mp4")
    print("\nConcatenating segments...")
    concat_cmd = [
        "ffmpeg", "-y", "-loglevel", "error",
        "-f", "concat", "-safe", "0",
        "-i", concat_list_path,
        "-c", "copy",
        temp_combined
    ]
    subprocess.run(concat_cmd, check=True)

    # 5. Mux with master audio (frame-perfect synchronization from 0.000s)
    print(f"\nMuxing 60FPS video with master audio to {FINAL_OUT_V2}...")
    mux_cmd = [
        "ffmpeg", "-y",
        "-i", temp_combined,
        "-i", AUDIO_IN,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        FINAL_OUT_V2
    ]
    subprocess.run(mux_cmd, check=True)

    # Copy to compatibility alias
    shutil.copy2(FINAL_OUT_V2, FINAL_OUT_CINEMATIC)

    print("\n" + "=" * 60)
    print("SUCCESS: 60FPS Cinematic Video Rendered Flawlessly!")
    print(f"  -> {FINAL_OUT_V2}")
    print(f"  -> {FINAL_OUT_CINEMATIC}")
    print("=" * 60)

    # 6. Verify with ffprobe
    probe_out = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration,size,bit_rate:stream=width,height,r_frame_rate,nb_frames,codec_name",
        "-of", "default=noprint_wrappers=1",
        FINAL_OUT_V2
    ]
    print("\nFinal Video Specs:")
    subprocess.run(probe_out)

if __name__ == "__main__":
    main()
