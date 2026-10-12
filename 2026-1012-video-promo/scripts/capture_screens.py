import os
import sys
import time
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')
os.makedirs('assets/screenshots', exist_ok=True)

def capture_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080}, device_scale_factor=1)
        page = context.new_page()

        print("1. Đang mở trang đăng nhập...")
        page.goto("http://dev-qn-mm.evotek.vn/login", timeout=30000)
        page.wait_for_timeout(2000)
        page.screenshot(path="assets/screenshots/00_login.png")
        print("-> Đã lưu 00_login.png")

        # Điền form
        page.fill("#email", "ca@vlncn.com")
        page.fill("#password", "Admin@123")
        page.click('button[type="submit"]')
        print("Đã bấm nút Đăng nhập...")
        page.wait_for_timeout(5000)

        print("URL sau đăng nhập:", page.url)
        page.screenshot(path="assets/screenshots/01_police_dashboard.png")
        print("-> Đã lưu 01_police_dashboard.png")

        # Thu thập tất cả các liên kết trong sidebar / navigation
        links = page.query_selector_all("aside a, .ant-layout-sider a, .ant-menu a")
        print(f"Tìm thấy {len(links)} mục menu.")
        
        visited_urls = set()
        visited_urls.add(page.url)

        nav_items = []
        for l in links:
            txt = l.inner_text().strip().replace("\n", " ")
            href = l.get_attribute("href")
            if href and href not in visited_urls and href != "/login":
                nav_items.append((txt, href))
                visited_urls.add(href)

        for idx, (txt, href) in enumerate(nav_items):
            target = href if href.startswith("http") else f"http://dev-qn-mm.evotek.vn{href}"
            print(f"Điều hướng tới: {txt} ({target})")
            try:
                page.goto(target, timeout=20000)
                page.wait_for_timeout(3500)
                safe_name = "".join(c for c in txt if c.isalnum() or c in (' ', '_', '-')).strip().replace(' ', '_')
                filename = f"assets/screenshots/{idx+2:02d}_{safe_name[:25]}.png"
                page.screenshot(path=filename)
                print(f"-> Đã lưu {filename}")
            except Exception as e:
                print(f"Lỗi truy cập {target}: {e}")

        # Thử thêm đăng nhập Admin nếu cần chụp trang cấu hình
        print("\n--- Đăng nhập Admin để chụp các trang quản trị nền ---")
        page.goto("http://dev-qn-mm.evotek.vn/login")
        page.wait_for_timeout(2000)
        page.fill("#email", "admin@vlncn.com")
        page.fill("#password", "Admin@123")
        page.click('button[type="submit"]')
        page.wait_for_timeout(5000)
        print("Admin URL sau đăng nhập:", page.url)
        page.screenshot(path="assets/screenshots/admin_dashboard.png")
        print("-> Đã lưu admin_dashboard.png")

        admin_links = page.query_selector_all("aside a, .ant-layout-sider a, .ant-menu a")
        for idx, l in enumerate(admin_links):
            txt = l.inner_text().strip().replace("\n", " ")
            href = l.get_attribute("href")
            if href and href not in visited_urls and href != "/login":
                visited_urls.add(href)
                target = href if href.startswith("http") else f"http://dev-qn-mm.evotek.vn{href}"
                try:
                    page.goto(target, timeout=20000)
                    page.wait_for_timeout(3500)
                    safe_name = "".join(c for c in txt if c.isalnum() or c in (' ', '_', '-')).strip().replace(' ', '_')
                    filename = f"assets/screenshots/admin_{idx:02d}_{safe_name[:25]}.png"
                    page.screenshot(path=filename)
                    print(f"-> Đã lưu {filename}")
                except Exception as e:
                    pass

        browser.close()
        print("Hoàn thành chụp toàn bộ màn hình thực tế!")

if __name__ == "__main__":
    capture_app()
