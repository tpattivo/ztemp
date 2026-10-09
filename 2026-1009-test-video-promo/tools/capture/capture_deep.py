import os
import time
from playwright.sync_api import sync_playwright

os.makedirs("assets/screenshots", exist_ok=True)

def capture_deep():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()
        page.goto("http://dev-qn-mm.evotek.vn/login", wait_until="networkidle")
        
        # Đăng nhập Cổng Công an
        page.fill('input[type="text"], input[name="username"], input[placeholder*="email"]', "ca@vlncn.com")
        page.fill('input[type="password"]', "Admin@123")
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_timeout(3000)
        
        # 1. Click vào "Duyệt ngay" trên banner cảnh báo (hoặc Đăng ký & Yêu cầu)
        try:
            page.click('button:has-text("Duyệt ngay"), a:has-text("Duyệt ngay")')
            page.wait_for_timeout(2500)
            page.screenshot(path="assets/screenshots/02_cap_lien_thong_list.png")
            print("Captured 02_cap_lien_thong_list.png")
            
            # Click vào xem chi tiết một cặp liên thông / yêu cầu đầu tiên trong bảng nếu có
            first_row = page.locator('table tbody tr').first
            if first_row.is_visible(timeout=2000):
                first_row.click()
                page.wait_for_timeout(2000)
                page.screenshot(path="assets/screenshots/02b_cap_lien_thong_detail.png")
                print("Captured 02b_cap_lien_thong_detail.png")
        except Exception as e:
            print("Error clicking Duyet ngay:", e)
            
        # 2. Click "Giám sát hành trình vận chuyển"
        try:
            page.click('text="Giám sát hành trình"')
            page.wait_for_timeout(3000)
            page.screenshot(path="assets/screenshots/05_giam_sat_hanh_trinh_gps.png")
            print("Captured 05_giam_sat_hanh_trinh_gps.png")
        except Exception as e:
            print("Error clicking Giam sat hanh trinh:", e)
            
        # 3. Click "Quản lý kho"
        try:
            page.click('text="Quản lý kho"')
            page.wait_for_timeout(2500)
            page.screenshot(path="assets/screenshots/06_quan_ly_kho.png")
            print("Captured 06_quan_ly_kho.png")
        except Exception as e:
            print("Error clicking Quan ly kho:", e)
            
        # 4. Click "Phiếu nhập/xuất kho"
        try:
            page.click('text="Phiếu nhập/xuất kho"')
            page.wait_for_timeout(2500)
            page.screenshot(path="assets/screenshots/07_phieu_nhap_xuat.png")
            print("Captured 07_phieu_nhap_xuat.png")
        except Exception as e:
            print("Error clicking Phieu nhap xuat:", e)
            
        context.close()
        browser.close()
        print("Deep capture done!")

if __name__ == "__main__":
    capture_deep()
