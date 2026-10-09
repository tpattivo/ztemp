import os
import requests
import json
import base64
import subprocess
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GOOGLE_TTS_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_TTS_API_KEY is not set in .env")

VOICE_NAME = "vi-VN-Chirp3-HD-Algenib"

SCENES = [
    {
        "id": "scene1",
        "title": "Bối cảnh & Thực tiễn",
        "text": "Quảng Ninh là trung tâm công nghiệp khai thác than và khoáng sản trọng điểm của cả nước, với năm mươi tám kho vật liệu nổ công nghiệp đang hoạt động thường xuyên. Trước khối lượng lưu chuyển đặc biệt lớn, công tác quản lý thủ công trước đây gặp nhiều điểm nghẽn về đối soát, hậu kiểm và tiềm ẩn nguy cơ mất an toàn."
    },
    {
        "id": "scene2",
        "title": "Giải pháp & Kiến trúc 3 Cổng",
        "text": "Thực hiện Đề án không sáu của Chính phủ, Phòng Cảnh sát Quản lý hành chính về trật tự xã hội, Công an thành phố Quảng Ninh đã tiên phong triển khai Giải pháp nâng cao hiệu quả công tác quản lý vật liệu nổ công nghiệp. Hệ thống kết nối ba cổng dùng chung trên một cơ sở dữ liệu tập trung: Cổng Công an, Cổng Doanh nghiệp và Cổng Quản trị."
    },
    {
        "id": "scene3",
        "title": "Trình diễn Giao diện & Nghiệp vụ",
        "text": "Trên Cổng Công an P C không sáu, Lãnh đạo và cán bộ giám sát toàn cảnh thành phố qua Dashboard trực quan theo thời gian thực. Điểm đột phá là tính năng Cặp liên thông, tự động ghép nối và đối soát hai chiều giữa bên bán và bên mua, phê duyệt và cấp số điện tử tức thì. Hệ thống đồng thời hậu kiểm hành trình xe qua bản đồ G P S, quét mã Q R truy vết vòng đời phiếu và hỗ trợ cơ chế ngoại tuyến tại cửa lò hầm mỏ cấm sóng viễn thông."
    },
    {
        "id": "scene4",
        "title": "Hiệu quả Toàn diện",
        "text": "Giải pháp rút ngắn thời gian xác nhận tình trạng kho từ hai ngày xuống tức thì, tự động hóa toàn bộ quy trình xuất nhập tồn, giúp Lãnh đạo chỉ đạo kịp thời trên dữ liệu số và hỗ trợ doanh nghiệp chuyển đổi số minh bạch, tiết kiệm."
    },
    {
        "id": "scene5",
        "title": "Lời kết & Cam kết",
        "text": "Chuyển đổi số, đổi mới phương thức quản lý. Công an thành phố Quảng Ninh quyết tâm bảo đảm tuyệt đối an ninh, an toàn, vì nhân dân và doanh nghiệp phục vụ."
    }
]

os.makedirs("assets/audio", exist_ok=True)

url = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={api_key}"

audio_info = []

print(f"Generating voiceover using Chirp 3: {VOICE_NAME}...")

for s in SCENES:
    mp3_file = f"assets/audio/{s['id']}.mp3"
    payload = {
        "input": {"text": s["text"]},
        "voice": {
            "languageCode": "vi-VN",
            "name": VOICE_NAME
        },
        "audioConfig": {
            "audioEncoding": "MP3",
            "speakingRate": 1.05,
            "pitch": 0.0
        }
    }
    
    resp = requests.post(url, json=payload)
    if resp.status_code != 200:
        raise RuntimeError(f"Error generating {s['id']}: {resp.status_code} - {resp.text}")
    
    audio_content = base64.b64decode(resp.json()["audioContent"])
    with open(mp3_file, "wb") as f:
        f.write(audio_content)
    
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
    print(f"Generated {mp3_file} ({VOICE_NAME}): {dur:.2f}s")

total_dur = sum(x["duration"] for x in audio_info)
print(f"\nTotal VO Duration: {total_dur:.2f}s ({total_dur/60:.2f} minutes)")

with open("assets/audio/timeline.json", "w", encoding="utf-8") as f:
    json.dump(audio_info, f, ensure_ascii=False, indent=2)

print("Saved assets/audio/timeline.json successfully.")
