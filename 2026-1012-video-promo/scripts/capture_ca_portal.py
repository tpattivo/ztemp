import sys
import os
import time
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')
os.makedirs('assets/screenshots', exist_ok=True)

PAGES_TO_CAPTURE = [
    ("01_dashboard_tong_quan", "http://dev-qn-mm.evotek.vn/ca"),
    ("02_dang_ky_yeu_cau_lien_thong", "http://dev-qn-mm.evotek.vn/ca/dang-ky"),
    ("03_phieu_nhap_xuat_kho", "http://dev-qn-mm.evotek.vn/ca/phieu"),
    ("04_quan_ly_kho_ton", "http://dev-qn-mm.evotek.vn/ca/kho"),
    ("05_danh_sach_doanh_nghiep", "http://dev-qn-mm.evotek.vn/ca/doanh-nghiep"),
    ("06_bao_cao_nhap_xuat_ton", "http://dev-qn-mm.evotek.vn/ca/bao-cao"),
]

def capture_all():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080}, device_scale_factor=1)
        page = context.new_page()

        print("Đang đăng nhập Cổng Công An...")
        page.goto('http://dev-qn-mm.evotek.vn/login')
        page.wait_for_timeout(1000)
        page.fill('#email', 'ca@vlncn.com')
        page.fill('#password', 'Admin@123')
        page.click('button[type="submit"]')
        page.wait_for_timeout(4000)

        for name, url in PAGES_TO_CAPTURE:
            print(f"Chụp trang: {name} ({url})...")
            try:
                page.goto(url, timeout=20000)
                page.wait_for_timeout(3000)
                path = f"assets/screenshots/{name}.png"
                page.screenshot(path=path)
                print(f"  -> Đã lưu {path}")
            except Exception as e:
                print(f"  -> Lỗi: {e}")

        # Thử tìm mục GPS
        try:
            gps_btn = page.query_selector("text='Giám sát hành trình vận chuyển (GPS)'")
            if gps_btn:
                print("Bấm vào Giám sát GPS...")
                gps_btn.click()
                page.wait_for_timeout(4000)
                page.screenshot(path="assets/screenshots/07_giam_sat_gps.png")
                print("  -> Đã lưu assets/screenshots/07_giam_sat_gps.png")
        except Exception as e:
            print("Lỗi GPS:", e)

        # Thử vào chi tiết 1 kho để xem biểu đồ và sức chứa
        try:
            print("Chụp chi tiết kho...")
            page.goto("http://dev-qn-mm.evotek.vn/ca/kho", timeout=15000)
            page.wait_for_timeout(2500)
            first_row = page.query_selector("table tbody tr a, .ant-table-row a")
            if first_row:
                first_row.click()
                page.wait_for_timeout(3000)
                page.screenshot(path="assets/screenshots/08_chi_tiet_kho_suc_chua.png")
                print("  -> Đã lưu assets/screenshots/08_chi_tiet_kho_suc_chua.png")
        except Exception as e:
            print("Lỗi chi tiết kho:", e)

        browser.close()
        print("Hoàn tất chụp screenshots!")

if __name__ == "__main__":
    capture_all()
