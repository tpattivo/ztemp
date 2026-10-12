import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { VideoPromo } from './VideoPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VideoPromo"
      component={VideoPromo}
      durationInFrames={3600}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionRoot);
