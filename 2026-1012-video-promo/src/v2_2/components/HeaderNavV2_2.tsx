import React from 'react';
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME_V2_2 } from '../styles/themeV2_2';

interface HeaderNavV2_2Props {
  currentChapter: number; // 1 to 6
  title?: string;
  subtitle?: string;
}

const CHAPTERS = [
  '1. Bối cảnh',
  '2. Điểm nghẽn',
  '3. Kiến trúc',
  '4. Cổng DN',
  '5. Cổng PC06',
  '6. Hiệu quả QL',
];

export const HeaderNavV2_2: React.FC<HeaderNavV2_2Props> = ({
  currentChapter,
  title = 'HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP',
  subtitle = 'CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06',
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 95 },
  });

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <>
      {/* Top micro progress bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: 'rgba(226, 232, 240, 0.6)',
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: THEME_V2_2.colors.primary,
            boxShadow: '0 0 10px #B91C1C',
          }}
        />
      </div>

      {/* Main Top Navigation Bar */}
      <div
        style={{
          position: 'absolute',
          top: 22,
          left: 60,
          right: 60,
          height: 72,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(16px)',
          borderRadius: 20,
          border: '1px solid rgba(226, 232, 240, 0.85)',
          boxShadow: THEME_V2_2.shadows.card,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          zIndex: 90,
          opacity: entrance,
          transform: `translateY(${(1 - entrance) * -15}px)`,
        }}
      >
        {/* Left: Official Logo + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(185, 28, 28, 0.25)',
              border: '2px solid #D97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Img
              src={staticFile('logo-bo-cong-an.jpg')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: THEME_V2_2.fonts.main,
                fontSize: 16,
                fontWeight: 900,
                color: THEME_V2_2.colors.headerNavy,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: THEME_V2_2.fonts.main,
                fontSize: 12,
                fontWeight: 700,
                color: THEME_V2_2.colors.primary,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>

        {/* Right: Chapter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {CHAPTERS.map((ch, idx) => {
            const chNum = idx + 1;
            const isActive = currentChapter === chNum;
            const isPassed = currentChapter > chNum;

            return (
              <div
                key={ch}
                style={{
                  padding: '7px 16px',
                  borderRadius: 14,
                  fontSize: 13,
                  fontWeight: isActive ? 800 : 600,
                  fontFamily: THEME_V2_2.fonts.main,
                  transition: 'all 0.3s ease',
                  backgroundColor: isActive
                    ? THEME_V2_2.colors.primary
                    : isPassed
                    ? 'rgba(185, 28, 28, 0.08)'
                    : 'transparent',
                  color: isActive
                    ? '#FFFFFF'
                    : isPassed
                    ? THEME_V2_2.colors.primary
                    : THEME_V2_2.colors.textMuted,
                  border: isActive
                    ? '1px solid #B91C1C'
                    : isPassed
                    ? '1px solid rgba(185, 28, 28, 0.2)'
                    : '1px solid transparent',
                  boxShadow: isActive ? '0 4px 12px rgba(185, 28, 28, 0.28)' : 'none',
                }}
              >
                {ch}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
