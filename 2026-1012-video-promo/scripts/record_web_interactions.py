import time
import os
import subprocess
from playwright.sync_api import sync_playwright

os.makedirs('public/recordings', exist_ok=True)
os.makedirs('temp_recordings', exist_ok=True)

def record_pc06():
    print("--- RECORDING PC06 PORTAL ---")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            record_video_dir='temp_recordings',
            record_video_size={'width': 1920, 'height': 1080}
        )
        page = context.new_page()

        # 1. Login PC06
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        time.sleep(1)
        inputs = page.query_selector_all('input')
        inputs[0].fill('ca@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_load_state('networkidle')
        time.sleep(2)

        # 2. In Dashboard: smooth scroll down & up
        page.mouse.move(960, 500)
        time.sleep(1)
        for i in range(5):
            page.mouse.wheel(0, 150)
            time.sleep(0.3)
        time.sleep(1)
        for i in range(5):
            page.mouse.wheel(0, -150)
            time.sleep(0.3)
        time.sleep(1)

        # 3. Click menu "Đăng ký & Yêu cầu"
        menu_dk = page.query_selector('a:has-text("Đăng ký & Yêu cầu"), .ant-menu-item:has-text("Đăng ký & Yêu cầu"), aside span:has-text("Đăng ký & Yêu cầu")')
        if menu_dk:
            box = menu_dk.bounding_box()
            if box:
                page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                time.sleep(0.5)
            menu_dk.click()
        else:
            page.goto('http://dev-qn-mm.evotek.vn/ca/dang-ky')
        page.wait_for_load_state('networkidle')
        time.sleep(2.5)

        # Scroll on list
        page.mouse.wheel(0, 200)
        time.sleep(1)
        page.mouse.wheel(0, -200)
        time.sleep(1)

        # 4. Click menu "Giám sát hành trình vận chuyển (GPS)"
        menu_gps = page.query_selector('a:has-text("GPS"), a:has-text("Giám sát hành trình"), .ant-menu-item:has-text("GPS"), aside span:has-text("GPS")')
        if menu_gps:
            box = menu_gps.bounding_box()
            if box:
                page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                time.sleep(0.5)
            menu_gps.click()
        else:
            page.goto('http://dev-qn-mm.evotek.vn/ca/gps')
        page.wait_for_load_state('networkidle')
        time.sleep(3.5)

        # 5. Click menu "Phiếu nhập/xuất kho"
        menu_phieu = page.query_selector('a:has-text("Phiếu nhập/xuất kho"), .ant-menu-item:has-text("Phiếu nhập/xuất kho"), aside span:has-text("Phiếu nhập/xuất kho")')
        if menu_phieu:
            menu_phieu.click()
            page.wait_for_load_state('networkidle')
            time.sleep(2.5)

        video_path = page.video.path()
        context.close()
        browser.close()

        # Convert webm to mp4 using ffmpeg
        out_mp4 = 'public/recordings/video_police_ui.mp4'
        cmd = ['ffmpeg', '-y', '-i', video_path, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-r', '30', out_mp4]
        subprocess.run(cmd, check=True)
        print(f"Exported PC06 video to {out_mp4}")


def record_enterprise():
    print("--- RECORDING ENTERPRISE & ADMIN PORTAL ---")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            record_video_dir='temp_recordings',
            record_video_size={'width': 1920, 'height': 1080}
        )
        page = context.new_page()

        # 1. Login Admin / Enterprise
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        time.sleep(1)
        inputs = page.query_selector_all('input')
        inputs[0].fill('admin@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_load_state('networkidle')
        time.sleep(2)

        # 2. View Overview
        time.sleep(1.5)
        page.mouse.wheel(0, 180)
        time.sleep(1)
        page.mouse.wheel(0, -180)
        time.sleep(1)

        # 3. Click "Kho & sức chứa thiết kế"
        menu_kho = page.query_selector('a:has-text("Kho & sức chứa"), .ant-menu-item:has-text("Kho & sức chứa"), aside span:has-text("Kho & sức chứa")')
        if menu_kho:
            box = menu_kho.bounding_box()
            if box:
                page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                time.sleep(0.5)
            menu_kho.click()
        else:
            page.goto('http://dev-qn-mm.evotek.vn/admin/kho')
        page.wait_for_load_state('networkidle')
        time.sleep(2.5)

        # Scroll on Kho list
        page.mouse.wheel(0, 220)
        time.sleep(1)
        page.mouse.wheel(0, -220)
        time.sleep(1)

        # 4. Click "Doanh nghiệp"
        menu_dn = page.query_selector('a:has-text("Doanh nghiệp"), .ant-menu-item:has-text("Doanh nghiệp"), aside span:has-text("Doanh nghiệp")')
        if menu_dn:
            box = menu_dn.bounding_box()
            if box:
                page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                time.sleep(0.5)
            menu_dn.click()
        else:
            page.goto('http://dev-qn-mm.evotek.vn/admin/doanh-nghiep')
        page.wait_for_load_state('networkidle')
        time.sleep(2.5)

        # 5. Click "Biểu mẫu phiếu in"
        menu_bm = page.query_selector('a:has-text("Biểu mẫu"), .ant-menu-item:has-text("Biểu mẫu"), aside span:has-text("Biểu mẫu")')
        if menu_bm:
            menu_bm.click()
            page.wait_for_load_state('networkidle')
            time.sleep(2.5)

        video_path = page.video.path()
        context.close()
        browser.close()

        # Convert webm to mp4 using ffmpeg
        out_mp4 = 'public/recordings/video_enterprise_ui.mp4'
        cmd = ['ffmpeg', '-y', '-i', video_path, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-r', '30', out_mp4]
        subprocess.run(cmd, check=True)
        print(f"Exported Enterprise video to {out_mp4}")


if __name__ == '__main__':
    record_pc06()
    record_enterprise()
