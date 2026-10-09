import os
import time
from playwright.sync_api import sync_playwright

os.makedirs("assets/screenshots", exist_ok=True)

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # --- 1. TÀI KHOẢN CÔNG AN (PC06) ---
        print("Logging in as Police (ca@vlncn.com)...")
        context_ca = browser.new_context(viewport={"width": 1920, "height": 1080})
        page_ca = context_ca.new_page()
        page_ca.goto("http://dev-qn-mm.evotek.vn/login", wait_until="networkidle")
        
        # Điền form đăng nhập
        page_ca.fill('input[type="text"], input[name="username"], input[placeholder*="email"]', "ca@vlncn.com")
        page_ca.fill('input[type="password"]', "Admin@123")
        page_ca.click('button:has-text("Đăng nhập")')
        page_ca.wait_for_timeout(3000)
        page_ca.screenshot(path="assets/screenshots/01_ca_dashboard.png")
        print("Captured 01_ca_dashboard.png")
        
        # Tìm menu và điều hướng qua các trang
        # Lấy danh sách menu items
        menu_items = page_ca.query_selector_all('nav a, aside a, .sidebar a, .menu a, ul li a')
        print(f"Found {len(menu_items)} menu items in CA view")
        for item in menu_items:
            try:
                text = item.inner_text().strip()
                href = item.get_attribute("href")
                print(f"  Menu CA: '{text}' -> {href}")
            except Exception:
                pass
                
        # Thử click hoặc chuyển trang các nghiệp vụ của CA
        # Ví dụ: Cặp liên thông / Yêu cầu
        links = page_ca.locator('a, button, div[role="menuitem"]')
        for target in ["Yêu cầu", "Liên thông", "Cặp liên thông", "Kho", "VLNCN", "Giám sát", "Báo cáo", "Hành trình"]:
            try:
                el = page_ca.locator(f'text="{target}"').first
                if el.is_visible(timeout=1000):
                    el.click()
                    page_ca.wait_for_timeout(2000)
                    safe_name = target.replace(" ", "_").lower()
                    page_ca.screenshot(path=f"assets/screenshots/02_ca_{safe_name}.png")
                    print(f"Captured 02_ca_{safe_name}.png")
            except Exception as e:
                pass
                
        context_ca.close()
        
        # --- 2. TÀI KHOẢN ADMIN ---
        print("\nLogging in as Admin (admin@vlncn.com)...")
        context_admin = browser.new_context(viewport={"width": 1920, "height": 1080})
        page_admin = context_admin.new_page()
        page_admin.goto("http://dev-qn-mm.evotek.vn/login", wait_until="networkidle")
        
        page_admin.fill('input[type="text"], input[name="username"], input[placeholder*="email"]', "admin@vlncn.com")
        page_admin.fill('input[type="password"]', "Admin@123")
        page_admin.click('button:has-text("Đăng nhập")')
        page_admin.wait_for_timeout(3000)
        page_admin.screenshot(path="assets/screenshots/03_admin_dashboard.png")
        print("Captured 03_admin_dashboard.png")
        
        # Tìm menu Admin
        for target in ["Doanh nghiệp", "Kho", "Chủng loại", "Nhật ký", "Biểu mẫu", "Người dùng"]:
            try:
                el = page_admin.locator(f'text="{target}"').first
                if el.is_visible(timeout=1000):
                    el.click()
                    page_admin.wait_for_timeout(2000)
                    safe_name = target.replace(" ", "_").lower()
                    page_admin.screenshot(path=f"assets/screenshots/04_admin_{safe_name}.png")
                    print(f"Captured 04_admin_{safe_name}.png")
            except Exception as e:
                pass
                
        context_admin.close()
        browser.close()
        print("\nCapture finished successfully!")

if __name__ == "__main__":
    capture()
