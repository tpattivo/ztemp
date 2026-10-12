import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    page.goto('http://dev-qn-mm.evotek.vn/login')
    page.wait_for_selector('input')
    inputs = page.query_selector_all('input')
    inputs[0].fill('admin@vlncn.com')
    inputs[1].fill('Admin@123')
    page.click('button:has-text("Đăng nhập")')
    time.sleep(2)
    page.goto('http://dev-qn-mm.evotek.vn/admin/nguoi-dung')
    time.sleep(2)
    
    # Check buttons on page
    buttons = page.query_selector_all('button')
    for b in buttons:
        txt = b.inner_text().strip()
        if txt:
            print('Button:', txt)

    # Click first row edit/action button if any
    first_row = page.query_selector('table tbody tr')
    if first_row:
        act_btns = first_row.query_selector_all('button')
        print(f"Action buttons in row: {len(act_btns)}")
        for idx, btn in enumerate(act_btns):
            print(f"  btn {idx}: {btn.get_attribute('title') or btn.inner_text()}")

    browser.close()
