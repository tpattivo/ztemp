import os
import json
import urllib.request
import base64
import subprocess

os.makedirs('assets/audio_v2', exist_ok=True)
os.makedirs('public/audio_v2', exist_ok=True)

with open('credentials.json', 'r', encoding='utf-8') as f:
    creds = json.load(f)

API_KEY = creds['google_tts_api_key']
VOICE_NAME = creds.get('tts_voice', 'vi-VN-Chirp3-HD-Algenib')

SCENES_V2 = [
    {
        "id": "scene_1_context_v2",
        "text": "Quảng Ninh là trung tâm công nghiệp khai khoáng lớn nhất cả nước, với đặc thù khai thác than hầm lò, lộ thiên và thi công xây dựng quy mô lớn. Trên toàn địa bàn hiện có 58 kho chứa vật liệu nổ công nghiệp đang hoạt động ngày đêm, cùng hàng chục doanh nghiệp cung ứng, vận chuyển và sử dụng. Khối lượng thuốc nổ, kíp nổ lưu chuyển liên tục đặt ra yêu cầu tuyệt đối về an ninh, an toàn trật tự xã hội."
    },
    {
        "id": "scene_2_painpoints_v2",
        "text": "Qua khảo sát thực tế tại Phòng PC06 và các đơn vị trọng điểm như Hóa chất mỏ, Than Núi Béo, Than Uông Bí, công tác quản lý thủ công trước đây bộc lộ nhiều điểm nghẽn: Đối soát mua bán chậm trễ; Kiểm tra xác nhận kho mất từ nửa ngày đến hai ngày; Dữ liệu GPS lưu riêng lẻ khó hậu kiểm; Cơ quan quản lý khó nắm tồn kho tức thời; Và đặc biệt là sự gián đoạn nghiệp vụ tại vùng cửa lò, hầm sâu không có sóng viễn thông."
    },
    {
        "id": "scene_3_legal_architecture_v2",
        "text": "Bám sát Nghị quyết 57 của Bộ Chính trị, Đề án 06 của Chính phủ và các Thông tư chỉ đạo của Bộ Công an, Công an tỉnh Quảng Ninh tiên phong xây dựng Giải pháp Quản lý Vật liệu nổ công nghiệp tập trung. Hệ thống liên thông 3 cổng nghiệp vụ gồm: Cổng Công an PC06, Cổng Doanh nghiệp và Cổng Quản trị, cùng vận hành trên một cơ sở dữ liệu duy nhất với nhật ký truy vết bất biến."
    },
    {
        "id": "scene_4_enterprise_portal_v2",
        "text": "Tại Cổng Doanh nghiệp, mọi thao tác được số hóa toàn trình: Đơn vị lập đăng ký tiếp nhận, đề nghị xuất kho gửi trực tuyến; Phiếu xuất nhập tự động cập nhật sổ tồn theo tỷ lệ sức chứa thiết kế; Hồ sơ phương tiện, nhân sự có chứng chỉ được quản lý chặt chẽ; Đặc biệt, cơ chế in phiếu kèm mã QR thông minh cho phép ghi nhận an toàn tại cửa lò mất sóng và tự động đồng bộ ngay khi kết nối lại mạng."
    },
    {
        "id": "scene_5_police_features_v2",
        "text": "Cổng Công an PC06 giữ vai trò trung tâm giám sát thông minh: Dashboard cung cấp bức tranh tồn kho toàn tỉnh thời gian thực, tự động cảnh báo sớm kho vượt hạn mức hoặc giấy phép sắp hết hạn; Tính năng Cặp liên thông tự động đối chiếu hai chiều bên bán và bên mua; Quy trình phê duyệt và cấp số điện tử tức thì thay thế ký giấy; Mã QR định danh trọn vòng đời; Và bản đồ số hậu kiểm lộ trình vận chuyển GPS minh bạch."
    },
    {
        "id": "scene_6_benefits_outro_v2",
        "text": "Hệ thống tạo bước chuyển biến căn bản: Giúp Lãnh đạo chỉ đạo trên dữ liệu số, giúp cán bộ rút ngắn thời gian xử lý từ hai ngày xuống chỉ còn vài phút, đồng hành cùng doanh nghiệp phát triển bền vững. Công an tỉnh Quảng Ninh: Tiên phong chuyển đổi số, vì bình yên và an toàn vùng mỏ."
    }
]

def synthesize_v2():
    url = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={API_KEY}"
    for sc in SCENES_V2:
        print(f"Synthesizing {sc['id']}...")
        data = {
            "input": {"text": sc["text"]},
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
            out_file = f"assets/audio_v2/{sc['id']}.mp3"
            pub_file = f"public/audio_v2/{sc['id']}.mp3"
            with open(out_file, "wb") as f_out:
                f_out.write(audio_bytes)
            with open(pub_file, "wb") as f_out:
                f_out.write(audio_bytes)
            print(f"  -> Saved {out_file} ({len(audio_bytes)} bytes)")

if __name__ == "__main__":
    synthesize_v2()
