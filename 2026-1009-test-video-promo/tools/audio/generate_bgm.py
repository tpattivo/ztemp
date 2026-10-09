import numpy as np
import wave
import struct

def generate_bgm(duration=85, sr=44100):
    bpm = 112
    beat_dur = 60.0 / bpm
    total_samples = int(duration * sr)
    t = np.linspace(0, duration, total_samples, endpoint=False)
    
    # Master audio buffer
    audio = np.zeros(total_samples, dtype=np.float32)
    
    # 1. Warm Ambient Pad (chords in D minor: Dm - F - C - G)
    chord_times = [0, 4 * beat_dur, 8 * beat_dur, 12 * beat_dur]
    # D3, F3, A3, C4
    freqs = [146.83, 174.61, 220.00, 261.63, 196.00]
    
    pad = (
        0.25 * np.sin(2 * np.pi * 146.83 * t) +
        0.20 * np.sin(2 * np.pi * 220.00 * t) +
        0.15 * np.sin(2 * np.pi * 261.63 * t) +
        0.10 * np.sin(2 * np.pi * 293.66 * t)
    )
    # Slow LFO filter sweep
    lfo = 0.5 + 0.5 * np.sin(2 * np.pi * 0.15 * t)
    audio += pad * lfo * 0.18
    
    # 2. Rhythmic Synth Pluck / Arpeggio (16th notes: 4 notes per beat)
    note_dur = beat_dur / 4.0
    arp_notes = [293.66, 349.23, 440.00, 523.25, 440.00, 349.23] # D4, F4, A4, C5...
    
    num_notes = int(duration / note_dur)
    for i in range(num_notes):
        n_t0 = i * note_dur
        n_idx0 = int(n_t0 * sr)
        n_idx1 = min(total_samples, int((n_t0 + note_dur) * sr))
        if n_idx1 <= n_idx0:
            continue
        n_len = n_idx1 - n_idx0
        n_time = np.linspace(0, note_dur, n_len, endpoint=False)
        
        freq = arp_notes[i % len(arp_notes)]
        env = np.exp(-14 * n_time) # snappy decay
        pluck = np.sin(2 * np.pi * freq * n_time) + 0.3 * np.sin(4 * np.pi * freq * n_time)
        audio[n_idx0:n_idx1] += pluck * env * 0.12
        
    # 3. Soft Sub Kick on downbeats (beats 0, 1, 2, 3...)
    num_beats = int(duration / beat_dur)
    for b in range(num_beats):
        b_t0 = b * beat_dur
        b_idx0 = int(b_t0 * sr)
        b_idx1 = min(total_samples, int((b_t0 + 0.35) * sr))
        if b_idx1 <= b_idx0:
            continue
        k_len = b_idx1 - b_idx0
        k_time = np.linspace(0, 0.35, k_len, endpoint=False)
        # Pitch drop 120Hz -> 45Hz
        k_freq = 45.0 + 75.0 * np.exp(-25 * k_time)
        k_phase = 2 * np.pi * np.cumsum(k_freq) / sr
        k_env = np.exp(-10 * k_time)
        audio[b_idx0:b_idx1] += np.sin(k_phase) * k_env * 0.22
        
    # 4. Fade in (2s) & Fade out (3s)
    fade_in = np.clip(t / 2.0, 0.0, 1.0)
    fade_out = np.clip((duration - t) / 3.0, 0.0, 1.0)
    audio *= fade_in * fade_out
    
    # Normalize peak to -3dB (approx 0.707)
    peak = np.max(np.abs(audio))
    if peak > 0:
        audio = (audio / peak) * 0.65
        
    # Convert to 16-bit PCM WAV
    int_audio = (audio * 32767).astype(np.int16)
    
    with wave.open("assets/audio/bgm_music.wav", "w") as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sr)
        f.writeframes(int_audio.tobytes())
        
    print("bgm_music.wav generated successfully!")

if __name__ == "__main__":
    generate_bgm()
