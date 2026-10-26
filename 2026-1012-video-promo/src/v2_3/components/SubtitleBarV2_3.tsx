import React from 'react';
import { Volume2 } from 'lucide-react';
import { useCurrentFrame } from 'remotion';
import { THEME_V2_3 } from '../styles/themeV2_3';

interface SubtitleBarV2_3Props {
  text: string;
}

export const SubtitleBarV2_3: React.FC<SubtitleBarV2_3Props> = ({ text }) => {
  const frame = useCurrentFrame();

  // Equalizer heights simulation
  const barHeights = [
    8 + Math.abs(Math.sin(frame * 0.25)) * 14,
    10 + Math.abs(Math.cos(frame * 0.32)) * 16,
    6 + Math.abs(Math.sin(frame * 0.41)) * 18,
    12 + Math.abs(Math.cos(frame * 0.22)) * 12,
    7 + Math.abs(Math.sin(frame * 0.35)) * 15,
  ];

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 20,
        left: 48,
        right: 48,
        height: 58,
        backgroundColor: 'rgba(6, 12, 24, 0.82)',
        backdropFilter: 'blur(20px)',
        borderRadius: 16,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: `${THEME_V2_3.shadows.card}, inset 0 1px 0 0 rgba(255, 255, 255, 0.14)`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        gap: 18,
        zIndex: 90,
      }}
    >
      {/* Equalizer Visualizer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          height: 24,
          padding: '0 8px',
          borderRadius: 8,
          backgroundColor: 'rgba(220, 38, 38, 0.18)',
          border: '1px solid rgba(220, 38, 38, 0.35)',
        }}
      >
        <Volume2 size={15} color={THEME_V2_3.colors.primaryBright} style={{ marginRight: 4 }} />
        {barHeights.map((h, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: `${h}px`,
              backgroundColor: i % 2 === 0 ? THEME_V2_3.colors.primaryBright : THEME_V2_3.colors.goldBright,
              borderRadius: 2,
              boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)',
              transition: 'height 0.1s ease',
            }}
          />
        ))}
      </div>

      {/* Subtitle Text */}
      <div
        style={{
          fontFamily: THEME_V2_3.fonts.main,
          fontSize: 16,
          fontWeight: 600,
          color: THEME_V2_3.colors.textWhite,
          lineHeight: 1.4,
          letterSpacing: '0.01em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
        }}
      >
        {text}
      </div>

      {/* Official Slogan Tag */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: THEME_V2_3.colors.goldBright,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: 6,
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
        }}
      >
        CÔNG AN TỈNH QUẢNG NINH
      </div>
    </div>
  );
};
