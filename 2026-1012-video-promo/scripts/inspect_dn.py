import time
import os
import json
from playwright.sync_api import sync_playwright

def inspect_dn_portal():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        # Login as admin
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        inputs = page.query_selector_all('input')
        inputs[0].fill('admin@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_load_state('networkidle')
        time.sleep(1)

        # Inspect Admin Sidebar
        menus = page.query_selector_all('aside a, .sidebar a, nav a, .ant-menu-item, li[role="menuitem"]')
        admin_menus = [{'text': m.inner_text().strip(), 'href': m.get_attribute('href') or ''} for m in menus if m.inner_text().strip()]
        with open('admin_menus.json', 'w', encoding='utf-8') as f:
            json.dump(admin_menus, f, ensure_ascii=False, indent=2)

        # Go to user management
        page.goto('http://dev-qn-mm.evotek.vn/admin/nguoi-dung')
        page.wait_for_load_state('networkidle')
        time.sleep(2)

        # Let's see what happens if we click edit on user thang.pmjin or duyanh1
        # Click on action menu of first row
        first_row = page.query_selector('table tbody tr')
        if first_row:
            # find all clickable elements in row
            actions = first_row.query_selector_all('button, a, svg')
            print("Row action count:", len(actions))
            # Let's take a screenshot of user management
            page.screenshot(path='public/screenshots_v2/admin_user_mgmt.png')

        browser.close()

if __name__ == '__main__':
    inspect_dn_portal()
