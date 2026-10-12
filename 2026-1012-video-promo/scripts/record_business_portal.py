import time
import os
import subprocess
from playwright.sync_api import sync_playwright

os.makedirs('temp_recordings', exist_ok=True)
os.makedirs('public/recordings', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={'width': 1920, 'height': 1080},
        record_video_dir='temp_recordings',
        record_video_size={'width': 1920, 'height': 1080}
    )
    page = context.new_page()

    # 1. Login with Business Account
    page.goto('http://dev-qn-mm.evotek.vn/login')
    page.wait_for_selector('input')
    time.sleep(1)
    inputs = page.query_selector_all('input')
    inputs[0].fill('rulemoi_chiban')
    time.sleep(0.3)
    inputs[1].fill('Admin@123')
    time.sleep(0.3)
    btn = page.query_selector('button[type="submit"], button:has-text("Đăng nhập")')
    if btn:
        btn.click()
    else:
        page.keyboard.press('Enter')
    page.wait_for_load_state('networkidle')
    time.sleep(2.5)

    # 2. Trang chu (Dashboard Overview)
    # Move mouse smoothly to greeting and quick action buttons
    page.mouse.move(300, 150)
    time.sleep(1.2)
    page.mouse.move(800, 250)
    time.sleep(1.0)
    
    # Scroll down to show warehouse capacities
    for _ in range(4):
        page.mouse.wheel(0, 150)
        time.sleep(0.25)
    time.sleep(1.5)
    
    # Scroll back up
    for _ in range(4):
        page.mouse.wheel(0, -150)
        time.sleep(0.25)
    time.sleep(1.2)

    # 3. Click menu "Đăng ký & Yêu cầu"
    menu_dk = page.query_selector('aside span:has-text("Đăng ký & Yêu cầu"), aside a:has-text("Đăng ký & Yêu cầu"), .ant-menu-item:has-text("Đăng ký & Yêu cầu")')
    if menu_dk:
        box = menu_dk.bounding_box()
        if box:
            page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
            time.sleep(0.6)
        menu_dk.click()
    else:
        page.goto('http://dev-qn-mm.evotek.vn/business/dang-ky')
    page.wait_for_load_state('networkidle')
    time.sleep(3.0)
    
    # Scroll list on "Dang ky & Yeu cau"
    page.mouse.wheel(0, 180)
    time.sleep(0.8)
    page.mouse.wheel(0, -180)
    time.sleep(1.0)

    # 4. Click menu "Phiếu nhập/xuất kho"
    menu_phieu = page.query_selector('aside span:has-text("Phiếu nhập/xuất kho"), aside a:has-text("Phiếu nhập/xuất kho"), .ant-menu-item:has-text("Phiếu nhập/xuất kho")')
    if menu_phieu:
        box = menu_phieu.bounding_box()
        if box:
            page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
            time.sleep(0.6)
        menu_phieu.click()
    else:
        page.goto('http://dev-qn-mm.evotek.vn/business/phieu')
    page.wait_for_load_state('networkidle')
    time.sleep(3.0)
    
    # Scroll on phieu list
    page.mouse.wheel(0, 200)
    time.sleep(0.8)
    page.mouse.wheel(0, -200)
    time.sleep(1.0)

    # 5. Click menu "Sổ Tồn kho & Kiểm kê"
    menu_kho = page.query_selector('aside span:has-text("Sổ Tồn kho"), aside a:has-text("Sổ Tồn kho"), .ant-menu-item:has-text("Sổ Tồn kho")')
    if menu_kho:
        box = menu_kho.bounding_box()
        if box:
            page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
            time.sleep(0.6)
        menu_kho.click()
    else:
        page.goto('http://dev-qn-mm.evotek.vn/business/ton-kho')
    page.wait_for_load_state('networkidle')
    time.sleep(3.0)

    # Finish recording
    video_path = page.video.path()
    context.close()
    browser.close()

    # Convert webm to mp4
    out_mp4 = 'public/recordings/video_enterprise_ui.mp4'
    cmd = ['ffmpeg', '-y', '-i', video_path, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-r', '30', out_mp4]
    subprocess.run(cmd, check=True)
    print(f"Recorded business video saved to {out_mp4}")
