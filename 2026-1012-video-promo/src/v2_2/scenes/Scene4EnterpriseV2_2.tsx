import React from 'react';
import { AbsoluteFill, Video, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Lock, Building2, Sparkles, Video as VideoIcon } from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene4EnterpriseV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 90 } });

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={4} />

      {/* Main Container - Full height distribution */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 50,
          right: 50,
          bottom: 96,
          backgroundColor: '#FFFFFF',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: THEME_V2_2.shadows.elevated,
          border: '1px solid rgba(226, 232, 240, 0.95)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
          opacity: entrance,
          transform: `scale(${entrance * 0.03 + 0.97})`,
        }}
      >
        {/* Top Browser Bar */}
        <div
          style={{
            height: 46,
            backgroundColor: '#F1F5F9',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            gap: 16,
            flexShrink: 0,
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>

          {/* URL bar */}
          <div
            style={{
              flex: 1,
              maxWidth: 580,
              height: 30,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              border: '1px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: 8,
              fontSize: 12,
              fontFamily: THEME_V2_2.fonts.main,
              color: '#334155',
            }}
          >
            <Lock size={13} color="#16A34A" />
            <span style={{ fontWeight: 600, color: '#16A34A' }}>https://</span>
            <span style={{ fontWeight: 600, color: '#0F172A' }}>vlncn.quangninh.gov.vn/portal/enterprise</span>
          </div>

          {/* Actual Web Recording Badge */}
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(185, 28, 28, 0.08)',
              border: '1px solid rgba(185, 28, 28, 0.25)',
              padding: '4px 14px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 800,
              color: THEME_V2_2.colors.primary,
            }}
          >
            <VideoIcon size={14} />
            <span>GIAO DIỆN THAO TÁC THỰC TẾ TRÊN HỆ THỐNG</span>
          </div>
        </div>

        {/* Video Area: Actual Recorded Interaction Video */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#0F172A',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Video
            src={staticFile('recordings/video_enterprise_ui.mp4')}
            playbackRate={0.78}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top left',
            }}
          />
        </div>
      </div>

      <SubtitleBarV2_2
        text={
          frame < 360
            ? 'Tại Cổng Doanh nghiệp, mọi thao tác được số hóa toàn trình: Đơn vị lập đăng ký tiếp nhận, đề nghị xuất kho gửi trực tuyến; Phiếu xuất nhập tự động cập nhật sổ tồn theo tỷ lệ sức chứa.'
            : 'Đặc biệt, cơ chế in phiếu kèm mã QR thông minh cho phép ghi nhận an toàn tại cửa lò mất sóng và tự động đồng bộ ngay khi kết nối lại mạng.'
        }
      />
    </AbsoluteFill>
  );
};
