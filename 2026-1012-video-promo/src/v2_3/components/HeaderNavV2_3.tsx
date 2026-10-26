import React from 'react';
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Shield, Radio, CheckCircle2 } from 'lucide-react';
import { THEME_V2_3 } from '../styles/themeV2_3';

interface HeaderNavV2_3Props {
  currentChapter: number; // 1 to 6
  title?: string;
  subtitle?: string;
}

const CHAPTERS = [
  { num: 1, label: 'Bối cảnh' },
  { num: 2, label: 'Điểm nghẽn' },
  { num: 3, label: 'Kiến trúc' },
  { num: 4, label: 'Cổng DN' },
  { num: 5, label: 'Cổng PC06' },
  { num: 6, label: 'Hiệu quả' },
];

export const HeaderNavV2_3: React.FC<HeaderNavV2_3Props> = ({
  currentChapter,
  title = 'HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP',
  subtitle = 'CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06',
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 90 },
  });

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: 'clamp',
  });

  // Timecode calculation
  const currentSec = Math.floor(frame / fps);
  const totalSec = Math.floor(durationInFrames / fps);
  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Top Laser Progress Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(to right, #B91C1C 0%, #EF4444 70%, #F59E0B 100%)',
            boxShadow: '0 0 12px #EF4444, 0 0 4px #F59E0B',
          }}
        />
      </div>

      {/* Floating Titanium Frosted HUD */}
      <div
        style={{
          position: 'absolute',
          top: 18,
          left: 48,
          right: 48,
          height: 70,
          backgroundColor: THEME_V2_3.colors.surfaceGlass,
          backdropFilter: 'blur(24px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: `${THEME_V2_3.shadows.card}, inset 0 1px 0 0 rgba(255, 255, 255, 0.18)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          zIndex: 90,
          opacity: entrance,
          transform: `translateY(${(1 - entrance) * -20}px)`,
          fontFamily: THEME_V2_3.fonts.main,
        }}
      >
        {/* Left: Police Emblem & System Titles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Logo Bộ Công An in Gold Halo Ring */}
          <div
            style={{
              position: 'relative',
              width: 48,
              height: 48,
              borderRadius: '50%',
              padding: 2,
              background: 'linear-gradient(135deg, #F59E0B, #DC2626)',
              boxShadow: '0 0 16px rgba(245, 158, 11, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Img
              src={staticFile('logo-bo-cong-an.jpg')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: THEME_V2_3.colors.goldBright,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>{subtitle}</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  backgroundColor: THEME_V2_3.colors.goldBright,
                  display: 'inline-block',
                }}
              />
              <span style={{ color: THEME_V2_3.colors.cyanBright }}>CƠ SỞ DỮ LIỆU ĐỀ ÁN 06</span>
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: THEME_V2_3.colors.textWhite,
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </div>
          </div>
        </div>

        {/* Center: Interactive Breadcrumb Chapters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'rgba(4, 8, 18, 0.65)',
            padding: '5px 8px',
            borderRadius: 14,
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {CHAPTERS.map((ch) => {
            const isActive = currentChapter === ch.num;
            return (
              <div
                key={ch.num}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: isActive ? '6px 14px' : '6px 10px',
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? THEME_V2_3.colors.textWhite : THEME_V2_3.colors.textMuted,
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(153, 27, 27, 0.95))'
                    : 'transparent',
                  boxShadow: isActive ? '0 0 12px rgba(220, 38, 38, 0.45)' : 'none',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: isActive ? THEME_V2_3.colors.goldBright : THEME_V2_3.colors.textSubtle,
                  }}
                >
                  0{ch.num}
                </span>
                <span>{ch.label}</span>
              </div>
            );
          })}
        </div>

        {/* Right: Security Seal & Digital Timecode */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              padding: '6px 14px',
              borderRadius: 12,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: THEME_V2_3.colors.emerald,
                boxShadow: '0 0 8px #10B981',
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#34D399',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              TRỰC TUYẾN 24/7
            </span>
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 13,
              fontWeight: 700,
              color: THEME_V2_3.colors.textSecondary,
              backgroundColor: 'rgba(4, 8, 18, 0.65)',
              padding: '6px 12px',
              borderRadius: 10,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              letterSpacing: '0.05em',
            }}
          >
            {formatTime(currentSec)} / {formatTime(totalSec)}
          </div>
        </div>
      </div>
    </>
  );
};
