import json
import subprocess
import os
import numpy as np
import wave

# 1. Đọc timeline từ file gốc timeline.json
with open("assets/audio/timeline.json", "r", encoding="utf-8") as f:
    scenes = json.load(f)

# Tính toán mốc thời gian (start_time, end_time) của từng scene
current_t = 1.0  # 1 giây intro nhạc dạo
timeline_data = []

for idx, s in enumerate(scenes):
    dur = s["duration"]
    start = current_t
    end = start + dur + 0.8  # padding 0.8s
    timeline_data.append({
        "scene_id": s["id"],
        "title": s["title"],
        "text": s["text"],
        "audio_file": s["file"],
        "audio_start": start,
        "audio_end": start + dur,
        "scene_start": start - 0.5 if idx > 0 else 0.0,
        "scene_end": end,
        "duration": end - (start - 0.5 if idx > 0 else 0.0)
    })
    current_t = end

total_video_duration = current_t + 1.5  # 1.5s outro
print(f"Total Video Duration: {total_video_duration:.2f} seconds")

with open("assets/audio/full_timeline.json", "w", encoding="utf-8") as f:
    json.dump({"total_duration": total_video_duration, "scenes": timeline_data}, f, ensure_ascii=False, indent=2)

# 2. Xây dựng master voice track chuẩn mẫu
sr = 44100
total_samples = int(total_video_duration * sr)
voice_track = np.zeros(total_samples, dtype=np.float32)

print("\nAssembling voice tracks without amix scaling...")
for s in timeline_data:
    mp3_file = s["audio_file"]
    wav_temp = mp3_file.replace(".mp3", "_pcm.wav")
    
    # Chuyển đổi file MP3 sang WAV PCM chuẩn 44.1kHz mono
    subprocess.run([
        "ffmpeg", "-y", "-i", mp3_file, "-ar", str(sr), "-ac", "1", wav_temp
    ], check=True, capture_output=True)
    
    with wave.open(wav_temp, "rb") as wf:
        nframes = wf.getnframes()
        data = wf.readframes(nframes)
        samples = np.frombuffer(data, dtype=np.int16).astype(np.float32) / 32768.0
    
    start_idx = int(s["audio_start"] * sr)
    end_idx = min(total_samples, start_idx + len(samples))
    voice_track[start_idx:end_idx] = samples[:end_idx - start_idx]
    
    # Dọn file tạm
    if os.path.exists(wav_temp):
        os.remove(wav_temp)
        
    print(f"  {s['scene_id']}: placed at {s['audio_start']:.2f}s - {s['audio_end']:.2f}s (peak: {np.max(np.abs(samples)):.2f})")

# 3. Đọc track BGM
bgm_wav = "assets/audio/bgm_music.wav"
bgm_pcm = "assets/audio/bgm_pcm.wav"
subprocess.run([
    "ffmpeg", "-y", "-i", bgm_wav, "-ar", str(sr), "-ac", "1", bgm_pcm
], check=True, capture_output=True)

with wave.open(bgm_pcm, "rb") as wf:
    nframes = wf.getnframes()
    data = wf.readframes(nframes)
    bgm_samples = np.frombuffer(data, dtype=np.int16).astype(np.float32) / 32768.0

if os.path.exists(bgm_pcm):
    os.remove(bgm_pcm)

# Khớp độ dài BGM
if len(bgm_samples) < total_samples:
    bgm_samples = np.pad(bgm_samples, (0, total_samples - len(bgm_samples)))
else:
    bgm_samples = bgm_samples[:total_samples]

# 4. Professional Audio Ducking
print("\nApplying professional audio ducking...")
env = np.abs(voice_track)
win_size = int(0.20 * sr)  # 200ms smoothing window
env_smooth = np.convolve(env, np.ones(win_size) / win_size, mode="same")
is_speaking = env_smooth > 0.02

# Khi có giọng đọc: gain BGM = 0.14 (-17dB), khi không có: gain BGM = 0.28 (-11dB)
target_gain = np.where(is_speaking, 0.14, 0.28).astype(np.float32)
gain_curve = np.convolve(target_gain, np.ones(win_size) / win_size, mode="same")
bgm_ducked = bgm_samples * gain_curve

# 5. Master Mix (Voice 100% + Ducked BGM)
master_mix = voice_track * 1.0 + bgm_ducked

# Kiểm tra peak và chuẩn hóa chống clipping
peak = np.max(np.abs(master_mix))
if peak > 0.90:
    master_mix = master_mix * (0.90 / peak)

master_wav = "assets/audio/master_audio.wav"
int_master = (np.clip(master_mix, -1.0, 1.0) * 32767).astype(np.int16)
with wave.open(master_wav, "w") as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(sr)
    f.writeframes(int_master.tobytes())

# 6. Chuẩn hóa âm lượng EBU R128 (-16 LUFS) cho toàn bộ file
master_mp3 = "assets/audio/master_audio.mp3"
print("\nApplying EBU R128 loudness normalization (-16 LUFS)...")
subprocess.run([
    "ffmpeg", "-y", "-i", master_wav,
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=9",
    "-c:a", "libmp3lame", "-b:a", "192k",
    master_mp3
], check=True)

print(f"Master audio successfully generated: {master_mp3}")
