# TÀI LIỆU YÊU CẦU DỰ ÁN WEBSITE GSV DTECH
*(Customer Requirements Specification)*

> **Nguồn tài liệu:** Canva Wireframe & Design Specification  
> **Đơn vị phát triển:** GSV DTech  
> **Lĩnh vực:** Phần mềm quản lý chuyên sâu cho Phòng khám Da liễu & Nhà thuốc da liễu  
> **Trạng thái:** Đã trích xuất & lưu trữ yêu cầu  

---

## 1. TỔNG QUAN DỰ ÁN & THƯƠNG HIỆU

### 1.1. Thông tin thương hiệu
- **Tên thương hiệu:** GSV DTech (Công ty Cổ phần Công nghệ GSV DTech)
- **Khẩu hiệu (Slogan):** *"Công nghệ dẫn lối, y tế chuyển mình."*
- **Sản phẩm cốt lõi:**
  1. **GSV DTech:** Phần mềm quản lý phòng khám da liễu toàn diện (tiếp đón, bệnh án điện tử, kê đơn quốc gia, kho dược, CRM, báo cáo).
  2. **GSV FA:** Phần mềm quản lý nhà thuốc chuẩn GPP.
  3. **GSV AI:** Trợ lý trí tuệ nhân tạo hỗ trợ chẩn đoán da liễu và phác đồ điều trị (đang phát triển).
- **Hệ sinh thái GSV:**
  - `gsvvietnam.com`
  - `dalieuthammygsv.com` (GSV Clinic & Beauty)
  - `gsvpharmacy.vn` (Nhà thuốc GSV Pharmacy)
- **Đơn vị đồng hành / Đối tác uy tín:**
  - Bệnh viện Da liễu Trung ương
  - Bệnh viện Da liễu Hà Nội (DLHN)
  - Bệnh viện Da liễu TP. Hồ Chí Minh
  - Bệnh viện Da liễu Nam Định
  - Bệnh viện Phong - Da liễu TW Quỳnh Lập

### 1.2. Mục tiêu website
1. Giới thiệu giải pháp số hóa chuyên biệt cho phòng khám & chuỗi phòng khám da liễu.
2. Thể hiện năng lực thực tế qua giao diện phần mềm thật đang vận hành tại các cơ sở da liễu (Hà Đông, Cầu Giấy...).
3. Chuyển đổi khách hàng mục tiêu (chủ phòng khám, bác sĩ, quản lý) thông qua biểu mẫu đăng ký dùng thử 1 tháng miễn phí và hotline/Zalo tư vấn 1:1.

---

## 2. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)

### 2.1. Bảng màu (Color Palette)
| Tên màu | Mã HEX | Vai trò & Ứng dụng |
| :--- | :--- | :--- |
| **Primary Brand Green** | `#008F4D` | Màu thương hiệu chủ đạo, trạng thái Button Hover, điểm nhấn chính |
| **Deep Forest Green** | `#0F382C` / `#162E25` | Nền hero banner, nền khối CTA mạnh mẽ, footer cao cấp |
| **Accent Red** | `#EB1C24` | Nút Call To Action chính (Default button), badge "Được chọn nhiều nhất" |
| **Title Color** | `#162637` | Màu tiêu đề H1, H2, H3, nhãn quan trọng |
| **Body Color** | `#4B5A66` | Màu nội dung đoạn văn, mô tả phụ, text phụ |
| **Light BG** | `#F2F7F3` | Nền nhẹ nhàng chuẩn y tế dịu mắt cho các section |
| **Card BG / White** | `#FFFFFF` | Nền các thẻ card, bảng so sánh giá, ô nhập liệu |
| **Border / Divider** | `#E2E8F0` | Đường kẻ phân cách, viền card |

### 2.2. Kiểu chữ & Typography
- **Font tiêu đề (Title Font):** `Be Vietnam Pro` (weights: Bold 700, ExtraBold 800)
- **Font nội dung (Body Font):** `Inter` hoặc `Nunito` (weights: Regular 400, Medium 500, SemiBold 600)
- **Hệ thống Font Size & Line Height tiêu chuẩn:**
  - `56px` | Line height: `68px` (Hero H1 Desktop)
  - `46px` | Line height: `56px` (H1 Mobile / Section Header lớn)
  - `38px` | Line height: `46px` (H2 Section Title)
  - `30px` | Line height: `38px` (H3 Card Title)
  - `24px` | Line height: `32px` (Subtitle / Big Body)
  - `20px` | Line height: `28px` (Card Subheading)
  - `16px` | Line height: `24px` (Body standard)
  - `14px` | Line height: `22px` (Small text / Input field)
  - `12px` | Line height: `20px` (Caption / Badge)
  - `10px` | Line height: `14px` (Micro text / Footnote)

