# Version 2: Cinematic Documentary & Real Stock Video/Photo Edition

Phiên bản điện ảnh nâng cấp, chuyển từ đồ họa phẳng sang phong cách phim tài liệu/phóng sự GovTech truyền hình cao cấp với stock footage và hình ảnh hiện trường thực tế.

## Điểm cải tiến nổi bật
1. **Real Stock Footage & Video B-roll**:
   - Drone 4K Vịnh Hạ Long mở màn hùng vĩ (`assets/stock/halong_drone.mp4`).
   - Video máy cắt than hầm lò mỏ than Quảng Ninh (`assets/stock/coal_cutting.mp4`).
   - Video đoàn xe chuyên dụng vận chuyển trên cao tốc (`assets/stock/traffic_highway.mp4`).
   - Video nổ mìn khai thác đá (`assets/stock/stone_quarry.mp4`).
2. **Real Stock Photography & Hiệu ứng Ken Burns**:
   - Moong khai thác than lộ thiên Quảng Ninh (`assets/stock/quang_ninh_mine_*.jpg`).
   - Kho tiền chất & vật liệu nổ quân sự kiên cố có biển báo tiếng Việt (`assets/stock/explosives_depot_*.jpg`).
   - Trung tâm chỉ huy tác chiến hiện đại của Công an (`assets/stock/police_command_center_*.jpg`).
3. **Hiệu ứng Điện ảnh & Truyền hình**:
   - Khung viền Letterbox 2.39:1 chuẩn Cinematic, Anamorphic Blue Flare, Telemetry HUD.
   - Thẻ Glassmorphism mờ đục cao cấp hiển thị tính năng nghiệp vụ.
   - Phụ đề Karaoke Typography chạy động theo từng câu thuyết minh.

## Cấu trúc thư mục
- `video_stage_cinematic.html`: Stage HTML tích hợp toàn bộ video layer, ảnh Ken Burns, timeline monotonic không lệch nhịp và giao diện web.
- `render_video_cinematic.py`: Script Playwright render video không drop frame ở 1920x1080 + muxing FFmpeg AAC 192kbps.
- `preview_cinematic_stills.py`: Script tự động chụp 9 keyframe quan trọng để kiểm tra chất lượng.
- `previews/`: Chứa các bộ ảnh chụp keyframes của Scene 1 đến Scene 5.

## Kết quả xuất xưởng (Deliverable)
- File video: `output/video-gioi-thieu-vlncn-cinematic.mp4` (1080p, 80.61 giây, 35 MB)

## Cách chạy & Render lại
```bash
# Render video cinematic hoàn chỉnh:
python v2_cinematic/render_video_cinematic.py

# Hoặc thông qua root CLI runner:
python render.py --version v2

# Chụp lại các keyframe preview:
python v2_cinematic/preview_cinematic_stills.py
```
