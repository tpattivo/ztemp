import os
import subprocess
from gtts import gTTS

os.makedirs("assets/audio", exist_ok=True)

SCENES = [
    {
        "id": "scene1",
        "title": "Bối cảnh & Thách thức",
        "text": "Quảng Ninh là địa bàn trọng điểm cả nước về công nghiệp khai thác than và khoáng sản, với năm mươi tám kho vật liệu nổ công nghiệp đang hoạt động thường xuyên. Phương thức quản lý thủ công trước đây gặp nhiều điểm nghẽn về đối soát, kiểm tra kho và tiềm ẩn nguy cơ mất an toàn."
    },
    {
        "id": "scene2",
        "title": "Giải pháp & Kiến trúc 3 Cổng",
        "text": "Thực hiện Đề án không sáu của Chính phủ, Công an thành phố Quảng Ninh, Phòng P C không sáu, đã tiên phong triển khai Giải pháp nâng cao hiệu quả quản lý vật liệu nổ công nghiệp. Hệ thống kết nối ba cổng dùng chung trên một cơ sở dữ liệu tập trung: Cổng Công an, Cổng Doanh nghiệp và Cổng Quản trị."
    },
    {
        "id": "scene3",
        "title": "Trình diễn Giao diện & Cặp liên thông",
        "text": "Trên Cổng Công an P C không sáu, lãnh đạo và cán bộ giám sát toàn cảnh thành phố qua Dashboard trực quan. Điểm đột phá là tính năng Cặp liên thông, tự động ghép nối và đối soát hai chiều giữa bên bán và bên mua, phê duyệt và cấp số điện tử tức thì. Hệ thống đồng thời hậu kiểm hành trình xe qua bản đồ G P S, quét mã Q R truy vết vòng đời phiếu và hỗ trợ cơ chế ngoại tuyến tại cửa lò hầm mỏ."
    },
    {
        "id": "scene4",
        "title": "Hiệu quả Toàn diện",
        "text": "Giải pháp rút ngắn thời gian xác nhận tình trạng kho từ hai ngày xuống tức thì, minh bạch hóa toàn bộ quy trình xuất nhập tồn, giúp Lãnh đạo chỉ đạo kịp thời trên dữ liệu số và đồng hành cùng doanh nghiệp chuyển đổi số hiệu quả."
    },
    {
        "id": "scene5",
        "title": "Lời kết & Cam kết",
        "text": "Chuyển đổi số, đổi mới phương thức quản lý. Công an thành phố Quảng Ninh quyết tâm bảo đảm tuyệt đối an ninh an toàn, vì nhân dân và doanh nghiệp phục vụ."
    }
]

print("Generating voiceover audio...")
audio_info = []

for s in SCENES:
    mp3_file = f"assets/audio/{s['id']}.mp3"
    tts = gTTS(text=s["text"], lang="vi", slow=False)
    tts.save(mp3_file)
    
    # Đo độ dài file qua ffprobe
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", mp3_file
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    dur = float(res.stdout.strip())
    audio_info.append({
        "id": s["id"],
        "title": s["title"],
        "text": s["text"],
        "file": mp3_file,
        "duration": dur
    })
    print(f"Generated {mp3_file}: {dur:.2f} seconds")

total_dur = sum(x["duration"] for x in audio_info)
print(f"\nTotal VO duration: {total_dur:.2f} seconds ({total_dur/60:.2f} minutes)")

import json
with open("assets/audio/timeline.json", "w", encoding="utf-8") as f:
    json.dump(audio_info, f, ensure_ascii=False, indent=2)
print("Saved assets/audio/timeline.json")
