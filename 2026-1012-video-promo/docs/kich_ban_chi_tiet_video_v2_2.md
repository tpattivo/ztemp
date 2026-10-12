# KỊCH BẢN CHI TIẾT VIDEO THUYẾT TRÌNH GIỚI THIỆU PHẦN MỀM (VERSION 2.2)
## HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP TỈNH QUẢNG NINH (PC06 - CÔNG AN TỈNH)

---

### THÔNG SỐ KỸ THUẬT PHIÊN BẢN V2.2 (BẢN CHÍNH THỨC NÂNG CẤP TOÀN DIỆN)
- **Độ phân giải:** 1920 × 1080 (Full HD, 16:9 widescreen)
- **Tốc độ khung hình:** 30 fps
- **Thời lượng:** 147.0 giây (2 phút 27 giây) = Đúng 4.410 frames
- **Font chữ thiết kế:** `Inter` (Google Fonts tiếng Việt chuẩn typography)
- **Logo giải pháp:** **Logo chính thức Bộ Công An / Công An Nhân Dân** mạ viền vàng kim, đồng nhất 100% với logo trên web thực tế `http://dev-qn-mm.evotek.vn`.
- **Tông màu nhận diện:** 
  - **Đỏ thắm CAND (Crimson Red):** `#B91C1C` / `#991B1B`.
  - **Xanh Navy chuyên dụng:** `#102C4D` (màu thanh Header & thanh điều hướng phần mềm trên web).
  - **Vàng kim danh dự:** `#D97706` / `#F59E0B`.
- **Bố cục không gian:** Dàn trải đều toàn bộ khung hình từ trên xuống dưới, không co rúm lên nửa trên.
- **Video click thực tế trên giao diện phần mềm web:**
  - Cổng Doanh nghiệp (`Scene4EnterpriseV2_2`): Nhúng video quay thực tế thao tác chuột trên web thật (`video_enterprise_ui.mp4`), thao tác các menu *Tổng quan*, *Doanh nghiệp*, *Kho & sức chứa thiết kế*, *Biểu mẫu phiếu in*.
  - Cổng PC06 (`Scene5PoliceFeaturesV2_2`): Nhúng video quay thực tế thao tác Trung tâm chỉ huy PC06 (`video_police_ui.mp4`), cuộn Dashboard cảnh báo kho vượt hạn mức, click menu *Đăng ký & Yêu cầu*, click *Giám sát GPS*.
- **Kiến trúc hệ thống mở rộng (Scene 3):**
  - Căn cứ pháp lý chuyển đổi số (Nghị quyết 57-NQ/TW, Đề án 06/CP, Luật 42/2024/QH15).
  - Nền tảng Cơ sở dữ liệu VLNCN tập trung (Single Source of Truth).
  - 3 Cổng nghiệp vụ liên thông (Cổng Doanh nghiệp, Cổng PC06, Cổng Quản trị).
  - Quy trình vận hành khép kín 8 bước liên thông toàn trình theo Slide 12 (Lập đơn -> Xác nhận -> Liên thông -> CA Duyệt -> Ghi sổ -> Vận chuyển -> Ca nổ -> Hậu kiểm).
- **Hiệu quả quản lý theo Slide 13 (Scene 6):**
  - 3 nhóm đối tượng thụ hưởng rõ rệt:
    1. **Đối với Lãnh đạo:** Bức tranh tổng thể gần thời gian thực; Dashboard chỉ đạo điều hành tức thời; Phát hiện sớm rủi ro (tồn vượt sức chứa, chậm báo cáo); Chủ động điều hành trên dữ liệu số thay vì chờ báo cáo giấy.
    2. **Đối với Cán bộ sử dụng (PC06):** Đối chiếu Bán/Mua tự động qua cặp liên thông hai chiều; Duyệt và cấp số điện tử trực tiếp trên hệ thống; Truy vết trách nhiệm nhanh qua QR và Audit log bất biến; Hậu kiểm lộ trình GPS và xuất báo cáo chỉ bằng vài thao tác. Rút ngắn thời gian xử lý thủ tục từ 2 ngày xuống vài phút.
    3. **Đối với Doanh nghiệp:** Dữ liệu tập trung chuẩn hóa, minh bạch tuyệt đối; Phối hợp Công an - Doanh nghiệp thuận lợi, thông suốt; Giảm thời gian tổng hợp báo cáo định kỳ; Nền tảng quản lý lâu dài, an toàn dữ liệu.
- **Khẩu hiệu Outro mới:**
  > *"TIÊN PHONG CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ — KIẾN TẠO MÔI TRƯỜNG MINH BẠCH, HIỆU QUẢ VÌ SỰ PHÁT TRIỂN BỀN VỮNG"*

---

### CẤU TRÚC 6 PHÂN CẢNH CHI TIẾT

| Chương | Tiêu đề phân cảnh | Thời lượng | Khung hình (Frames) | Điểm nhấn nâng cấp V2.2 |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Bối cảnh Quảng Ninh & 58 kho chứa | **24.0s** | Frame 0 – 720 | Logo Bộ Công An lớn mạ vàng, 2 thẻ số đếm khổng lồ dàn trải đều màn hình |
| **2** | 6 Điểm nghẽn từ khảo sát thực tế PC06 | **28.0s** | Frame 720 – 1.560 | Lưới 3x2 thẻ lỗi trải rộng toàn trang, sắc đỏ hổ phách cảnh báo chuyên nghiệp |
| **3** | Kiến trúc 3 Cổng & Quy trình 8 bước khép kín | **24.0s** | Frame 1.560 – 2.280 | Hub CSDL Navy `#102C4D`, Căn cứ pháp lý, 3 Cổng liên thông và Quy trình 8 bước (Slide 12) |
| **4** | Cổng Doanh nghiệp: Video thao tác thực tế | **24.0s** | Frame 2.280 – 3.000 | Video quay thực tế từ web: click các menu Kho, Sức chứa, Biểu mẫu phiếu in |
| **5** | Cổng Công an PC06: Video thao tác thực tế | **25.0s** | Frame 3.000 – 3.750 | Video quay thực tế từ web: Dashboard kho vượt mức, menu Đăng ký & Giám sát GPS |
| **6** | Hiệu quả Quản trị (Slide 13) & Outro CĐS | **22.0s** | Frame 3.750 – 4.410 | 3 Cột giá trị cho Lãnh đạo - Cán bộ - Doanh nghiệp (Slide 13) + Khẩu hiệu CĐS Quản trị |
| **TỔNG** | **Toàn bộ bài thuyết trình Video V2.2** | **147.0s** | **4.410 frames** | **Chuẩn xác từng giây theo lời bình** |
