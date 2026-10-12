import time
import os
import json
from playwright.sync_api import sync_playwright

def inspect_users():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        time.sleep(1)
        inputs = page.query_selector_all('input')
        inputs[0].fill('admin@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_load_state('networkidle')
        time.sleep(2)

        page.goto('http://dev-qn-mm.evotek.vn/admin/nguoi-dung')
        page.wait_for_load_state('networkidle')
        time.sleep(2)
        
        rows = page.query_selector_all('table tbody tr')
        user_list = []
        for r in rows:
            tds = [td.inner_text().strip() for td in r.query_selector_all('td')]
            user_list.append(tds)

        with open('users.json', 'w', encoding='utf-8') as f:
            json.dump(user_list, f, ensure_ascii=False, indent=2)

        browser.close()

if __name__ == '__main__':
    inspect_users()
