import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../styles/theme';

interface HeaderBadgeProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const HeaderBadge: React.FC<HeaderBadgeProps> = ({
  title = 'HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP',
  subtitle = 'CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06',
  badge = 'CHUYỂN ĐỔI SỐ 2026',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 100 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 40,
        left: 60,
        right: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        opacity,
        transform: `translateY(${(1 - entrance) * -30}px)`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {/* Police Badge Emblem simulation */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 18px rgba(5, 150, 105, 0.35)',
            border: '2px solid #34D399',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          ★
        </div>
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: THEME.colors.textDark,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: THEME.colors.primary,
              letterSpacing: '0.05em',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Status Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          backgroundColor: '#FFFFFF',
          padding: '10px 22px',
          borderRadius: 30,
          boxShadow: THEME.shadows.card,
          border: '1px solid rgba(16, 185, 129, 0.3)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: THEME.colors.primaryLight,
            boxShadow: '0 0 10px #10B981',
          }}
        />
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: THEME.colors.primaryDark,
            letterSpacing: '0.08em',
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
};
