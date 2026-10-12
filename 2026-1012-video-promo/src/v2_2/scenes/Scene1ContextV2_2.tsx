import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Building2, Flame, MapPin, ShieldAlert, Award } from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene1ContextV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom1 = interpolate(frame, [0, 380], [1.0, 1.07], { extrapolateRight: 'clamp' });
  const zoom2 = interpolate(frame, [360, 720], [1.0, 1.07], { extrapolateRight: 'clamp' });

  const photo2Opacity = interpolate(frame, [350, 380], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cardSpring = spring({ frame: frame - 15, fps, config: { damping: 16, stiffness: 90 } });

  // Counter 0 to 58
  const counterVal = Math.min(58, Math.floor(interpolate(frame, [30, 95], [0, 58], { extrapolateRight: 'clamp' })));

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_2.colors.bgLight, fontFamily: THEME_V2_2.fonts.main }}>
      {/* Background B-roll with clean light wash */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Img
          src={staticFile('broll/01_quang_ninh_bay.jpg')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom1})` }}
        />
        <div style={{ position: 'absolute', inset: 0, opacity: photo2Opacity }}>
          <Img
            src={staticFile('broll/02_coal_mine_qn.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom2})` }}
          />
        </div>
        {/* Elegant clean light wash overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 55%, rgba(255, 255, 255, 0.5) 100%)',
          }}
        />
      </div>

      <HeaderNavV2_2 currentChapter={1} />

      {/* Main Content Area - Well distributed vertically from top: 120 to bottom: 110 */}
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: 60,
          right: 60,
          bottom: 110,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 28,
          zIndex: 10,
          opacity: cardSpring,
          transform: `translateY(${(1 - cardSpring) * 20}px)`,
        }}
      >
        {/* Top Header Badge Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: '36px 44px',
            boxShadow: THEME_V2_2.shadows.card,
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: 1150 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(185, 28, 28, 0.08)',
                border: '1px solid rgba(185, 28, 28, 0.25)',
                padding: '7px 20px',
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                color: THEME_V2_2.colors.primary,
                marginBottom: 14,
              }}
            >
              <MapPin size={16} strokeWidth={2.4} />
              ĐỊA BÀN TRỌNG ĐIỂM CÔNG NGHIỆP KHAI KHOÁNG & KINH TẾ BIỂN
            </div>
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: THEME_V2_2.colors.textPrimary,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
              }}
            >
              BỐI CẢNH QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP TẠI QUẢNG NINH
            </div>
            <div
              style={{
                fontSize: 18,
                color: THEME_V2_2.colors.textSecondary,
                lineHeight: 1.5,
                marginTop: 10,
              }}
            >
              Quy tụ hàng chục mỏ than hầm lò, lộ thiên và dự án hạ tầng trọng điểm — Lưu chuyển khối lượng thuốc nổ, kíp nổ lớn nhất cả nước.
            </div>
          </div>

          {/* Official Logo Spotlight */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(185, 28, 28, 0.3)',
              border: '4px solid #D97706',
              backgroundColor: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <Img
              src={staticFile('logo-bo-cong-an.jpg')}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 2 Massive Metric Cards filling the bottom space evenly */}
        <div style={{ display: 'flex', gap: 28, flex: 1, maxHeight: 330 }}>
          {/* Metric 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: '36px 44px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(185, 28, 28, 0.2)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 6,
                height: '100%',
                backgroundColor: THEME_V2_2.colors.primary,
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: 'rgba(185, 28, 28, 0.08)',
                  color: THEME_V2_2.colors.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={28} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_2.colors.primary, letterSpacing: '0.06em' }}>
                ĐỊA BÀN TOÀN TỈNH
              </span>
            </div>
            <div style={{ fontSize: 78, fontWeight: 900, color: THEME_V2_2.colors.primary, lineHeight: 1 }}>
              {counterVal}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: THEME_V2_2.colors.textPrimary, marginTop: 10 }}>
              Kho chứa VLNCN đang hoạt động
            </div>
            <div style={{ fontSize: 16, color: THEME_V2_2.colors.textMuted, marginTop: 6 }}>
              Phân bố tại các doanh nghiệp ngành than, hóa chất mỏ và công trình trọng điểm
            </div>
          </div>

          {/* Metric 2 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: '36px 44px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(217, 119, 6, 0.25)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 6,
                height: '100%',
                backgroundColor: THEME_V2_2.colors.accentGold,
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: THEME_V2_2.colors.accentGoldLight,
                  color: THEME_V2_2.colors.accentGold,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flame size={28} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_2.colors.accentGold, letterSpacing: '0.06em' }}>
                GIÁM SÁT NGHIÊM NGẶT
              </span>
            </div>
            <div style={{ fontSize: 78, fontWeight: 900, color: THEME_V2_2.colors.accentGold, lineHeight: 1 }}>
              24/7
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: THEME_V2_2.colors.textPrimary, marginTop: 10 }}>
              Lưu chuyển thuốc nổ, kíp & dây mìn
            </div>
            <div style={{ fontSize: 16, color: THEME_V2_2.colors.textMuted, marginTop: 6 }}>
              Đòi hỏi công tác quản lý an toàn tuyệt đối và giám sát thời gian thực
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2_2 text="Quảng Ninh là trung tâm công nghiệp khai khoáng lớn nhất cả nước, với 58 kho chứa vật liệu nổ công nghiệp đang hoạt động ngày đêm, đòi hỏi yêu cầu tuyệt đối về an ninh và an toàn." />
    </AbsoluteFill>
  );
};
