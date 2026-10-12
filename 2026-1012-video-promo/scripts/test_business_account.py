import time
import json
import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    page.goto('http://dev-qn-mm.evotek.vn/login')
    page.wait_for_selector('input')
    time.sleep(1)
    
    inputs = page.query_selector_all('input')
    print(f"Found {len(inputs)} inputs")
    inputs[0].fill('rulemoi_chiban')
    time.sleep(0.5)
    inputs[1].fill('Admin@123')
    time.sleep(0.5)
    
    # Click button login
    btn = page.query_selector('button[type="submit"], button:has-text("Đăng nhập")')
    if btn:
        btn.click()
    else:
        page.keyboard.press('Enter')
        
    time.sleep(3)
    page.wait_for_load_state('networkidle')
    time.sleep(2)
    
    print('After login URL:', page.url)
    page.screenshot(path='temp_after_login.png')
    
    # check error message if any
    err = page.query_selector('.ant-message, .ant-alert, [role="alert"]')
    if err:
        print('Alert text:', err.inner_text())
        
    browser.close()
