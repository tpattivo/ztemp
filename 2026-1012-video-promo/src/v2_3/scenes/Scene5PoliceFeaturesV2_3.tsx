import React from 'react';
import { AbsoluteFill, Video, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Lock, ShieldCheck, AlertTriangle, Navigation, Clock, Radio, Activity } from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene5PoliceFeaturesV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 90 } });
  const hudLeft = spring({ frame: frame - 25, fps, config: { damping: 15, stiffness: 85 } });
  const hudRight = spring({ frame: frame - 40, fps, config: { damping: 15, stiffness: 85 } });

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      <BackgroundMeshV2_3 accentColor="#DC2626" />
      <HeaderNavV2_3 currentChapter={5} />

      {/* Main Command Workstation Container */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 48,
          right: 48,
          bottom: 96,
          backgroundColor: 'rgba(8, 16, 32, 0.92)',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: `${THEME_V2_3.shadows.elevated}, 0 0 50px rgba(220, 38, 38, 0.25)`,
          border: '1px solid rgba(239, 68, 68, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
          opacity: entrance,
          transform: `scale(${entrance * 0.02 + 0.98})`,
        }}
      >
        {/* Browser Top Tactical Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: 'rgba(20, 10, 18, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            gap: 16,
            flexShrink: 0,
          }}
        >
          {/* Traffic Lights */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B', boxShadow: '0 0 6px #F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
          </div>

          {/* URL Search Capsule */}
          <div
            style={{
              flex: 1,
              maxWidth: 580,
              height: 32,
              backgroundColor: 'rgba(4, 8, 18, 0.85)',
              borderRadius: 8,
              border: '1px solid rgba(239, 68, 68, 0.35)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: 8,
            }}
          >
            <Lock size={13} color="#EF4444" />
            <span style={{ fontSize: 13, color: '#F87171', fontWeight: 600 }}>https://</span>
            <span style={{ fontSize: 13, color: THEME_V2_3.colors.textWhite, fontWeight: 500 }}>
              vlncn.quangninh.gov.vn/portal/pc06-command
            </span>
            <span
              style={{
                marginLeft: 'auto',
                fontSize: 10,
                color: '#F87171',
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                padding: '2px 8px',
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              PC06 CHỈ HUY
            </span>
          </div>

          {/* Module Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <ShieldCheck size={16} color={THEME_V2_3.colors.primaryBright} />
            <span style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_3.colors.primaryBright }}>
              CỔNG CÔNG AN PC06 · TRUNG TÂM CHỈ HUY SỐ
            </span>
          </div>
        </div>

        {/* Video Area Framing the Real Police UI Web Recording */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}>
          <Video
            src={staticFile('recordings/video_police_ui.mp4')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            volume={0}
          />

          {/* Floating Tactical Badge 1: Dashboard Cảnh báo tồn kho (Docked Bottom-Left) */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              padding: '16px 20px',
              border: '1px solid rgba(239, 68, 68, 0.45)',
              boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(220, 38, 38, 0.3)`,
              maxWidth: 340,
              opacity: hudLeft,
              transform: `translateX(${(1 - hudLeft) * -20}px)`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <AlertTriangle size={16} color={THEME_V2_3.colors.primaryBright} />
              <span style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_3.colors.primaryBright, letterSpacing: '0.08em' }}>
                CẢNH BÁO THÔNG MINH
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
              Phát hiện sớm kho vượt hạn mức
            </div>
            <div style={{ fontSize: 12, color: THEME_V2_3.colors.textSecondary, marginTop: 4 }}>
              Cảnh báo ngay lập tức khi kho đạt trên 95% sức chứa hoặc doanh nghiệp chậm báo cáo
            </div>
          </div>

          {/* Floating Tactical Badge 2: Giám sát GPS & Cấp số nhanh */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              padding: '16px 20px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(245, 158, 11, 0.25)`,
              maxWidth: 360,
              opacity: hudRight,
              transform: `translateX(${(1 - hudRight) * 20}px)`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Navigation size={16} color={THEME_V2_3.colors.goldBright} />
              <span style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_3.colors.goldBright, letterSpacing: '0.08em' }}>
                GIÁM SÁT HÀNH TRÌNH GPS
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
              Theo dõi lộ trình & Cấp số điện tử
            </div>
            <div style={{ fontSize: 12, color: THEME_V2_3.colors.textSecondary, marginTop: 4 }}>
              Rút ngắn thời gian thẩm định từ 2 ngày xuống còn vài phút, quản lý toàn trình phương tiện
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2_3 text="Cổng Công an PC06 là trung tâm chỉ huy số: Dashboard cảnh báo sớm kho vượt ngưỡng, duyệt cấp số và giám sát GPS hành trình." />
    </AbsoluteFill>
  );
};
