import os
from playwright.sync_api import sync_playwright

def capture_features():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()
        page.goto("http://dev-qn-mm.evotek.vn/login", wait_until="networkidle")
        
        # Đăng nhập Cổng Công an
        page.fill('input[type="text"]', "ca@vlncn.com")
        page.fill('input[type="password"]', "Admin@123")
        page.click('button:has-text("Đăng nhập")')
        page.wait_for_timeout(3000)
        
        # 1. Mở Cặp liên thông -> Click "Xem & duyệt cả cặp"
        try:
            page.click('a:has-text("Đăng ký & Yêu cầu"), button:has-text("Đăng ký & Yêu cầu")')
            page.wait_for_timeout(2000)
            btn = page.locator('button:has-text("Xem & duyệt cả cặp")').first
            if btn.is_visible():
                btn.click()
                page.wait_for_timeout(2500)
                page.screenshot(path="assets/screenshots/02c_modal_duyet_cap_lien_thong.png")
                print("Captured 02c_modal_duyet_cap_lien_thong.png")
        except Exception as e:
            print("Err modal cap lien thong:", e)
            
        # 2. Click menu "Giám sát hành trình vận..."
        try:
            page.click('text=/Giám sát hành trình/i')
            page.wait_for_timeout(4000)
            page.screenshot(path="assets/screenshots/05_ban_do_gps_hanh_trinh.png")
            print("Captured 05_ban_do_gps_hanh_trinh.png")
        except Exception as e:
            print("Err GPS:", e)
            
        # 3. Phiếu nhập/xuất -> click chi tiết phiếu có QR
        try:
            page.click('text=/Phiếu nhập\\/xuất kho/i')
            page.wait_for_timeout(2500)
            row = page.locator('table tbody tr, .card, div[role="row"]').first
            if row.is_visible():
                row.click()
                page.wait_for_timeout(2000)
                page.screenshot(path="assets/screenshots/07b_chi_tiet_phieu_qr.png")
                print("Captured 07b_chi_tiet_phieu_qr.png")
        except Exception as e:
            print("Err phieu QR:", e)
            
        context.close()
        browser.close()
        print("Feature capture completed.")

if __name__ == "__main__":
    capture_features()
