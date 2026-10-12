import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface SimulatedCursorProps {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  moveStartFrame: number;
  clickFrame: number;
}

export const SimulatedCursor: React.FC<SimulatedCursorProps> = ({
  startX,
  startY,
  targetX,
  targetY,
  moveStartFrame,
  clickFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Move animation
  const moveProgress = spring({
    frame: frame - moveStartFrame,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const currentX = interpolate(moveProgress, [0, 1], [startX, targetX]);
  const currentY = interpolate(moveProgress, [0, 1], [startY, targetY]);

  // Click scale & ring ripple
  const isClicking = frame >= clickFrame && frame <= clickFrame + 25;
  const clickProgress = interpolate(frame, [clickFrame, clickFrame + 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cursorScale = isClicking
    ? interpolate(frame, [clickFrame, clickFrame + 4, clickFrame + 12], [1, 0.85, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;

  if (frame < moveStartFrame - 5) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: currentX,
        top: currentY,
        pointerEvents: 'none',
        zIndex: 999,
        transform: `scale(${cursorScale})`,
        transformOrigin: 'top left',
      }}
    >
      {/* Click ripple circle */}
      {isClicking && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '2px solid #059669',
            backgroundColor: 'rgba(16, 185, 129, 0.25)',
            transform: `translate(-50%, -50%) scale(${clickProgress * 1.6 + 0.3})`,
            opacity: 1 - clickProgress,
          }}
        />
      )}

      {/* SVG Mouse Pointer */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))',
        }}
      >
        <path
          d="M3 3L10.07 20.97L12.58 13.58L19.97 11.07L3 3Z"
          fill="#0F172A"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
