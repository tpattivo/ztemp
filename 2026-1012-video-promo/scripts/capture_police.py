import time
import os
import json
from playwright.sync_api import sync_playwright

os.makedirs('public/screenshots_v2', exist_ok=True)

def capture_police():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        print("Logging in as police: ca@vlncn.com...")
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        inputs = page.query_selector_all('input')
        inputs[0].fill('ca@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        print("Logged in as police. Current URL:", page.url)

        # Get sidebar menus
        menus = page.query_selector_all('aside a, .sidebar a, nav a, .ant-menu-item, li[role="menuitem"]')
        menu_info = []
        for m in menus:
            txt = m.inner_text().strip()
            href = m.get_attribute('href') or ''
            if txt:
                menu_info.append({'text': txt, 'href': href})
        
        with open('police_menus.json', 'w', encoding='utf-8') as f:
            json.dump(menu_info, f, ensure_ascii=False, indent=2)

        # 1. Capture Dashboard / Tổng quan
        page.screenshot(path='public/screenshots_v2/police_01_tong_quan.png', full_page=False)

        # 2. Capture Đăng ký & yêu cầu
        page.goto('http://dev-qn-mm.evotek.vn/ca/dang-ky')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        page.screenshot(path='public/screenshots_v2/police_02_dang_ky_yeu_cau.png')

        # 3. Capture Phiếu nhập xuất kho
        page.goto('http://dev-qn-mm.evotek.vn/ca/phieu-nhap-xuat')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        page.screenshot(path='public/screenshots_v2/police_03_phieu_nhap_xuat.png')

        # 4. Capture Quản lý kho
        page.goto('http://dev-qn-mm.evotek.vn/ca/kho')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        page.screenshot(path='public/screenshots_v2/police_04_quan_ly_kho.png')

        # 5. Capture Doanh nghiệp
        page.goto('http://dev-qn-mm.evotek.vn/ca/doanh-nghiep')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        page.screenshot(path='public/screenshots_v2/police_05_doanh_nghiep.png')

        # 6. Capture GPS
        page.goto('http://dev-qn-mm.evotek.vn/ca/gps')
        page.wait_for_load_state('networkidle')
        time.sleep(3)
        page.screenshot(path='public/screenshots_v2/police_06_giam_sat_gps.png')

        # 7. Capture Báo cáo
        page.goto('http://dev-qn-mm.evotek.vn/ca/bao-cao')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        page.screenshot(path='public/screenshots_v2/police_07_bao_cao.png')

        print("Captured all police screenshots!")
        browser.close()

if __name__ == '__main__':
    capture_police()
