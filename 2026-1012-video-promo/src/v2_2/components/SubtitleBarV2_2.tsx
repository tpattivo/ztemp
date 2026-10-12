import React from 'react';
import { Volume2 } from 'lucide-react';
import { THEME_V2_2 } from '../styles/themeV2_2';

interface SubtitleBarV2_2Props {
  text: string;
}

export const SubtitleBarV2_2: React.FC<SubtitleBarV2_2Props> = ({ text }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 24,
        left: 60,
        right: 60,
        height: 62,
        backgroundColor: 'rgba(15, 23, 42, 0.88)',
        backdropFilter: 'blur(16px)',
        borderRadius: 18,
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: THEME_V2_2.shadows.elevated,
        display: 'flex',
        alignItems: 'center',
        padding: '0 26px',
        gap: 16,
        zIndex: 90,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          backgroundColor: 'rgba(185, 28, 28, 0.3)',
          border: '1px solid #B91C1C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F87171',
          flexShrink: 0,
        }}
      >
        <Volume2 size={18} strokeWidth={2.4} />
      </div>
      <div
        style={{
          fontFamily: THEME_V2_2.fonts.main,
          fontSize: 16,
          fontWeight: 600,
          color: '#FFFFFF',
          lineHeight: 1.4,
          letterSpacing: '0.01em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
        }}
      >
        {text}
      </div>
    </div>
  );
};
