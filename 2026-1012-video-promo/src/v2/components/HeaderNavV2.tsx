import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ShieldCheck } from 'lucide-react';
import { THEME_V2 } from '../styles/themeV2';

interface HeaderNavV2Props {
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
  '6. Hiệu quả',
];

export const HeaderNavV2: React.FC<HeaderNavV2Props> = ({
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
          height: 3,
          backgroundColor: 'rgba(226, 232, 240, 0.6)',
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: THEME_V2.colors.primary,
            boxShadow: '0 0 8px #10B981',
          }}
        />
      </div>

      {/* Header Bar */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 60,
          right: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 90,
          opacity: entrance,
          transform: `translateY(${(1 - entrance) * -20}px)`,
          fontFamily: THEME_V2.fonts.main,
        }}
      >
        {/* Left Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              backgroundColor: '#FFFFFF',
              boxShadow: THEME_V2.shadows.card,
              border: '1px solid rgba(5, 150, 105, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: THEME_V2.colors.primary,
            }}
          >
            <ShieldCheck size={26} strokeWidth={2.2} />
          </div>
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: THEME_V2.colors.textPrimary,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: THEME_V2.colors.primary,
                letterSpacing: '0.04em',
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>

        {/* Right Chapter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            padding: '6px 10px',
            borderRadius: 30,
            boxShadow: THEME_V2.shadows.soft,
            border: '1px solid rgba(226, 232, 240, 0.9)',
          }}
        >
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx + 1 === currentChapter;
            return (
              <div
                key={idx}
                style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? THEME_V2.colors.primaryDark : 'transparent',
                  color: isActive ? '#FFFFFF' : THEME_V2.colors.textMuted,
                  boxShadow: isActive ? '0 2px 8px rgba(6, 78, 59, 0.25)' : 'none',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
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
