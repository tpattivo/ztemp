import os
import glob
import time
import subprocess
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BASE_DIR)
RAW_DIR = os.path.join(BASE_DIR, ".temp_raw")
FINAL_OUT = os.path.join(REPO_ROOT, "output", "video-gioi-thieu-vlncn.mp4")
AUDIO_IN = os.path.join(REPO_ROOT, "assets", "audio", "master_audio.mp3")

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(os.path.dirname(FINAL_OUT), exist_ok=True)

# Dọn dẹp thư mục raw trước khi quay
for f in glob.glob(os.path.join(RAW_DIR, "*")):
    try:
        os.remove(f)
    except Exception:
        pass

html_abs = os.path.join(BASE_DIR, "video_stage.html").replace("\\", "/")
file_url = f"file:///{html_abs}"

print(f"Opening stage: {file_url}")

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        args=["--autoplay-policy=no-user-gesture-required", "--disable-gpu-vsync"]
    )
    context = browser.new_context(
        record_video_dir=RAW_DIR,
        record_video_size={"width": 1920, "height": 1080},
        viewport={"width": 1920, "height": 1080}
    )
    page = context.new_page()
    page.goto(file_url, wait_until="networkidle")
    
    # Chờ 2 giây để load toàn bộ font và ảnh
    time.sleep(2)
    
    print("Starting animated video playback...")
    page.evaluate("window.startPlayback()")
    
    # Thời lượng video: 81.5 giây (khớp với audio Chirp 3 Algenib)
    total_sec = 81.5
    start_t = time.time()
    last_printed_step = -1
    while time.time() - start_t < total_sec:
        elapsed = time.time() - start_t
        step = int(elapsed // 10)
        if step > last_printed_step:
            last_printed_step = step
            print(f"Recording progress: {elapsed:.1f}/{total_sec}s", flush=True)
        time.sleep(0.5)
        
    print("Recording finished. Closing page to save video...")
    page.close()
    context.close()
    browser.close()

# Tìm file video raw do Playwright xuất ra
raw_videos = glob.glob(os.path.join(RAW_DIR, "*.webm"))
if not raw_videos:
    raise RuntimeError("No raw video produced by Playwright!")

raw_video = raw_videos[0]
print(f"Captured raw video: {raw_video}")

# Muxing với master_audio.mp3 bằng FFmpeg
print(f"Muxing video with master audio using FFmpeg to {FINAL_OUT}...")

cmd = [
    "ffmpeg", "-y",
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
    "-shortest",
    FINAL_OUT
]

subprocess.run(cmd, check=True)
print(f"\n==========================================")
print(f"SUCCESS: Final Video created: {FINAL_OUT}")
print(f"==========================================")

# Probe file MP4 bằng ffprobe
probe_cmd = [
    "ffprobe", "-v", "error",
    "-show_entries", "format=duration,size,bit_rate:stream=width,height,r_frame_rate,codec_name",
    "-of", "default=noprint_wrappers=1",
    FINAL_OUT
]
print("Final Video Specs:")
subprocess.run(probe_cmd)
