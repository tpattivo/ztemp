# BÁO CÁO NGHIỆM THU VIDEO PROMO 120S
## GIẢI PHÁP QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP — CÔNG AN TỈNH QUẢNG NINH (PC06)

---

### 1. VIDEO HOÀN CHỈNH (DELIVERABLE)

- **Đường dẫn file video:** [out/video_promo_120s.mp4](file:///c:/Users/thai.pq/git/ztemp/2026-1012-video-promo/out/video_promo_120s.mp4)
- **Kích thước file:** `34.8 MB`
- **Thời lượng:** `120.00 giây` (chuẩn 3600 frames @ 30fps)
- **Độ phân giải:** `1920x1080 Full HD (16:9)`
- **Video Codec:** `H.264 / AVC (High Profile)`
- **Audio Codec:** `AAC Stereo 48.000 Hz, 317 kb/s`

---

### 2. CÁC PHÂN CẢNH CHÍNH TRONG VIDEO

1. **Phân cảnh 1 (0:00 - 0:20 | 20s):** Bối cảnh trọng điểm Quảng Ninh, 58 kho chứa VLNCN đang hoạt động, áp lực an ninh và các điểm nghẽn của phương thức quản lý giấy thủ công.
2. **Phân cảnh 2 (0:20 - 0:45 | 25s):** Cơ sở pháp lý (Nghị quyết 57-NQ/TW, Đề án 06) và Sơ đồ kiến trúc 3 Cổng liên thông (Cổng Công an PC06, Cổng Doanh nghiệp, Cổng Quản trị) dùng chung 1 CSDL duy nhất.
3. **Phân cảnh 3 (0:45 - 1:25 | 40s):** Trực quan 4 tính năng đột phá trên giao diện phần mềm thực tế (`http://dev-qn-mm.evotek.vn`):
   - *Dashboard PC06:* Giám sát kho thời gian thực & cảnh báo kho đầy ≥80%.
   - *Cặp liên thông:* Tự động ghép đơn bên bán & bên mua, đối soát 2 cột.
   - *Cấp số điện tử & Mã QR vòng đời:* Duyệt 1-click thay văn thư, quét QR truy vết lịch sử trách nhiệm.
   - *Hậu kiểm GPS & Chế độ ngoại tuyến:* Giám sát xe chở thuốc nổ và hỗ trợ in phiếu QR tại cửa lò mất sóng.
4. **Phân cảnh 4 (1:25 - 1:45 | 20s):** Ba trụ cột giá trị thiết thực đối với Lãnh đạo chỉ đạo, Cán bộ PC06 (rút ngắn từ 2 ngày còn vài phút), và Doanh nghiệp sản xuất an toàn.
5. **Phân cảnh 5 (1:45 - 2:00 | 15s):** Thông điệp kết, biểu trưng CAND và lời khẳng định đồng hành của PC06 Công an tỉnh Quảng Ninh.

---

### 3. ĐÁNH GIÁ ĐỘ KHỚP YÊU CẦU ĐẦU BÀI

| Tiêu chí | Yêu cầu ban đầu | Kết quả thực hiện |
| :--- | :--- | :--- |
| **Vai trò người giới thiệu** | Cán bộ Công an nhân dân | Lời bình chuẩn phong cách CAND, logo PC06, kỷ cương, trang nghiêm. |
| **Đối tượng khán giả** | Lãnh đạo Công an, Quân đội, Doanh nghiệp khai khoáng | Nhấn mạnh giá trị chỉ đạo điều hành, tính pháp lý, an toàn tuyệt đối và tinh gọn thủ tục. |
| **Thời lượng** | 120 giây | **Chính xác 120.00 giây** (3600 frames @ 30fps). |
| **Giọng thuyết minh** | `vi-VN-Chirp3-HD-Algenib` | Tạo bằng Google Cloud TTS Chirp 3: HD, âm sắc trầm ấm, rõ từng chữ. |
| **Màu sắc & Thị giác** | Light theme + Green accent | Phông nền sáng sang trọng (`#F8FAFC`), điểm nhấn màu xanh lá cây ngành (`#059669` / `#10B981`). |
| **Hình ảnh & Giao diện** | Quảng Ninh, ngành mỏ, giao diện thực tế | Ảnh bay Vịnh Hạ Long, khai trường than lộ thiên, kho bãi và **100% ảnh chụp màn hình thực tế từ web demo** (`http://dev-qn-mm.evotek.vn`). |
| **Căn cứ pháp lý** | Bám sát tài liệu PDF | Tích hợp Nghị quyết 57-NQ/TW, Đề án 06, Luật 42/2024, Thông tư 77 & 02/2026/TT-BCA. |

---

### 4. CÁCH XEM TRỰC TIẾP HOẶC KẾT XUẤT LẠI

1. **Xem trực tiếp (Interactive Preview Studio):**
   ```bash
   npm start
   # Mở trình duyệt tại http://localhost:3000 để kéo timeline, xem từng frame
   ```
2. **Kết xuất video MP4:**
   ```bash
   npm run build
   # Xuất video ra out/video_promo_120s.mp4
   ```
