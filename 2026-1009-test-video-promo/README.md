# Dự án Video Giới Thiệu Giải Pháp Quản Lý Vật Liệu Nổ Công Nghiệp (VLNCN)
**Công an Tỉnh Quảng Ninh — Phòng Cảnh sát QLHC về TTXH (PC06)**

Dự án sản xuất video quảng bá và giới thiệu giải pháp số hóa quản lý vật liệu nổ công nghiệp trên địa bàn tỉnh Quảng Ninh, được xây dựng theo kiến trúc Web-to-Video tự động hóa bằng HTML5, CSS3, Playwright và FFmpeg.

---

## 📁 Cấu Trúc Dự Án (Repository Organization)

Dự án được phân chia module rõ ràng, tách bạch giữa các phiên bản thiết kế và công cụ hỗ trợ:

```
2026-1009-test-video-promo/
├── docs/                        # Tài liệu nghiệp vụ, kịch bản & phân cảnh
│   ├── QLVLNCN_08102026.pdf     # Slide thuyết trình giải pháp gốc
│   ├── prompt.md                # Kịch bản chi tiết, phân cảnh 5 scene, prompt audio
│   └── prompt-old.md            # Bản thảo kịch bản ban đầu
│
├── assets/                      # Tài nguyên dùng chung
│   ├── audio/                   # Giọng đọc AI (Chirp 3 Algenib), BGM & master audio
│   ├── screenshots/             # Ảnh chụp thực tế các màn hình phần mềm web demo
│   └── stock/                   # Video stock (Flycam, mỏ than, xe cao tốc) & ảnh hiện trường
│
├── v1_motion_graphics/          # PHIÊN BẢN 1: Motion Graphics (Bản gốc)
│   ├── video_stage.html         # Giao diện web stage diễn hoạt đồ họa vector
│   ├── render_video.py          # Script ghi hình Playwright Full HD
│   ├── previews/                # Ảnh keyframe chụp từ v1
│   └── README.md
│
├── v2_cinematic/                # PHIÊN BẢN 2: Cinematic Real Stock Video/Photo (Nâng cấp)
│   ├── video_stage_cinematic.html # Stage điện ảnh với B-roll video, Ken Burns, flare, HUD
│   ├── render_video_cinematic.py  # Script render video không lệch timeline
│   ├── preview_cinematic_stills.py# Script xuất 9 ảnh keyframe kiểm tra chất lượng
│   ├── previews/                # Ảnh keyframe thực tế từ bản điện ảnh
│   └── README.md
│
├── output/                      # Sản phẩm video hoàn chỉnh xuất xưởng
│   ├── video-gioi-thieu-vlncn.mp4           # Video Version 1 (Motion Graphics)
│   └── video-gioi-thieu-vlncn-cinematic.mp4 # Video Version 2 (Cinematic Stock Video)
│
├── tools/                       # Bộ công cụ tự động hóa pipeline
│   ├── audio/                   # Sinh giọng đọc Google TTS / Chirp 3, BGM, mix soundtrack
│   └── capture/                 # Tự động đăng nhập & chụp màn hình web demo
│
├── scripts/                     # Shell scripts kiểm tra thông số video (FFmpeg, FFprobe)
├── render.py                    # Root CLI runner tiện lợi để render các phiên bản
└── README.md
```

---

## 🎬 So Sánh Hai Phiên Bản Video

| Tiêu chí | Phiên bản 1 (`v1_motion_graphics`) | Phiên bản 2 (`v2_cinematic`) |
| :--- | :--- | :--- |
| **Phong cách** | Motion Graphics phẳng kết hợp UI Browser | Phim tài liệu/phóng sự truyền hình GovTech điện ảnh |
| **Hình ảnh nền** | Nền gradient tối, lưới tọa độ đồ họa | Video flycam Vịnh Hạ Long, moong than lộ thiên, xe chở VLNCN |
| **Chất liệu thực tế** | Biểu tượng icon vector | Video máy cắt than hầm lò, kho vật liệu nổ quân sự, trung tâm chỉ huy |
| **Hiệu ứng thị giác** | Scale/Fade in phẳng | Anamorphic Blue Flare, Letterbox 2.39:1, Telemetry HUD, Ken Burns motion |
| **Phụ đề** | Chữ tĩnh theo từng cảnh | Phụ đề Karaoke Typography chạy động theo từng cụm từ lồng tiếng |
| **Độ dài** | ~81 giây | 80.61 giây |
| **Đầu ra tại `output/`** | `video-gioi-thieu-vlncn.mp4` | `video-gioi-thieu-vlncn-cinematic.mp4` |

---

## 🚀 Hướng Dẫn Sử Dụng Nhanh

### 1. Xem trước trên trình duyệt
Bạn có thể mở trực tiếp các file HTML bằng trình duyệt để xem diễn hoạt:
- Phiên bản 1: Mở [v1_motion_graphics/video_stage.html](file:///c:/Users/thai.pq/git/ztemp/2026-1009-test-video-promo/v1_motion_graphics/video_stage.html)
- Phiên bản 2: Mở [v2_cinematic/video_stage_cinematic.html](file:///c:/Users/thai.pq/git/ztemp/2026-1009-test-video-promo/v2_cinematic/video_stage_cinematic.html)

### 2. Render Video qua Root Runner
```bash
# Render Phiên bản 2 (Cinematic - mặc định):
python render.py --version v2

# Render Phiên bản 1 (Motion Graphics):
python render.py --version v1
```

### 3. Chụp nhanh Keyframes kiểm tra
```bash
python v2_cinematic/preview_cinematic_stills.py
```
Các ảnh kết quả sẽ được lưu tự động vào `v2_cinematic/previews/cinematic_stills/`.

---

## 🛠️ Công Nghệ Sử Dụng
- **Front-end Video Stage**: HTML5, Vanilla CSS3, SVG, JavaScript (Hiệu ứng Ken Burns, Glassmorphism, Video B-roll).
- **Automation & Capture**: Python 3.13 + Playwright Chromium (1920x1080 @ 60fps).
- **Audio & Video Processing**: FFmpeg (H.264 High Profile, AAC 192kbps).
- **Voiceover**: Google Cloud Text-to-Speech (Mô hình Chirp 3: HD vi-VN-Chirp3-HD-Algenib).
