import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Scene1ContextV2_2 } from './scenes/Scene1ContextV2_2';
import { Scene2PainPointsV2_2 } from './scenes/Scene2PainPointsV2_2';
import { Scene3ArchitectureV2_2 } from './scenes/Scene3ArchitectureV2_2';
import { Scene4EnterpriseV2_2 } from './scenes/Scene4EnterpriseV2_2';
import { Scene5PoliceFeaturesV2_2 } from './scenes/Scene5PoliceFeaturesV2_2';
import { Scene6OutroV2_2 } from './scenes/Scene6OutroV2_2';

export const VideoPromoV2_2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#FAFBFD' }}>
      {/* 147s Ambient Tech Score for Version 2.2 */}
      <Audio
        src={staticFile('audio_v2_2/bgm_v2_2.mp3')}
        volume={0.16}
      />

      {/* 6 Sequential Scenes for Version 2.2 (Total: 4,410 frames = 147.0s) */}
      <Series>
        {/* Scene 1: Bối cảnh đặc thù & 58 kho chứa (24s = 720 frames) */}
        <Series.Sequence durationInFrames={720}>
          <Scene1ContextV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2_2/scene_1_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 2: 6 Điểm nghẽn thực tế PC06 (28s = 840 frames) */}
        <Series.Sequence durationInFrames={840}>
          <Scene2PainPointsV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={825}>
              <Audio src={staticFile('audio_v2_2/scene_2_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 3: Cơ sở pháp lý & Kiến trúc 3 Cổng (24s = 720 frames) */}
        <Series.Sequence durationInFrames={720}>
          <Scene3ArchitectureV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2_2/scene_3_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 4: Cổng Doanh nghiệp - Thao tác Sidebar Web (24s = 720 frames) */}
        <Series.Sequence durationInFrames={720}>
          <Scene4EnterpriseV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2_2/scene_4_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 5: Cổng Công an PC06 - Thao tác Sidebar Web (25s = 750 frames) */}
        <Series.Sequence durationInFrames={750}>
          <Scene5PoliceFeaturesV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={735}>
              <Audio src={staticFile('audio_v2_2/scene_5_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 6: Hiệu quả Quản trị & Khẩu hiệu Chuyển đổi số PC06 (22s = 660 frames) */}
        <Series.Sequence durationInFrames={660}>
          <Scene6OutroV2_2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={645}>
              <Audio src={staticFile('audio_v2_2/scene_6_v2_2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