### 2.3. Quy chuẩn Nút bấm (Button States)
- Hình dáng: Pill-shaped (bo tròn 50px hoặc `9999px`), có icon mũi tên `→` nằm trong vòng tròn nền trắng hoặc trong suốt.
- **Default:** Nền `#EB1C24`, chữ trắng, icon mũi tên trắng trong hình tròn viền mỏng.
- **Hover:** Nền `#008F4D`, hiệu ứng nâng nhẹ (`translateY(-2px)`, shadow mượt mà).
- **Focused / Active:** Nền `#EB1C24`, viền outline `#008F4D` độ rộng 2-3px.
- **Secondary / Ghost Button:** Viền viền trắng/xanh, nền trong suốt, icon play cho "Xem demo 90 giây".

### 2.4. Hiệu ứng Chuyển động (Animation Effect)
- Phong cách: **"Fade in & slide up"** (lấy cảm hứng từ chuẩn mượt mà tương tự petrolimex.com.vn).
- Các khối nội dung, card, ảnh chụp phần mềm mượt mà trượt lên 20-30px và tăng opacity từ 0 lên 1 khi cuộn vào viewport (Intersection Observer).

---

## 3. CẤU TRÚC SƠ ĐỒ TRANG (SITEMAP & INFORMATION ARCHITECTURE)

- **Trang chủ (Homepage - `index.html`)**
- **Trang Giải pháp (`giai-phap.html`)**
  - 1. Tiếp đón & lịch hẹn
  - 2. Khám & Kê đơn
  - 3. Thu phí & bán hàng
  - 4. Kho thuốc & vật tư
  - 5. Chăm sóc sau điều trị
  - 6. Báo cáo & Doanh thu
  - Nổi bật: Bệnh án điện tử, Hóa đơn điện tử, Đơn thuốc quốc gia
- **Trang Chi phí (`chi-phi.html`)**
  - Gói Lite: 299.000đ/tháng
  - Gói Premium: 399.000đ/tháng (Phổ biến nhất)
  - Gói Diamond: 699.000đ/tháng
  - Gói Signature (Premium + CRM + AI - Sắp ra mắt)
  - Bảng so sánh chi tiết tính năng theo gói
- **Khách hàng (`#khach-hang`)**
  - Số liệu thực tế tại GSV DTech Clinic (Hà Đông & Cầu Giấy)
  - Nhận xét từ Bác sĩ, Lễ tân, Chủ phòng khám
- **Tin tức & Blog (`#tin-tuc`)**
- **Về GSV DTech (`#ve-gsv-dtech`)**
  - Về chúng tôi, Hành trình phát triển, Liên hệ & Hỗ trợ

---

## 4. CHI TIẾT CÁC PHÂN ĐOẠN TRANG (PAGE BREAKDOWNS)

### 4.1. Trang Chủ (Homepage)

#### A. Header / Navigation Bar
- Logo GSV DTech chính hãng (đỏ + xanh biểu tượng y tế công nghệ).
- Menu: Giải pháp, Chi phí, Khách hàng, Tin tức & Blog, Về GSV DTech.
- Hotline: `024 3789 4110` (clickable `tel:02437894110`).
- Nút CTA: `Dùng thử miễn phí` (màu đỏ `#EB1C24`).

#### B. Hero Section
- Background: Nền xanh đậm y tế cao cấp (`#0F382C`).
- Tag Badge: *"Mới: Kê đơn liên thông Đơn thuốc quốc gia ở mọi gói"*
- Tiêu đề H1: *"Quản lý phòng khám da liễu gọn trong một nền tảng"*
- Mô tả: *"GSV DTech giúp phòng khám và nhà thuốc da liễu quản lý hồ sơ bệnh án, lịch hẹn, kê đơn, thu chi và kho thuốc trên một phần mềm dễ dùng, cho cả chủ phòng khám, bác sĩ và lễ tân."*
- Nút bấm:
  - `Dùng thử miễn phí →` (nhảy xuống form đăng ký dùng thử)
  - `▶ Xem demo 90 giây` (mở modal video/interactive demo)
- Cam kết:
  - ✓ Miễn phí 1 tháng trải nghiệm
  - ✓ Hỗ trợ setup dữ liệu ban đầu
  - ✓ Hỗ trợ 1:1, 24/7
- Mockup Dashboard thật: Giao diện màn hình tổng quan của GSV DTech Clinic kèm các thẻ popup trạng thái (Đã liên thông Đơn thuốc quốc gia, Nhắc lịch tái khám qua Zalo OA).

#### C. Khối Đối Tác Y Tế (Medical Partner Logos)
- *"Đồng hành cùng ngành da liễu - các bệnh viện da liễu đối tác của GSV"*
- Logo 5 bệnh viện: BV Da liễu Trung ương, BV Da liễu Hà Nội, BV Da liễu TP.HCM, BV Da liễu Nam Định, BV Phong - Da liễu TW Quỳnh Lập.

#### D. Nỗi đau thực tế & Vấn đề phòng khám (Pain Points & Statistics)
- Tiêu đề: *"Phòng khám vẫn đang chạy bằng sổ tay và tin nhắn"*
- Mô tả: *"Hồ sơ giấy, lịch hẹn ghi tay và đơn thuốc viết tay làm bác sĩ mất thời gian, lễ tân dễ sót khách, còn chủ phòng khám không biết chính xác hôm nay thu bao nhiêu."*
- 3 Chỉ số:
  - **80%** cơ sở y tế vẫn quản lý hồ sơ bệnh án bằng giấy.
  - **50%** phòng khám vẫn đặt lịch thủ công.
  - **1/3** sai sót kê đơn liên quan đến ghi tay và thiếu đồng bộ.

