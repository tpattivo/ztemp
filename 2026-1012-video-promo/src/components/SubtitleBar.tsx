import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { THEME } from '../styles/theme';

interface SubtitleBarProps {
  text: string;
  highlightWords?: string[];
}

export const SubtitleBar: React.FC<SubtitleBarProps> = ({
  text,
  highlightWords = [],
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '84%',
        maxWidth: 1500,
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        borderRadius: 20,
        padding: '18px 36px',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(16, 185, 129, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        opacity,
      }}
    >
      <div
        style={{
          width: 8,
          height: 28,
          backgroundColor: THEME.colors.primary,
          borderRadius: 4,
          marginRight: 20,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          fontSize: 24,
          lineHeight: 1.45,
          fontWeight: 600,
          color: THEME.colors.textDark,
          textAlign: 'center',
          fontFamily: THEME.fonts.main,
          letterSpacing: '-0.01em',
        }}
      >
        {text}
      </div>
    </div>
  );
};
