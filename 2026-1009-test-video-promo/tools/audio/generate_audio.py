import subprocess
import os

os.makedirs("assets/audio", exist_ok=True)

VOICE = "vi-VN-NamMinhNeural"

SCENES = [
    {
        "id": "scene1",
        "text": "Quảng Ninh là trung tâm công nghiệp khai thác than và khoáng sản trọng điểm của cả nước, với 58 kho vật liệu nổ công nghiệp đang hoạt động thường xuyên. Trước khối lượng lưu chuyển đặc biệt lớn, công tác quản lý thủ công bằng hồ sơ giấy trước đây gặp nhiều điểm nghẽn về đối soát, hậu kiểm và nguy cơ thất thoát."
    },
    {
        "id": "scene2",
        "text": "Thực hiện Đề án 06 của Chính phủ và chỉ đạo của Bộ Công an, Phòng Cảnh sát Quản lý hành chính về trật tự xã hội - Công an thành phố Quảng Ninh đã tiên phong triển khai Giải pháp nâng cao hiệu quả công tác quản lý vật liệu nổ công nghiệp, kết nối đồng bộ trên một cơ sở dữ liệu tập trung."
    },
    {
        "id": "scene3",
        "text": "Hệ thống vận hành liên thông qua ba cổng: Cổng Công an, Cổng Doanh nghiệp và Cổng Quản trị. Điểm đột phá là tính năng Cặp liên thông, tự động ghép nối và đối soát hai chiều giữa bên bán và bên mua, thay thế hoàn toàn thủ tục giấy tờ bằng cấp số điện tử tức thì. Mọi chuyến hàng được kiểm soát chặt chẽ qua hành trình GPS, quét mã QR truy vết đầy đủ vòng đời, và hỗ trợ cơ chế offline an toàn ngay tại cửa lò hầm mỏ."
    },
    {
        "id": "scene4",
        "text": "Giải pháp rút ngắn thời gian xác nhận kho từ hai ngày xuống chỉ còn vài phút, tự động hóa toàn bộ công tác đối soát, giúp Lãnh đạo nắm chắc bức tranh tồn kho theo thời gian thực và hỗ trợ doanh nghiệp chuyển đổi số minh bạch, tiết kiệm."
    },
    {
        "id": "scene5",
        "text": "Chuyển đổi số - Đổi mới phương thức quản lý. Công an thành phố Quảng Ninh quyết tâm giữ vững an ninh, an toàn, đồng hành cùng doanh nghiệp phát triển bền vững."
    }
]

for s in SCENES:
    txt_path = f"assets/audio/{s['id']}.txt"
    mp3_path = f"assets/audio/{s['id']}.mp3"
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(s["text"])
    cmd = ["edge-tts", "--file", txt_path, "--voice", VOICE, "--write-media", mp3_path]
    print(f"Generating voice for {s['id']}...")
    subprocess.run(cmd, check=True)
    print(f"Done {mp3_path}")

print("All voiceover audio generated!")
