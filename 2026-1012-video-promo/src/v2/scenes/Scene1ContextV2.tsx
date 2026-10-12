import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Building2, Flame, MapPin, Activity, ShieldAlert } from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { THEME_V2 } from '../styles/themeV2';

export const Scene1ContextV2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isSecondHalf = frame >= 360;

  const zoom1 = interpolate(frame, [0, 380], [1.0, 1.08], { extrapolateRight: 'clamp' });
  const zoom2 = interpolate(frame, [360, 750], [1.0, 1.08], { extrapolateRight: 'clamp' });

  const photo2Opacity = interpolate(frame, [350, 380], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cardSpring = spring({ frame: frame - 25, fps, config: { damping: 16, stiffness: 90 } });

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2.colors.bgLight, fontFamily: THEME_V2.fonts.main }}>
      {/* Background B-roll */}
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
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 55%, rgba(255, 255, 255, 0.4) 100%)',
          }}
        />
      </div>

      <HeaderNavV2 currentChapter={1} />

      {/* Main Content Card */}
      <div
        style={{
          position: 'absolute',
          top: 140,
          left: 80,
          width: 950,
          zIndex: 10,
        }}
      >
        {/* Refined Category Pill with Lucide SVG */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: 'rgba(5, 150, 105, 0.08)',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            padding: '8px 20px',
            borderRadius: 30,
            color: THEME_V2.colors.primaryDark,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: 20,
          }}
        >
          <MapPin size={16} color={THEME_V2.colors.primary} strokeWidth={2.4} />
          ĐỊA BÀN CHIẾN LƯỢC QUỐC GIA VỀ KHAI THÁC KHOÁNG SẢN
        </div>

        <h1
          style={{
            fontSize: 48,
            lineHeight: 1.25,
            fontWeight: 800,
            color: THEME_V2.colors.textPrimary,
            margin: '0 0 24px 0',
            letterSpacing: '-0.025em',
          }}
        >
          Đặc thù quản lý và sử dụng <br />
          <span style={{ color: THEME_V2.colors.primary }}>Vật liệu nổ công nghiệp</span> tại Quảng Ninh
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: THEME_V2.colors.textSecondary,
            margin: '0 0 32px 0',
            maxWidth: 820,
          }}
        >
          Khai thác than hầm lò, lộ thiên và thi công xây dựng quy mô lớn đòi hỏi sự phối hợp chặt chẽ giữa doanh nghiệp cung ứng, vận chuyển, sử dụng và cơ quan quản lý nhà nước.
        </p>

        {/* Metric Cards with Lucide SVGs & Animated Counters */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            opacity: cardSpring,
            transform: `translateY(${(1 - cardSpring) * 25}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '28px 36px',
              boxShadow: THEME_V2.shadows.card,
              border: '1px solid rgba(5, 150, 105, 0.2)',
              flex: 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: THEME_V2.colors.primaryUltraLight,
                  color: THEME_V2.colors.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={24} strokeWidth={2.2} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: THEME_V2.colors.primary, letterSpacing: '0.05em' }}>
                QUY MÔ TOÀN TỈNH
              </span>
            </div>
            <div style={{ fontSize: 64, fontWeight: 800, color: THEME_V2.colors.primary, lineHeight: 1 }}>
              <AnimatedCounter end={58} startFrame={15} durationFrames={40} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: THEME_V2.colors.textPrimary, marginTop: 8 }}>
              Kho chứa VLNCN đang hoạt động
            </div>
            <div style={{ fontSize: 14, color: THEME_V2.colors.textMuted, marginTop: 4 }}>
              Phân bố tại các mỏ than, kho dự trữ và cụm công nghiệp
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '28px 36px',
              boxShadow: THEME_V2.shadows.card,
              border: '1px solid rgba(180, 83, 9, 0.2)',
              flex: 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: THEME_V2.colors.accentGoldLight,
                  color: THEME_V2.colors.accentGold,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flame size={24} strokeWidth={2.2} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: THEME_V2.colors.accentGold, letterSpacing: '0.05em' }}>
                NGHIÊM NGẶT 24/7
              </span>
            </div>
            <div style={{ fontSize: 64, fontWeight: 800, color: THEME_V2.colors.accentGold, lineHeight: 1 }}>
              24/7
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: THEME_V2.colors.textPrimary, marginTop: 8 }}>
              Lưu chuyển thuốc nổ, kíp & dây mìn
            </div>
            <div style={{ fontSize: 14, color: THEME_V2.colors.textMuted, marginTop: 4 }}>
              Yêu cầu tuyệt đối về an ninh, an toàn trật tự xã hội
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2 text="Quảng Ninh là trung tâm công nghiệp khai khoáng lớn nhất cả nước, với 58 kho chứa vật liệu nổ công nghiệp đang hoạt động ngày đêm, đòi hỏi yêu cầu tuyệt đối về an ninh và an toàn." />
    </AbsoluteFill>
  );
};
