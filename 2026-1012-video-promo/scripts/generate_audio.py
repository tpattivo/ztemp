import os
import json
import urllib.request
import base64
import subprocess

os.makedirs('assets/audio', exist_ok=True)

# Load API key
with open('credentials.json', 'r', encoding='utf-8') as f:
    creds = json.load(f)

API_KEY = creds['google_tts_api_key']
VOICE_NAME = creds.get('tts_voice', 'vi-VN-Chirp3-HD-Algenib')

# Script for 5 scenes
SCENES = [
    {
        "id": "scene_1_context",
        "duration_target": 20,
        "text": "Quảng Ninh, trung tâm công nghiệp khai khoáng lớn nhất cả nước, với 58 kho chứa vật liệu nổ công nghiệp đang hoạt động ngày đêm. Khối lượng lưu chuyển khổng lồ đặt ra yêu cầu cấp thiết: Chuyển dịch phương thức quản lý từ hồ sơ giấy, thủ công phân tán sang giám sát tập trung, chính xác trên nền tảng dữ liệu số."
    },
    {
        "id": "scene_2_architecture",
        "duration_target": 25,
        "text": "Thực hiện Nghị quyết số 57 của Bộ Chính trị và Đề án 06 của Chính phủ, Công an tỉnh Quảng Ninh tiên phong triển khai Hệ thống Quản lý Vật liệu nổ công nghiệp tập trung. Ba cổng nghiệp vụ chạy trên cùng một nền tảng dữ liệu duy nhất, kết nối thông suốt giữa Công an, Doanh nghiệp và Quản trị viên toàn tỉnh."
    },
    {
        "id": "scene_3_features",
        "duration_target": 40,
        "text": "Điểm nghẽn được giải quyết triệt để bằng những tính năng đột phá: Cặp liên thông tự động đối chiếu hai chiều giữa bên bán và bên mua; Quy trình phê duyệt và cấp số điện tử thay thế hoàn toàn văn thư giấy tờ; Vòng đời vật liệu nổ được định danh bất biến qua mã QR; Hành trình vận chuyển được hậu kiểm minh bạch qua GPS; Và cơ chế phiếu QR thông minh bảo đảm nghiệp vụ thông suốt ngay cả tại vùng cửa lò, hầm sâu không có sóng viễn thông."
    },
    {
        "id": "scene_4_benefits",
        "duration_target": 20,
        "text": "Hệ thống mang lại giá trị thiết thực: Giúp Lãnh đạo nắm trọn bức tranh an ninh vật liệu nổ toàn tỉnh; Giúp cán bộ thực thi rút ngắn thời gian xử lý từ 2 ngày xuống chỉ còn vài phút; Đồng thời tạo điều kiện thuận lợi tối đa cho doanh nghiệp sản xuất, kinh doanh an toàn, minh bạch và phát triển bền vững."
    },
    {
        "id": "scene_5_outro",
        "duration_target": 15,
        "text": "Công an tỉnh Quảng Ninh: Đồng hành cùng doanh nghiệp, tiên phong chuyển đổi số, giữ vững an ninh, trật tự và an toàn xã hội trên địa bàn vùng mỏ anh hùng."
    }
]

def synthesize_scene(scene):
    url = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={API_KEY}"
    data = {
        "input": {"text": scene["text"]},
        "voice": {
            "languageCode": "vi-VN",
            "name": VOICE_NAME
        },
        "audioConfig": {
            "audioEncoding": "MP3",
            "speakingRate": 1.0,
            "pitch": 0.0
        }
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode("utf-8"))
        audio_bytes = base64.b64decode(res["audioContent"])
        out_path = f"assets/audio/{scene['id']}.mp3"
        with open(out_path, "wb") as f_out:
            f_out.write(audio_bytes)
        print(f"Generated {out_path} ({len(audio_bytes)} bytes)")
        return out_path

def main():
    print("Synthesizing audio scenes...")
    for sc in SCENES:
        synthesize_scene(sc)
    print("All audio files synthesized!")

if __name__ == "__main__":
    main()
