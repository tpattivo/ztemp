import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { MapPin, ShieldCheck, Flame, Award, Radio, Compass, Layers } from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene1ContextV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cinematic slow camera drifts
  const zoom1 = interpolate(frame, [0, 380], [1.0, 1.08], { extrapolateRight: 'clamp' });
  const zoom2 = interpolate(frame, [360, 720], [1.0, 1.08], { extrapolateRight: 'clamp' });

  const photo2Opacity = interpolate(frame, [350, 390], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Spring physics for left & right sections
  const leftSpring = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 85 } });
  const rightSpring = spring({ frame: frame - 25, fps, config: { damping: 15, stiffness: 85 } });

  // Counter 0 to 58 with slight ease
  const counterVal = Math.min(58, Math.floor(interpolate(frame, [30, 100], [0, 58], { extrapolateRight: 'clamp' })));

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      {/* Background Cinematic B-roll with Dark Tactical Wash */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Img
          src={staticFile('broll/01_quang_ninh_bay.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${zoom1})`,
            filter: 'brightness(0.38) contrast(1.15) saturate(1.1)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, opacity: photo2Opacity }}>
          <Img
            src={staticFile('broll/02_coal_mine_qn.jpg')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${zoom2})`,
              filter: 'brightness(0.38) contrast(1.15) saturate(1.1)',
            }}
          />
        </div>

        {/* Ambient Dark Mesh and Radial Lighting */}
        <BackgroundMeshV2_3 accentColor="#B91C1C" />
      </div>

      <HeaderNavV2_3 currentChapter={1} />

      {/* Main Content Area - Asymmetric Grid Layout */}
      <div
        style={{
          position: 'absolute',
          top: 110,
          left: 48,
          right: 48,
          bottom: 96,
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 32,
          zIndex: 10,
          alignItems: 'center',
        }}
      >
        {/* Left Hero Card */}
        <div
          style={{
            backgroundColor: THEME_V2_3.colors.surfaceGlass,
            backdropFilter: 'blur(24px)',
            borderRadius: 24,
            padding: '44px 48px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: `${THEME_V2_3.shadows.elevated}, inset 0 1px 0 0 rgba(255, 255, 255, 0.18)`,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            opacity: leftSpring,
            transform: `translateY(${(1 - leftSpring) * 30}px)`,
          }}
        >
          {/* Eyebrow Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(220, 38, 38, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              padding: '8px 18px',
              borderRadius: 30,
              alignSelf: 'flex-start',
            }}
          >
            <MapPin size={15} color={THEME_V2_3.colors.primaryBright} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: THEME_V2_3.colors.primaryBright,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ĐỊA BÀN TRỌNG ĐIỂM CÔNG NGHIỆP KHAI KHOÁNG
            </span>
          </div>

          {/* Monumental Headline */}
          <div
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: THEME_V2_3.colors.textWhite,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
            }}
          >
            TRUNG TÂM NĂNG LƯỢNG & KHAI THÁC THAN CHIẾN LƯỢC QUỐC GIA
          </div>

          <div
            style={{
              fontSize: 17,
              fontWeight: 400,
              color: THEME_V2_3.colors.textSecondary,
              lineHeight: 1.6,
            }}
          >
            Quảng Ninh sở hữu trữ lượng khoáng sản lớn nhất cả nước với hệ thống mỏ than hầm lò sâu, khai thác lộ thiên và chuỗi cảng xuất nhập khẩu dày đặc. Việc quản lý an toàn tuyệt đối vật liệu nổ công nghiệp là tiền đề sống còn cho phát triển kinh tế bền vững.
          </div>

          {/* 3 Pillar Feature Pills */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 10 }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                borderRadius: 16,
              }}
            >
              <Flame size={20} color={THEME_V2_3.colors.primaryBright} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
                Đặc thù phức tạp
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_3.colors.textMuted, marginTop: 4 }}>
                Hầm lò sâu dưới mực nước biển
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                borderRadius: 16,
              }}
            >
              <Compass size={20} color={THEME_V2_3.colors.cyanBright} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
                Địa bàn rộng lớn
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_3.colors.textMuted, marginTop: 4 }}>
                Trải dài từ Đông Triều đến Móng Cái
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                borderRadius: 16,
              }}
            >
              <ShieldCheck size={20} color={THEME_V2_3.colors.goldBright} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: THEME_V2_3.colors.textWhite }}>
                An ninh tuyệt đối
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_3.colors.textMuted, marginTop: 4 }}>
                Giám sát thống nhất toàn diện
              </div>
            </div>
          </div>
        </div>

        {/* Right Metric Monoliths */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            opacity: rightSpring,
            transform: `translateY(${(1 - rightSpring) * 30}px)`,
          }}
        >
          {/* Main Monolith: 58 Kho chứa */}
          <div
            style={{
              position: 'relative',
              backgroundColor: 'rgba(15, 27, 50, 0.85)',
              backdropFilter: 'blur(24px)',
              borderRadius: 24,
              padding: '36px 40px',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              boxShadow: `${THEME_V2_3.shadows.elevated}, 0 0 30px rgba(245, 158, 11, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`,
              overflow: 'hidden',
            }}
          >
            {/* Ambient Radial Behind Number */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
              <div
                style={{
                  fontSize: 88,
                  fontWeight: 900,
                  color: THEME_V2_3.colors.goldBright,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  textShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
                }}
              >
                {counterVal}
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                  KHO CHỨA VLNCN
                </div>
                <div style={{ fontSize: 13, color: THEME_V2_3.colors.goldChampagne, fontWeight: 600 }}>
                  HOẠT ĐỘNG THƯỜNG TRỰC TRÊN TOÀN TỈNH
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                paddingTop: 18,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 13,
                color: THEME_V2_3.colors.textSecondary,
              }}
            >
              <span>Kho mỏ than: <strong>46 kho</strong></span>
              <span>Kho dự trữ & dịch vụ: <strong>12 kho</strong></span>
            </div>
          </div>

          {/* Secondary Metric Monolith: Lưu lượng hàng chục ngàn tấn */}
          <div
            style={{
              backgroundColor: THEME_V2_3.colors.surfaceGlass,
              backdropFilter: 'blur(24px)',
              borderRadius: 20,
              padding: '24px 32px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: THEME_V2_3.shadows.card,
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Layers size={26} color={THEME_V2_3.colors.primaryBright} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                HÀNG CHỤC NGÀN TẤN / NĂM
              </div>
              <div style={{ fontSize: 13, color: THEME_V2_3.colors.textMuted, marginTop: 2 }}>
                Lưu lượng thuốc nổ, kíp nổ vận chuyển và tiêu thụ liên tục trong chuỗi sản xuất
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2_3 text="Quảng Ninh là trung tâm công nghiệp khai khoáng trọng điểm với 58 kho chứa vật liệu nổ công nghiệp hoạt động thường trực." />
    </AbsoluteFill>
  );
};
