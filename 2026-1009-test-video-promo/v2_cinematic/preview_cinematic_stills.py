import os
import time
from playwright.sync_api import sync_playwright

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE_DIR, "previews", "cinematic_stills")
os.makedirs(OUT_DIR, exist_ok=True)

html_abs = os.path.join(BASE_DIR, "video_stage_cinematic.html").replace("\\", "/")
file_url = f"file:///{html_abs}"

print(f"Opening stage for still captures: {file_url}")

stills = [
    (3.0, "s1_drone_intro.png"),
    (8.0, "s1_coal_mine_metric.png"),
    (14.0, "s1_explosives_depot.png"),
    (24.0, "s2_police_command_3gates.png"),
    (36.0, "s3_dashboard_pc06.png"),
    (42.5, "s3_cap_lien_thong_stamp.png"),
    (48.0, "s3_gps_tracking_highway.png"),
    (61.0, "s4_impact_strike_through.png"),
    (74.0, "s5_epic_outro.png")
]

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        args=["--autoplay-policy=no-user-gesture-required", "--disable-gpu-vsync"]
    )
    page = browser.new_page(viewport={"width": 1920, "height": 1080})
    page.goto(file_url, wait_until="domcontentloaded")
    time.sleep(2)

    for t, filename in stills:
        page.evaluate(f"window.seekTo({t})")
        time.sleep(0.5)
        out_path = os.path.join(OUT_DIR, filename)
        page.screenshot(path=out_path)
        print(f"Captured {filename} at t={t}s")

    browser.close()

print("All stills captured successfully!")
