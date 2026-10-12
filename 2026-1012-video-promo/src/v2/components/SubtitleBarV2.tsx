import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Volume2 } from 'lucide-react';
import { THEME_V2 } from '../styles/themeV2';

interface SubtitleBarV2Props {
  text: string;
}

export const SubtitleBarV2: React.FC<SubtitleBarV2Props> = ({ text }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '84%',
        maxWidth: 1520,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        borderRadius: 20,
        padding: '16px 32px',
        boxShadow: THEME_V2.shadows.float,
        border: '1px solid rgba(5, 150, 105, 0.2)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
        opacity,
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 12,
          backgroundColor: THEME_V2.colors.primaryUltraLight,
          color: THEME_V2.colors.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          flexShrink: 0,
        }}
      >
        <Volume2 size={20} strokeWidth={2.2} />
      </div>

      <div
        style={{
          fontSize: 22,
          lineHeight: 1.5,
          fontWeight: 600,
          color: THEME_V2.colors.textPrimary,
          textAlign: 'left',
          letterSpacing: '-0.01em',
          flex: 1,
        }}
      >
        {text}
      </div>
    </div>
  );
};
