import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { THEME_V2_3 } from '../styles/themeV2_3';

interface BackgroundMeshV2_3Props {
  accentColor?: string;
}

export const BackgroundMeshV2_3: React.FC<BackgroundMeshV2_3Props> = ({
  accentColor = THEME_V2_3.colors.primary,
}) => {
  const frame = useCurrentFrame();

  // Subtle breathing animation
  const glow1X = 25 + Math.sin(frame / 60) * 8;
  const glow1Y = 20 + Math.cos(frame / 70) * 6;
  const glow2X = 75 - Math.cos(frame / 80) * 8;
  const glow2Y = 65 + Math.sin(frame / 65) * 6;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: THEME_V2_3.colors.bgBase,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Deep Tactical Gradient Base */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: THEME_V2_3.colors.bgDarkGradient,
        }}
      />

      {/* Floating Ambient Glow 1 (Police Crimson / Accent) */}
      <div
        style={{
          position: 'absolute',
          top: `${glow1Y}%`,
          left: `${glow1X}%`,
          width: 700,
          height: 700,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(220, 38, 38, 0) 70%)`,
          opacity: 0.12,
          filter: 'blur(80px)',
        }}
      />

      {/* Floating Ambient Glow 2 (Command Navy / Cyan) */}
      <div
        style={{
          position: 'absolute',
          top: `${glow2Y}%`,
          left: `${glow2X}%`,
          width: 800,
          height: 800,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, #0284C7 0%, rgba(2, 132, 199, 0) 70%)`,
          opacity: 0.08,
          filter: 'blur(90px)',
        }}
      />

      {/* Ultra-subtle Tactical Grid Matrix */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.8,
        }}
      />

      {/* Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(4, 8, 18, 0.75) 100%)',
        }}
      />
    </div>
  );
};
