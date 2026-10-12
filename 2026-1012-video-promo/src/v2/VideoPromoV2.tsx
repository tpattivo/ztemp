import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Scene1ContextV2 } from './scenes/Scene1ContextV2';
import { Scene2PainPointsV2 } from './scenes/Scene2PainPointsV2';
import { Scene3ArchitectureV2 } from './scenes/Scene3ArchitectureV2';
import { Scene4EnterpriseV2 } from './scenes/Scene4EnterpriseV2';
import { Scene5PoliceFeaturesV2 } from './scenes/Scene5PoliceFeaturesV2';
import { Scene6OutroV2 } from './scenes/Scene6OutroV2';

export const VideoPromoV2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#FAFBFD' }}>
      {/* 142s Ambient Tech Background Score with elegant fade-out */}
      <Audio
        src={staticFile('audio_v2/bgm_v2.mp3')}
        volume={0.16}
      />

      {/* 6 Sequential Scenes tightly synchronized to voiceover (Total 4,260 frames = 142s) */}
      <Series>
        {/* Scene 1: Bối cảnh đặc thù & 58 kho chứa (24s = 720 frames | Audio: 22.0s) */}
        <Series.Sequence durationInFrames={720}>
          <Scene1ContextV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2/scene_1_context_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 2: 7 Điểm nghẽn từ khảo sát thực tế (28s = 840 frames | Audio: 25.7s) */}
        <Series.Sequence durationInFrames={840}>
          <Scene2PainPointsV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={825}>
              <Audio src={staticFile('audio_v2/scene_2_painpoints_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 3: Cơ sở pháp lý & Kiến trúc 3 Cổng (24s = 720 frames | Audio: 21.8s) */}
        <Series.Sequence durationInFrames={720}>
          <Scene3ArchitectureV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2/scene_3_legal_architecture_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 4: Cổng Doanh nghiệp & Nghiệp vụ khép kín (22s = 660 frames | Audio: 20.1s) */}
        <Series.Sequence durationInFrames={660}>
          <Scene4EnterpriseV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={645}>
              <Audio src={staticFile('audio_v2/scene_4_enterprise_portal_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 5: Cổng Công an PC06 & 5 Đột phá thông minh (24s = 720 frames | Audio: 21.8s) */}
        <Series.Sequence durationInFrames={720}>
          <Scene5PoliceFeaturesV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={705}>
              <Audio src={staticFile('audio_v2/scene_5_police_features_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 6: Hiệu quả thiết thực & Thông điệp kết PC06 (20s = 600 frames | Audio: 15.6s - Không bị cắt đuôi!) */}
        <Series.Sequence durationInFrames={600}>
          <Scene6OutroV2 />
          <Series>
            <Series.Sequence durationInFrames={15} />
            <Series.Sequence durationInFrames={585}>
              <Audio src={staticFile('audio_v2/scene_6_benefits_outro_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
