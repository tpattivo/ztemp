# Version 1: Motion Graphics Edition (Original)

Phiên bản video giới thiệu đầu tiên, thiết kế theo phong cách Motion Graphics đồ họa vector kết hợp giao diện web phần mềm.

## Cấu trúc thư mục
- `video_stage.html`: Web stage hiển thị timeline, CSS animation, vector graphics và các màn hình web ứng dụng.
- `render_video.py`: Script Playwright tự động ghi hình trình duyệt ở độ phân giải Full HD 1080p và ghép với file âm thanh master (`assets/audio/master_audio.mp3`).
- `previews/`: Bộ ảnh chụp keyframe và quá trình phát triển của phiên bản v1.

## Kết quả xuất xưởng (Deliverable)
- File video: `output/video-gioi-thieu-vlncn.mp4` (1080p, ~81 giây)

## Cách chạy & Render lại
```bash
# Từ thư mục gốc dự án:
python v1_motion_graphics/render_video.py

# Hoặc thông qua root CLI runner:
python render.py --version v1
```
