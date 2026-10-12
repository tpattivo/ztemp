import React from 'react';
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../styles/theme';

interface DeviceFrameProps {
  imageSrc: string;
  title?: string;
  zoom?: boolean;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  imageSrc,
  title = 'Cổng Quản lý VLNCN — TP Quảng Ninh',
  zoom = true,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 90 },
  });

  // Slow subtle continuous zoom (Ken Burns inside frame)
  const scale = zoom
    ? interpolate(frame, [0, durationInFrames], [1, 1.05], {
        extrapolateRight: 'clamp',
      })
    : 1;

  const yOffset = interpolate(frame, [0, durationInFrames], [0, -15], {
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
      }}
    >
      <div
        style={{
          width: 1460,
          height: 820,
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(16, 185, 129, 0.25)',
        }}
      >
        {/* Browser Top Window Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            gap: 12,
            justifyContent: 'space-between',
          }}
        >
          {/* Traffic light buttons */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>

          {/* Address bar mockup */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              padding: '4px 20px',
              fontSize: 13,
              fontWeight: 500,
              color: THEME.colors.textMuted,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: 480,
              justifyContent: 'center',
            }}
          >
            <span style={{ color: THEME.colors.primary, fontWeight: 700 }}>🔒 https://</span>
            <span>vlncn.quangninh.gov.vn</span>
          </div>

          <div style={{ fontSize: 13, fontWeight: 600, color: THEME.colors.primaryDark }}>
            {title}
          </div>
        </div>

        {/* Screen Content Container with slow zoom/pan */}
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
              transform: `scale(${scale}) translateY(${yOffset}px)`,
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
        </div>
      </div>
    </div>
  );
};
