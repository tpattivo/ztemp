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
      {/* 180s Ambient Tech Background Score */}
      <Audio
        src={staticFile('audio_v2/bgm_180s.mp3')}
        volume={0.16}
      />

      {/* 6 Sequential Scenes for 180s */}
      <Series>
        {/* Scene 1: Bối cảnh đặc thù & 58 kho chứa (25s = 750 frames) */}
        <Series.Sequence durationInFrames={750}>
          <Scene1ContextV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={730}>
              <Audio src={staticFile('audio_v2/scene_1_context_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 2: 7 Điểm nghẽn từ khảo sát thực tế (30s = 900 frames) */}
        <Series.Sequence durationInFrames={900}>
          <Scene2PainPointsV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={880}>
              <Audio src={staticFile('audio_v2/scene_2_painpoints_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 3: Cơ sở pháp lý & Kiến trúc 3 Cổng (30s = 900 frames) */}
        <Series.Sequence durationInFrames={900}>
          <Scene3ArchitectureV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={880}>
              <Audio src={staticFile('audio_v2/scene_3_legal_architecture_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 4: Cổng Doanh nghiệp & Nghiệp vụ khép kín (40s = 1200 frames) */}
        <Series.Sequence durationInFrames={1200}>
          <Scene4EnterpriseV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={1180}>
              <Audio src={staticFile('audio_v2/scene_4_enterprise_portal_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 5: Cổng Công an PC06 & 5 Đột phá thông minh (40s = 1200 frames) */}
        <Series.Sequence durationInFrames={1200}>
          <Scene5PoliceFeaturesV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={1180}>
              <Audio src={staticFile('audio_v2/scene_5_police_features_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 6: Hiệu quả thiết thực & Thông điệp kết PC06 (15s = 450 frames) */}
        <Series.Sequence durationInFrames={450}>
          <Scene6OutroV2 />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={430}>
              <Audio src={staticFile('audio_v2/scene_6_benefits_outro_v2.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