#### E. Trình diễn Quy trình vận hành toàn diện (Interactive Workflow)
- Tiêu đề: *"Mọi việc của phòng khám, trong một phần mềm"*
- 6 bước liên hoàn:
  1. Tiếp đón & lịch hẹn
  2. Khám & kê đơn
  3. Thu phí & bán hàng
  4. Kho thuốc & vật tư
  5. Chăm sóc sau điều trị
  6. Báo cáo & Doanh thu
- Tương tác: Bấm vào từng bước để xem mô tả chi tiết, hình minh họa giao diện thực tế và các đầu việc tự động hóa.

#### F. 6 Tính năng Nổi bật (Feature Highlights Grid)
1. **Đơn thuốc quốc gia:** Kê và liên thông đơn thuốc lên cổng Đơn thuốc quốc gia ở mọi gói.
2. **Hóa đơn điện tử:** Kết nối trực tiếp MISA, Tendoo, iHoaDon; không thu phí tích hợp.
3. **Hoa hồng tự động:** Tính hoa hồng minh bạch theo dịch vụ cho bác sĩ, kỹ thuật viên, tư vấn viên.
4. **Phân quyền bảo mật:** Phân quyền chi tiết theo vị trí công việc, bảo vệ dữ liệu khách hàng.
5. **CRM chăm sóc khách hàng:** Tự động gửi tin nhắn nhắc lịch hẹn qua Zalo OA, SMS Brandname.
6. **Trợ lý AI Da liễu:** Gợi ý đơn thuốc, phác đồ chuẩn y khoa và hỗ trợ hình ảnh da liễu.

#### G. Giao diện thật, đang chạy mỗi ngày (Real System Screenshots)
- Tiêu đề: *"Giao diện thật, đang chạy mỗi ngày"*
- Mô tả: *"Ảnh chụp từ hệ thống của GSV DTech Clinic tại Hà Đông và Cầu Giấy. Bấm vào ảnh để xem kích thước đầy đủ."*
- Tabs tương tác: [Tổng quan trong ngày] [Chăm sóc sau điều trị] [Doanh thu] [Thống kê khách hàng].

#### H. Lý do lựa chọn GSV DTech (Why Choose GSV DTech)
- 6 lợi thế vượt trội: Giá từ 299k/tháng | Không giới hạn người dùng | Trải nghiệm 1 tháng miễn phí | Setup dữ liệu ban đầu | Hỗ trợ 1:1, 24/7 | Kết nối sẵn hệ thống quốc gia.

#### I. Đánh giá & Chỉ số thực tế (Social Proof)
- Chỉ số: 17.456 hồ sơ khách hàng | 75 lịch hẹn/ngày/chi nhánh | 343 phiếu thu/tuần.
- Lời nhận xét từ: Chủ phòng khám da liễu, Lễ tân phòng khám, Bác sĩ da liễu.

#### J. Bảng giá & Form Đăng Ký Dùng Thử (Pricing & Lead Gen)
- Bảng giá 3 gói với switch [Theo tháng] / [Theo năm (tặng 2 tháng)].
- Form đăng ký: Họ tên, Số điện thoại, Tên phòng khám / Nhà thuốc, Loại hình, Nút `Đăng ký dùng thử →`.

#### K. Footer & Hệ sinh thái
- Đầy đủ thông tin pháp lý, bản quyền, địa chỉ tại Hà Đông, Hotline, Email, Zalo, Fanpage.
- Hệ sinh thái: gsvvietnam.com, dalieuthammygsv.com, gsvpharmacy.vn.

---

### 4.2. Trang Chi Phí (`chi-phi.html`)
- Hero Banner chuyên biệt cho chi phí.
- 3 Thẻ giá chi tiết (Lite, Premium, Diamond) + Gói Signature AI sắp ra mắt.
- Bảng so sánh tính năng toàn diện theo từng module.
- Khối đăng ký dùng thử 1 tháng miễn phí.

---

### 4.3. Trang Giải Pháp (`giai-phap.html`)
- Trình bày sâu 6 trụ cột giải pháp: Tiếp đón, Khám bệnh, Thu phí, Kho dược, Chăm sóc CRM, Báo cáo quản trị.
- Mỗi module có ảnh chụp màn hình thao tác thực tế và danh sách tính năng cụ thể.
- Bộ lọc nhanh giữa các giải pháp.

---

### 4.4. Yêu Cầu Giao Diện Mobile
- Responsive mượt mà trên tất cả thiết bị (iOS, Android, Tablet, Laptop, Desktop).
- Menu trượt (Mobile Drawer) trực quan.
- **Thanh Bottom Action Bar dính đáy màn hình trên di động:**
  - Nút Gọi (`tel:02437894110`)
  - Nút Zalo (Chat trực tiếp)
  - Nút Dùng thử (Scroll nhanh đến form)
