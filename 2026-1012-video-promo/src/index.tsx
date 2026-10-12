import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { VideoPromo } from './VideoPromo';
import { VideoPromoV2 } from './v2/VideoPromoV2';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Version 1: 120s (Giữ nguyên không sửa đổi) */}
      <Composition
        id="VideoPromo"
        component={VideoPromo}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Version 2: 180s (Inter font, Lucide SVG, Thiết kế trang nhã, Animation nâng cao) */}
      <Composition
        id="VideoPromoV2"
        component={VideoPromoV2}
        durationInFrames={5400}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
