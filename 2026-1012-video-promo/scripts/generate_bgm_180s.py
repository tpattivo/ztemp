import numpy as np
import subprocess
import os

sample_rate = 44100
duration = 180.0  # 180 seconds
total_samples = int(sample_rate * duration)
t = np.linspace(0, duration, total_samples, endpoint=False, dtype=np.float32)

chords = [
    ([146.83, 185.00, 220.00, 293.66, 440.00], 146.83 / 2),
    ([123.47, 146.83, 185.00, 246.94, 369.99], 123.47 / 2),
    ([98.00, 123.47, 146.83, 196.00, 293.66], 98.00 / 2),
    ([110.00, 138.59, 164.81, 220.00, 329.63], 110.00 / 2)
]

chord_duration = 5.0
cycle_duration = 20.0

cycle_samples = int(sample_rate * cycle_duration)
t_cycle = np.linspace(0, cycle_duration, cycle_samples, endpoint=False, dtype=np.float32)

cycle_l = np.zeros(cycle_samples, dtype=np.float32)
cycle_r = np.zeros(cycle_samples, dtype=np.float32)

for c_idx, (notes, bass_freq) in enumerate(chords):
    start_s = int(c_idx * chord_duration * sample_rate)
    end_s = int((c_idx + 1) * chord_duration * sample_rate)
    t_seg = t_cycle[start_s:end_s]
    
    bass = 0.28 * np.sin(2 * np.pi * bass_freq * t_seg) + \
           0.10 * np.sin(2 * np.pi * bass_freq * 2 * t_seg)
    
    pad_l = np.zeros_like(t_seg)
    pad_r = np.zeros_like(t_seg)
    
    for n_idx, freq in enumerate(notes):
        osc1 = np.sin(2 * np.pi * (freq * 1.002) * t_seg)
        osc2 = np.sin(2 * np.pi * (freq * 0.998) * t_seg)
        sub = np.sin(2 * np.pi * (freq * 0.5) * t_seg) * 0.2
        lfo = 0.8 + 0.2 * np.sin(2 * np.pi * 0.25 * t_seg + n_idx)
        
        if n_idx % 2 == 0:
            pad_l += (osc1 * 0.6 + sub) * lfo * 0.08
            pad_r += (osc2 * 0.4) * lfo * 0.08
        else:
            pad_l += (osc2 * 0.4) * lfo * 0.08
            pad_r += (osc1 * 0.6 + sub) * lfo * 0.08
            
    pulse_phase = (t_seg % 0.5) / 0.5
    pulse_env = np.exp(-pulse_phase * 12.0)
    arp_note = notes[c_idx % len(notes)] * 2
    pulse = 0.05 * pulse_env * np.sin(2 * np.pi * arp_note * t_seg)
    
    cycle_l[start_s:end_s] = bass * 0.22 + pad_l + pulse
    cycle_r[start_s:end_s] = bass * 0.22 + pad_r + pulse

num_repeats = int(duration / cycle_duration)
full_l = np.tile(cycle_l, num_repeats)
full_r = np.tile(cycle_r, num_repeats)

fade_in = int(sample_rate * 2.5)
fade_out = int(sample_rate * 4.0)
full_l[:fade_in] *= np.linspace(0, 1, fade_in, dtype=np.float32)
full_r[:fade_in] *= np.linspace(0, 1, fade_in, dtype=np.float32)
full_l[-fade_out:] *= np.linspace(1, 0, fade_out, dtype=np.float32)
full_r[-fade_out:] *= np.linspace(1, 0, fade_out, dtype=np.float32)

max_val = max(np.max(np.abs(full_l)), np.max(np.abs(full_r)), 1e-5)
full_l = (full_l / max_val) * 0.22
full_r = (full_r / max_val) * 0.22

audio_stereo = np.vstack((full_l, full_r)).T
pcm16 = (audio_stereo * 32767).astype(np.int16)

raw_path = 'assets/audio_v2/bgm_180s_raw.pcm'
with open(raw_path, 'wb') as f:
    f.write(pcm16.tobytes())

out_mp3 = 'assets/audio_v2/bgm_180s.mp3'
cmd = [
    'ffmpeg', '-y',
    '-f', 's16le', '-ar', '44100', '-ac', '2',
    '-i', raw_path,
    '-b:a', '192k',
    out_mp3
]
subprocess.run(cmd, check=True)
if os.path.exists(raw_path):
    os.remove(raw_path)

import shutil
shutil.copy(out_mp3, 'public/audio_v2/bgm_180s.mp3')
print(f"Generated 180s BGM: {out_mp3}")
