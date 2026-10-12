# BÁO CÁO NGHIỆM THU VIDEO PROMO VERSION 2.2
**Hệ thống Quản lý Vật liệu Nổ Công nghiệp (VLNCN) — Tỉnh Quảng Ninh**
**Đơn vị thực hiện / chủ trì:** Công an tỉnh Quảng Ninh — Phòng PC06

---

## 1. TỔNG QUAN NÂNG CẤP PHIÊN BẢN 2.2

Theo các yêu cầu chỉ đạo mới nhất từ người dùng:
1. **Quay video tương tác thực tế từ hệ thống web thực (Không dùng ảnh chụp màn hình tĩnh):**
   - Đã điều khiển trình duyệt truy cập hệ thống `http://dev-qn-mm.evotek.vn/` để quay video thao tác click, duyệt menu, cuộn trang.
   - **Cổng Doanh nghiệp (`Scene4EnterpriseV2_2`)**: Quay video thao tác Tổng quan, Kho & Sức chứa thiết kế, Doanh nghiệp, Biểu mẫu phiếu in. Lưu thành file video chuẩn `public/recordings/video_enterprise_ui.mp4` và nhúng trực tiếp qua thẻ `<Video />` của Remotion.
   - **Cổng PC06 (`Scene5PoliceFeaturesV2_2`)**: Quay video tương tác Trung tâm chỉ huy, Dashboard cảnh báo kho vượt hạn mức, menu Đăng ký & Yêu cầu, menu Giám sát GPS hành trình vận chuyển. Lưu thành `public/recordings/video_police_ui.mp4` và nhúng trực tiếp.

2. **Nâng cấp toàn diện phần "6. Hiệu quả QL" bám sát Slide 13 (`QLVLNCN_08102026.pdf`):**
   - Thiết kế layout 3 cột phân định rõ ràng 3 nhóm thụ hưởng:
     - **Đối với Lãnh đạo:** Bức tranh tồn kho & lưu chuyển toàn thành phố gần thời gian thực; Dashboard báo cáo và cảnh báo tức thời; Phát hiện sớm rủi ro (tồn vượt sức chứa, chậm báo cáo); Chỉ đạo điều hành chủ động trên dữ liệu số thay vì chờ giấy tờ truyền thống.
     - **Đối với Cán bộ sử dụng (PC06):** Đối chiếu Bán/Mua tự động qua cặp liên thông hai chiều; Duyệt và cấp số điện tử trực tiếp trên hệ thống thay cho ký giấy chuyển văn thư; Truy vết trách nhiệm tức thì qua mã QR và vòng đời bất biến; Hậu kiểm lộ trình GPS và xuất báo cáo Nhập - Xuất - Tồn chỉ bằng vài thao tác. Rút ngắn thời gian xử lý thủ tục từ 2 ngày xuống vài phút.
     - **Đối với Doanh nghiệp:** Dữ liệu tập trung chuẩn hóa, Audit Log bất biến minh bạch tuyệt đối; Phối hợp Công an - Doanh nghiệp thông suốt, thuận tiện; Giảm thời gian tổng hợp báo cáo định kỳ; Nền tảng quản lý lâu dài, an toàn dữ liệu.
   - **Khẩu hiệu Outro mới:** Chuyển đổi từ an toàn đơn thuần sang:
     > *"TIÊN PHONG CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ — KIẾN TẠO MÔI TRƯỜNG MINH BẠCH, HIỆU QUẢ VÌ SỰ PHÁT TRIỂN BỀN VỮNG"*

3. **Nâng cấp không gian và chiều sâu phần "3. Kiến trúc":**
   - Loại bỏ cảm giác trống trải bằng cấu trúc **4 tầng toàn diện**, bao phủ toàn bộ màn hình 1920x1080:
     - **Tầng 1 (Căn cứ pháp lý chuyển đổi số):** Nghị quyết 57-NQ/TW, Đề án 06/CP, Luật số 42/2024/QH15, Thông tư 77 & 02/2026/TT-BCA; An toàn thông tin Cấp độ 3, Mã hóa AES-256, Audit Log bất biến.
     - **Tầng 2 (Hub Dữ liệu Trung tâm):** Nền tảng CSDL VLNCN Tập trung (Single Source of Truth) kết nối toàn tỉnh Quảng Ninh; phương thức chuyển từ báo cáo bị động sang chủ động theo dõi trên dữ liệu số.
     - **Tầng 3 (3 Cổng nghiệp vụ liên thông):** Cổng Doanh nghiệp, Cổng Trung tâm Chỉ huy PC06 (nổi bật viền đỏ CAND), Cổng Quản trị hệ thống (Admin).
     - **Tầng 4 (Quy trình vận hành 8 bước khép kín - Slide 12):** Lập đơn -> Xác nhận -> Liên thông -> CA Duyệt -> Ghi sổ -> Vận chuyển -> Ca nổ -> Hậu kiểm.

4. **Nhận diện thương hiệu & Tông màu:**
   - Biểu trưng Huy hiệu Công an Nhân dân viền tròn vàng sang trọng.
   - Hệ màu Đỏ thắm CAND (`#B91C1C`) & Xanh Navy (`#102C4D`) chuẩn nhận diện chính thống của lực lượng CAND và chính quyền số.

---

## 2. THÔNG SỐ KỸ THUẬT VIDEO V2.2

| Thông số | Giá trị |
| :--- | :--- |
| **Composition ID** | `VideoPromoV22` |
| **Độ phân giải** | 1920 x 1080 (Full HD, 16:9) |
| **Tốc độ khung hình (FPS)**| 30 fps |
| **Tổng số frame** | 4,410 frames |
| **Thời lượng chính xác** | 147.0 giây (2 phút 27 giây) |
| **Video output** | `out/video_promo_v2_2.mp4` |
| **Bảo lưu file cũ** | Giữ nguyên `out/video_promo_v2.mp4` và `out/video_promo_v2_180s.mp4` |
