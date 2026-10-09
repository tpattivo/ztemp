import os
import glob
import time
import shutil
import subprocess
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BASE_DIR)
RAW_DIR = os.path.join(BASE_DIR, ".temp_raw")
FINAL_OUT_V2 = os.path.join(REPO_ROOT, "output", "video-gioi-thieu-vlncn-v2_cinematic.mp4")
FINAL_OUT_CINEMATIC = os.path.join(REPO_ROOT, "output", "video-gioi-thieu-vlncn-cinematic.mp4")
AUDIO_IN = os.path.join(REPO_ROOT, "assets", "audio", "master_audio.mp3")

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(os.path.dirname(FINAL_OUT_V2), exist_ok=True)

# Clean raw folder before recording
for f in glob.glob(os.path.join(RAW_DIR, "*")):
    try:
        os.remove(f)
    except Exception:
        pass

html_abs = os.path.join(BASE_DIR, "video_stage_cinematic.html").replace("\\", "/")
file_url = f"file:///{html_abs}"

print(f"Opening cinematic stage: {file_url}")

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        args=[
            "--autoplay-policy=no-user-gesture-required",
            "--disable-gpu-vsync",
            "--enable-features=VaapiVideoDecoder"
        ]
    )
    context = browser.new_context(
        record_video_dir=RAW_DIR,
        record_video_size={"width": 1920, "height": 1080},
        viewport={"width": 1920, "height": 1080}
    )
    page = context.new_page()
    page.goto(file_url, wait_until="domcontentloaded")

    # Give browser time to decode and buffer videos & images while syncCover is up
    time.sleep(2.5)

    print("Starting cinematic animated video playback (syncCover removed)...")
    page.evaluate("window.startPlayback()")

    total_sec = 82.0
    start_t = time.time()
    last_printed_step = -1

    while time.time() - start_t < total_sec:
        elapsed = time.time() - start_t
        step = int(elapsed // 10)
        if step > last_printed_step:
            last_printed_step = step
            print(f"Recording progress: {elapsed:.1f}/{total_sec}s", flush=True)
        time.sleep(0.5)

    print("Recording finished. Closing page to finalize raw video...")
    time.sleep(1)
    page.close()
    context.close()
    browser.close()

# Find raw video produced by Playwright
raw_videos = glob.glob(os.path.join(RAW_DIR, "*.webm"))
if not raw_videos:
    raise RuntimeError("No raw video produced by Playwright!")

raw_video = raw_videos[0]
print(f"Captured raw video: {raw_video}")

def find_sync_start_time(video_path):
    """
    Reads the first frames of the recorded webm through ffmpeg.
    The pre-roll frames have #00ff00 green cover (R < 80, G > 150, B < 80).
    The very first frame that is NOT green marks the exact millisecond
    window.startPlayback() took effect on screen.
    """
    fps_cmd = [
        "ffprobe", "-v", "error",
        "-select_streams", "v:0",
        "-show_entries", "stream=r_frame_rate",
        "-of", "default=noprint_wrappers=1:nokey=1",
        video_path
    ]
    fps_res = subprocess.run(fps_cmd, capture_output=True, text=True)
    fps_str = fps_res.stdout.strip()
    try:
        num, den = fps_str.split("/")
        fps = float(num) / float(den)
    except Exception:
        fps = 25.0

    print(f"Raw video stream frame rate: {fps:.2f} fps")

    w, h = 16, 9
    frame_bytes_len = w * h * 3
    cmd = [
        "ffmpeg", "-i", video_path,
        "-t", "8",
        "-vf", f"scale={w}:{h}",
        "-f", "rawvideo",
        "-pix_fmt", "rgb24",
        "-"
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    raw_bytes = proc.stdout.read()
    proc.wait()

    total_frames = len(raw_bytes) // frame_bytes_len
    start_frame = 0

    for idx in range(total_frames):
        f = raw_bytes[idx * frame_bytes_len : (idx + 1) * frame_bytes_len]
        avg_r = sum(f[0::3]) / (w * h)
        avg_g = sum(f[1::3]) / (w * h)
        avg_b = sum(f[2::3]) / (w * h)

        # Detect departure from pure green sync cover
        is_green = (avg_g > 150) and (avg_r < 80) and (avg_b < 80)
        if not is_green:
            start_frame = idx
            break

    start_sec = start_frame / fps
    print(f"Exact sync detection: Green pre-roll ended at frame #{start_frame} ({start_sec:.3f}s)")
    return start_sec

start_time = find_sync_start_time(raw_video)

# Get audio duration
audio_probe = [
    "ffprobe", "-v", "error",
    "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1",
    AUDIO_IN
]
audio_dur_res = subprocess.run(audio_probe, capture_output=True, text=True)
audio_duration = audio_dur_res.stdout.strip()
print(f"Master audio duration: {audio_duration}s")

# Muxing with master_audio.mp3 using FFmpeg with exact start-time seek
print(f"Muxing cinematic video with master audio to {FINAL_OUT_V2}...")

cmd = [
    "ffmpeg", "-y",
    "-ss", f"{start_time:.3f}",
    "-i", raw_video,
    "-i", AUDIO_IN,
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "192k",
    "-map", "0:v:0",
    "-map", "1:a:0",
    "-t", audio_duration,
    FINAL_OUT_V2
]

subprocess.run(cmd, check=True)

# Also copy to video-gioi-thieu-vlncn-cinematic.mp4 for compatibility
try:
    shutil.copy2(FINAL_OUT_V2, FINAL_OUT_CINEMATIC)
except Exception:
    pass

print(f"\n==========================================")
print(f"SUCCESS: Final Cinematic Video created:")
print(f"  -> {FINAL_OUT_V2}")
print(f"  -> {FINAL_OUT_CINEMATIC}")
print(f"==========================================")

# Probe file MP4 with ffprobe
probe_cmd = [
    "ffprobe", "-v", "error",
    "-show_entries", "format=duration,size,bit_rate:stream=width,height,r_frame_rate,codec_name",
    "-of", "default=noprint_wrappers=1",
    FINAL_OUT_V2
]
print("Final Video Specs:")
subprocess.run(probe_cmd)
