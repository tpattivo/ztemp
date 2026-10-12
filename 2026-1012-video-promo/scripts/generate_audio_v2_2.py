import os
import json
import urllib.request
import base64
import shutil
import subprocess

os.makedirs('assets/audio_v2_2', exist_ok=True)
os.makedirs('public/audio_v2_2', exist_ok=True)

# Copy Scene 1 to 5 from audio_v2
for i in range(1, 6):
    names = [
        "scene_1_context_v2",
        "scene_2_painpoints_v2",
        "scene_3_legal_architecture_v2",
        "scene_4_enterprise_portal_v2",
        "scene_5_police_features_v2"
    ]
    fn = names[i-1]
    src = f"public/audio_v2/{fn}.mp3"
    dst_assets = f"assets/audio_v2_2/scene_{i}_v2_2.mp3"
    dst_pub = f"public/audio_v2_2/scene_{i}_v2_2.mp3"
    if os.path.exists(src):
        shutil.copy(src, dst_assets)
        shutil.copy(src, dst_pub)
        print(f"Copied Scene {i} to {dst_pub}")

with open('credentials.json', 'r', encoding='utf-8') as f:
    creds = json.load(f)

API_KEY = creds['google_tts_api_key']
VOICE_NAME = creds.get('tts_voice', 'vi-VN-Chirp3-HD-Algenib')

# Scene 6 with new slogan: Chuyển đổi số công tác quản trị
SCENE_6_TEXT = "Hệ thống tạo bước đột phá trong chuyển đổi số công tác quản trị: Giúp Lãnh đạo chỉ đạo điều hành trên dữ liệu số thời gian thực, tối ưu hóa quy trình nghiệp vụ, minh bạch hóa thủ tục cho doanh nghiệp. Công an tỉnh Quảng Ninh: Tiên phong chuyển đổi số công tác quản trị, kiến tạo môi trường minh bạch, hiện đại và phát triển bền vững."

def synthesize_scene_6():
    url = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={API_KEY}"
    print("Synthesizing Scene 6 new outro...")
    data = {
        "input": {"text": SCENE_6_TEXT},
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
        out_file = "assets/audio_v2_2/scene_6_v2_2.mp3"
        pub_file = "public/audio_v2_2/scene_6_v2_2.mp3"
        with open(out_file, "wb") as f_out:
            f_out.write(audio_bytes)
        with open(pub_file, "wb") as f_out:
            f_out.write(audio_bytes)
        print(f"  -> Saved {pub_file} ({len(audio_bytes)} bytes)")

    # Check duration using ffprobe
    dur = subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', pub_file]).decode().strip()
    print(f"Scene 6 Audio Duration: {dur}s ({float(dur)*30:.1f} frames)")

if __name__ == '__main__':
    synthesize_scene_6()
