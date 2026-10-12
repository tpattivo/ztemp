import React from 'react';
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Globe, Lock } from 'lucide-react';
import { THEME_V2 } from '../styles/themeV2';
import { SimulatedCursor } from './SimulatedCursor';

interface DeviceFrameV2Props {
  imageSrc: string;
  title?: string;
  zoomTarget?: 'center' | 'top' | 'left' | 'right';
  cursorAction?: {
    startX: number;
    startY: number;
    targetX: number;
    targetY: number;
    moveStartFrame: number;
    clickFrame: number;
  };
}

export const DeviceFrameV2: React.FC<DeviceFrameV2Props> = ({
  imageSrc,
  title = 'Cổng Quản lý VLNCN — TP Quảng Ninh',
  zoomTarget = 'top',
  cursorAction,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 85 },
  });

  // Slow smooth camera dolly-in
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.06], {
    extrapolateRight: 'clamp',
  });

  const panY = interpolate(frame, [0, durationInFrames], [0, -18], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${entrance})`,
        opacity: entrance,
        position: 'relative',
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <div
        style={{
          width: 1460,
          height: 820,
          backgroundColor: '#FFFFFF',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: THEME_V2.shadows.float,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(5, 150, 105, 0.25)',
          position: 'relative',
        }}
      >
        {/* Browser Top Window Bar */}
        <div
          style={{
            height: 52,
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            gap: 16,
            justifyContent: 'space-between',
          }}
        >
          {/* Traffic light window controls */}
          <div style={{ display: 'flex', gap: 9 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>

          {/* Address Bar */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(203, 213, 225, 0.6)',
              borderRadius: 10,
              padding: '6px 22px',
              fontSize: 13,
              fontWeight: 500,
              color: THEME_V2.colors.textMuted,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: 520,
              justifyContent: 'center',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
            }}
          >
            <Lock size={14} color={THEME_V2.colors.primary} strokeWidth={2.4} />
            <span style={{ color: THEME_V2.colors.primary, fontWeight: 700 }}>https://</span>
            <span style={{ color: THEME_V2.colors.textSecondary }}>vlncn.quangninh.gov.vn</span>
            <Globe size={14} color={THEME_V2.colors.textSubtle} style={{ marginLeft: 8 }} />
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: THEME_V2.colors.primaryDark,
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </div>
        </div>

        {/* Inner Content with camera dolly */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#F1F5F9',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              transform: `scale(${scale}) translateY(${panY}px)`,
              transformOrigin: 'top center',
            }}
          >
            <Img
              src={imageSrc}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>

          {/* Simulated Cursor inside window */}
          {cursorAction && (
            <SimulatedCursor
              startX={cursorAction.startX}
              startY={cursorAction.startY}
              targetX={cursorAction.targetX}
              targetY={cursorAction.targetY}
              moveStartFrame={cursorAction.moveStartFrame}
              clickFrame={cursorAction.clickFrame}
            />
          )}
        </div>
      </div>
    </div>
  );
};
