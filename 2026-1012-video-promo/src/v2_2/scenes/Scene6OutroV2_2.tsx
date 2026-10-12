import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Award, TrendingUp, Clock, Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene6OutroV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isEnding = frame >= 280;

  const cardsSpring = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 90 } });
  const outroSpring = spring({ frame: frame - 280, fps, config: { damping: 14, stiffness: 85 } });

  const bgZoom = interpolate(frame, [0, 660], [1.0, 1.06], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      {/* Background B-roll with clean white wash */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Img
          src={staticFile('broll/03_vlncn_depot.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${bgZoom})`,
            filter: 'blur(3px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.93) 50%, rgba(241, 245, 249, 0.97) 100%)',
          }}
        />
      </div>

      <HeaderNavV2_2 currentChapter={6} />

      {/* Part 1 (0 to 9.3s): 3 Pillar Results in Governance Transformation */}
      {!isEnding && (
        <div
          style={{
            position: 'absolute',
            top: 110,
            left: 60,
            right: 60,
            bottom: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 10,
            opacity: cardsSpring,
            transform: `translateY(${(1 - cardsSpring) * 20}px)`,
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 36px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(226, 232, 240, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: 'rgba(185, 28, 28, 0.08)',
                  border: '1px solid rgba(185, 28, 28, 0.25)',
                  padding: '6px 18px',
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 800,
                  color: THEME_V2_2.colors.primary,
                  marginBottom: 8,
                }}
              >
                <Sparkles size={15} strokeWidth={2.4} />
                ĐỘT PHÁ CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                HIỆU QUẢ TOÀN DIỆN CHO CƠ QUAN QUẢN LÝ VÀ DOANH NGHIỆP
              </div>
            </div>

            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #D97706',
                boxShadow: '0 4px 14px rgba(185, 28, 28, 0.25)',
              }}
            >
              <Img
                src={staticFile('logo-bo-cong-an.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* 3 Large Result Cards covering full height */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, marginTop: 18 }}>
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 22,
                padding: '36px 32px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1px solid rgba(185, 28, 28, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: THEME_V2_2.colors.primary }} />
              <div>
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
                    marginBottom: 16,
                  }}
                >
                  <TrendingUp size={28} strokeWidth={2.4} />
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                  ĐỐI VỚI LÃNH ĐẠO
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: THEME_V2_2.colors.primary, marginTop: 6 }}>
                  Chỉ đạo trên Dữ liệu số thời gian thực
                </div>
              </div>
              <div style={{ fontSize: 15, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.6, marginTop: 14 }}>
                Bức tranh trực quan toàn tỉnh, cảnh báo sớm nguy cơ mất an toàn, hỗ trợ ra quyết định điều hành chính xác và kịp thời.
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 22,
                padding: '36px 32px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1px solid rgba(2, 132, 199, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: '#0284C7' }} />
              <div>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: 'rgba(2, 132, 199, 0.08)',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Clock size={28} strokeWidth={2.4} />
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                  ĐỐI VỚI CÁN BỘ PC06
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#0284C7', marginTop: 6 }}>
                  Rút ngắn từ 2 ngày xuống vài phút
                </div>
              </div>
              <div style={{ fontSize: 15, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.6, marginTop: 14 }}>
                Tự động hóa đối soát bên bán – bên mua, phê duyệt điện tử thay thế giấy tờ, hậu kiểm lộ trình vận chuyển GPS minh bạch.
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 22,
                padding: '36px 32px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1px solid rgba(217, 119, 6, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: THEME_V2_2.colors.accentGold }} />
              <div>
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
                    marginBottom: 16,
                  }}
                >
                  <Building2 size={28} strokeWidth={2.4} />
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                  ĐỐI VỚI DOANH NGHIỆP
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: THEME_V2_2.colors.accentGold, marginTop: 6 }}>
                  Giảm tối đa chi phí & thời gian
                </div>
              </div>
              <div style={{ fontSize: 15, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.6, marginTop: 14 }}>
                Minh bạch hóa hồ sơ cấp phép, quản lý kho an toàn, vận hành thông suốt ngay cả tại vùng cửa lò hầm sâu mất sóng.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Part 2 (9.3s to 22.0s): Grand Outro Screen with New Governance Slogan */}
      {isEnding && (
        <div
          style={{
            position: 'absolute',
            top: 110,
            left: 60,
            right: 60,
            bottom: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            opacity: outroSpring,
            transform: `scale(${interpolate(outroSpring, [0, 1], [0.94, 1])})`,
          }}
        >
          {/* Main Card with Official Logo and New Slogan */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 30,
              padding: '50px 70px',
              boxShadow: THEME_V2_2.shadows.elevated,
              border: '2px solid rgba(185, 28, 28, 0.25)',
              textAlign: 'center',
              maxWidth: 1300,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Official Police Emblem Logo */}
            <div
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #D97706',
                boxShadow: '0 10px 35px rgba(185, 28, 28, 0.35)',
                marginBottom: 26,
                backgroundColor: '#FFFFFF',
              }}
            >
              <Img
                src={staticFile('logo-bo-cong-an.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: THEME_V2_2.colors.primary,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              CÔNG AN TỈNH QUẢNG NINH
            </div>

            <h1
              style={{
                fontSize: 42,
                fontWeight: 900,
                color: THEME_V2_2.colors.headerNavy,
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              PHÒNG CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI (PC06)
            </h1>

            <div
              style={{
                width: 120,
                height: 4,
                backgroundColor: THEME_V2_2.colors.primary,
                margin: '0 auto 26px auto',
                borderRadius: 2,
              }}
            />

            {/* NEW GOVERNANCE DIGITAL TRANSFORMATION SLOGAN (Yêu cầu 5) */}
            <div
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: THEME_V2_2.colors.headerNavy,
                backgroundColor: 'rgba(248, 250, 252, 0.95)',
                padding: '20px 48px',
                borderRadius: 40,
                border: '2px solid rgba(185, 28, 28, 0.3)',
                boxShadow: THEME_V2_2.shadows.card,
                display: 'inline-block',
                lineHeight: 1.4,
              }}
            >
              "TIÊN PHONG CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ — KIẾN TẠO MÔI TRƯỜNG MINH BẠCH, HIỆU QUẢ VÌ SỰ PHÁT TRIỂN BỀN VỮNG"
            </div>
          </div>
        </div>
      )}

      <SubtitleBarV2_2
        text={
          frame < 280
            ? 'Hệ thống tạo bước đột phá trong chuyển đổi số công tác quản trị: Giúp Lãnh đạo chỉ đạo điều hành trên dữ liệu số thời gian thực, tối ưu hóa quy trình nghiệp vụ, minh bạch hóa thủ tục.'
            : 'Công an tỉnh Quảng Ninh: Tiên phong chuyển đổi số công tác quản trị, kiến tạo môi trường minh bạch, hiện đại và phát triển bền vững.'
        }
      />
    </AbsoluteFill>
  );
};
