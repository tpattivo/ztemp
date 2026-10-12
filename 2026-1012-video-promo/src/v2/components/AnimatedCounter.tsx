import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface AnimatedCounterProps {
  start?: number;
  end: number;
  startFrame?: number;
  durationFrames?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  start = 0,
  end,
  startFrame = 10,
  durationFrames = 45,
  suffix = '',
  prefix = '',
}) => {
  const frame = useCurrentFrame();

  const value = Math.round(
    interpolate(frame, [startFrame, startFrame + durationFrames], [start, end], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  return (
    <span>
      {prefix}
      {value.toLocaleString('vi-VN')}
      {suffix}
    </span>
  );
};
