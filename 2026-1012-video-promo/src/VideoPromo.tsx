import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Scene1Context } from './scenes/Scene1Context';
import { Scene2Architecture } from './scenes/Scene2Architecture';
import { Scene3Features } from './scenes/Scene3Features';
import { Scene4Benefits } from './scenes/Scene4Benefits';
import { Scene5Outro } from './scenes/Scene5Outro';

export const VideoPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#F8FAFC' }}>
      {/* Background Ambience Music across full 120s */}
      <Audio
        src={staticFile('audio/bgm.mp3')}
        volume={0.18}
      />

      {/* Main Video Sequence: 5 Scenes */}
      <Series>
        {/* Scene 1: Bối cảnh & Điểm nghẽn (20s = 600 frames) */}
        <Series.Sequence durationInFrames={600}>
          <Scene1Context />
          {/* Start voiceover 0.8s into the scene */}
          <Series>
            <Series.Sequence durationInFrames={25} />
            <Series.Sequence durationInFrames={575}>
              <Audio src={staticFile('audio/scene_1_context.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 2: Kiến trúc 3 Cổng & Cơ sở dữ liệu tập trung (25s = 750 frames) */}
        <Series.Sequence durationInFrames={750}>
          <Scene2Architecture />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={730}>
              <Audio src={staticFile('audio/scene_2_architecture.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 3: Đột phá tính năng & Giao diện thực tế (40s = 1200 frames) */}
        <Series.Sequence durationInFrames={1200}>
          <Scene3Features />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={1180}>
              <Audio src={staticFile('audio/scene_3_features.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 4: Hiệu quả thiết thực & Giá trị mang lại (20s = 600 frames) */}
        <Series.Sequence durationInFrames={600}>
          <Scene4Benefits />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={580}>
              <Audio src={staticFile('audio/scene_4_benefits.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>

        {/* Scene 5: Thông điệp đồng hành & Kết thúc (15s = 450 frames) */}
        <Series.Sequence durationInFrames={450}>
          <Scene5Outro />
          <Series>
            <Series.Sequence durationInFrames={20} />
            <Series.Sequence durationInFrames={430}>
              <Audio src={staticFile('audio/scene_5_outro.mp3')} volume={1.0} />
            </Series.Sequence>
          </Series>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
