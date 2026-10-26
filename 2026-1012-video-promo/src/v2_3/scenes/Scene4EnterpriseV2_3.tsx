import React from 'react';
import { AbsoluteFill, Video, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Lock, Building2, Sparkles, CheckCircle2, QrCode, FileText, Zap } from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene4EnterpriseV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 90 } });
  const hudLeft = spring({ frame: frame - 25, fps, config: { damping: 15, stiffness: 85 } });
  const hudRight = spring({ frame: frame - 40, fps, config: { damping: 15, stiffness: 85 } });

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      <BackgroundMeshV2_3 accentColor="#0284C7" />
      <HeaderNavV2_3 currentChapter={4} />

      {/* Main Studio Display Container */}
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
          boxShadow: `${THEME_V2_3.shadows.elevated}, 0 0 45px rgba(2, 132, 199, 0.15)`,
          border: '1px solid rgba(255, 255, 255, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
          opacity: entrance,
          transform: `scale(${entrance * 0.02 + 0.98})`,
        }}
      >
        {/* Browser Top Titanium Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: 'rgba(12, 24, 48, 0.95)',
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
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: 8,
            }}
          >
            <Lock size={13} color="#10B981" />
            <span style={{ fontSize: 13, color: '#38BDF8', fontWeight: 600 }}>https://</span>
            <span style={{ fontSize: 13, color: THEME_V2_3.colors.textWhite, fontWeight: 500 }}>
              vlncn.quangninh.gov.vn/portal/doanh-nghiep
            </span>
            <span
              style={{
                marginLeft: 'auto',
                fontSize: 10,
                color: '#34D399',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                padding: '2px 8px',
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              SSL 256-BIT
            </span>
          </div>

          {/* Module Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <Building2 size={16} color={THEME_V2_3.colors.cyanBright} />
            <span style={{ fontSize: 13, fontWeight: 700, color: THEME_V2_3.colors.cyanBright }}>
              CỔNG DOANH NGHIỆP · PHẦN MỀM THỰC TẾ
            </span>
          </div>
        </div>

        {/* Video Area Framing the Real Web Screen Recording */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}>
          <Video
            src={staticFile('recordings/video_enterprise_ui.mp4')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            volume={0}
          />

          {/* Floating HUD Badge 1: Feature Callout Left (Docked Bottom-Left) */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              backgroundColor: 'rgba(11, 22, 44, 0.88)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              padding: '16px 20px',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(2, 132, 199, 0.25)`,
              maxWidth: 320,
              opacity: hudLeft,
              transform: `translateX(${(1 - hudLeft) * -20}px)`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Zap size={16} color={THEME_V2_3.colors.cyanBright} />
              <span style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_3.colors.cyanBright, letterSpacing: '0.08em' }}>
                THEO DÕI SỨC CHỨA KHO
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
              Quản lý 58 Kho & Sức chứa thiết kế
            </div>
            <div style={{ fontSize: 12, color: THEME_V2_3.colors.textSecondary, marginTop: 4 }}>
              Cảnh báo hạn mức nạp kho tự động trước khi lập đơn nổ mìn
            </div>
          </div>

          {/* Floating HUD Badge 2: Feature Callout Right */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              backgroundColor: 'rgba(11, 22, 44, 0.88)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              padding: '16px 20px',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(245, 158, 11, 0.2)`,
              maxWidth: 340,
              opacity: hudRight,
              transform: `translateX(${(1 - hudRight) * 20}px)`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <QrCode size={16} color={THEME_V2_3.colors.goldBright} />
              <span style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_3.colors.goldBright, letterSpacing: '0.08em' }}>
                BIỂU MẪU ĐIỆN TỬ BỘ CÔNG AN
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
              Tự động xuất Phiếu in & Mã QR
            </div>
            <div style={{ fontSize: 12, color: THEME_V2_3.colors.textSecondary, marginTop: 4 }}>
              Tích hợp chữ ký số, cắt giảm 80% thời gian xử lý thủ tục giấy tờ
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2_3 text="Cổng Doanh nghiệp tối ưu hóa quy trình kê khai, quản lý sức chứa 58 kho và tự động xuất biểu mẫu phiếu in điện tử." />
    </AbsoluteFill>
  );
};
