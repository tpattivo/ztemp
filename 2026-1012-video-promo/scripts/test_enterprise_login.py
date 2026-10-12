import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    
    # Try login as duyanh1 / Admin@123
    page.goto('http://dev-qn-mm.evotek.vn/login')
    page.wait_for_selector('input')
    inputs = page.query_selector_all('input')
    inputs[0].fill('duyanh1')
    inputs[1].fill('Admin@123')
    page.click('button:has-text("Đăng nhập")')
    time.sleep(2)
    print('duyanh1 login URL:', page.url)
    
    if '/login' in page.url:
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        inputs = page.query_selector_all('input')
        inputs[0].fill('thangpm')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        time.sleep(2)
        print('thangpm login URL:', page.url)

    if '/login' in page.url:
        # Try reset duyanh1 password from admin
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_selector('input')
        inputs = page.query_selector_all('input')
        inputs[0].fill('admin@vlncn.com')
        inputs[1].fill('Admin@123')
        page.click('button:has-text("Đăng nhập")')
        time.sleep(2)
        page.goto('http://dev-qn-mm.evotek.vn/admin/nguoi-dung')
        time.sleep(2)
        print('Admin URL:', page.url)

    browser.close()
