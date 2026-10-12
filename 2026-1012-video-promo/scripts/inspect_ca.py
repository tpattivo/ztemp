import sys
import os
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')
os.makedirs('assets/screenshots', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    
    print("Logging into CA...")
    page.goto('http://dev-qn-mm.evotek.vn/login')
    page.wait_for_timeout(1000)
    page.fill('#email', 'ca@vlncn.com')
    page.fill('#password', 'Admin@123')
    page.click('button[type="submit"]')
    page.wait_for_timeout(4000)
    
    print("Current URL:", page.url)
    page.screenshot(path='assets/screenshots/01_ca_dashboard.png', full_page=True)
    print("Saved 01_ca_dashboard.png")
    
    # Print all text in sidebar or navigation
    nav_links = page.query_selector_all('a, button, li, .ant-menu-item')
    print(f"Found {len(nav_links)} elements. Listing interesting ones:")
    for el in nav_links:
        try:
            txt = el.inner_text().strip().replace('\n', ' ')
            href = el.get_attribute('href') or ''
            if txt and len(txt) < 50 and any(keyword in txt.lower() for keyword in ['tổng quan', 'giám sát', 'kho', 'phiếu', 'yêu cầu', 'liên thông', 'hậu kiểm', 'gps', 'qr', 'doanh nghiệp', 'báo cáo', 'cảnh báo']):
                print(f"  -> '{txt}' | href: '{href}' | tag: {el.evaluate('e => e.tagName')}")
        except:
            pass

    browser.close()
