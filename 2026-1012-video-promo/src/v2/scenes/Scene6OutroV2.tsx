import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { ShieldCheck, Award, TrendingUp, Clock, Building2 } from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { THEME_V2 } from '../styles/themeV2';

export const Scene6OutroV2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isEnding = frame >= 220;

  const cardsSpring = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 90 } });
  const outroSpring = spring({ frame: frame - 235, fps, config: { damping: 14, stiffness: 85 } });

  const bgZoom = interpolate(frame, [0, 450], [1.0, 1.05], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        fontFamily: THEME_V2.fonts.main,
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
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(243, 248, 245, 0.92) 50%, rgba(235, 244, 240, 0.96) 100%)',
          }}
        />
      </div>

      <HeaderNavV2 currentChapter={6} />

      {/* Part 1 (First 7.5s): 3 Pillar Results */}
      {!isEnding && (
        <div
          style={{
            position: 'absolute',
            top: 140,
            left: 90,
            right: 90,
            opacity: cardsSpring,
            transform: `translateY(${(1 - cardsSpring) * 25}px)`,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(5, 150, 105, 0.08)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                padding: '6px 18px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
                color: THEME_V2.colors.primaryDark,
                marginBottom: 10,
              }}
            >
              <Award size={15} strokeWidth={2.4} />
              HIỆU QUẢ THIẾT THỰC CHO TOÀN BỘ HỆ SINH THÁI
            </div>
            <h1
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: THEME_V2.colors.textPrimary,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Chuyển đổi số toàn diện công tác quản lý VLNCN
            </h1>
          </div>

          <div style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
            {/* Lãnh đạo */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '32px 28px',
                boxShadow: THEME_V2.shadows.card,
                border: '1px solid rgba(5, 150, 105, 0.2)',
                borderTop: '5px solid #059669',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 380,
              }}
            >
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: THEME_V2.colors.primaryUltraLight, color: THEME_V2.colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <TrendingUp size={24} strokeWidth={2.2} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: THEME_V2.colors.textPrimary, marginBottom: 8 }}>
                  LÃNH ĐẠO CHỈ ĐẠO
                </div>
                <div style={{ fontSize: 14, color: THEME_V2.colors.textSecondary, lineHeight: 1.6 }}>
                  Nắm trọn bức tranh tồn kho toàn tỉnh thời gian thực; Cảnh báo sớm rủi ro vượt hạn mức; Ra quyết định điều hành kịp thời trên số liệu số.
                </div>
              </div>
              <div style={{ backgroundColor: '#ECFDF5', padding: '12px', borderRadius: 12, textAlign: 'center', fontWeight: 800, color: '#059669', fontSize: 18 }}>
                Chỉ đạo Real-time
              </div>
            </div>

            {/* Cán bộ PC06 */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '32px 28px',
                boxShadow: THEME_V2.shadows.card,
                border: '1px solid rgba(2, 132, 199, 0.2)',
                borderTop: '5px solid #0284C7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 380,
              }}
            >
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: THEME_V2.colors.accentBlueLight, color: THEME_V2.colors.accentBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Clock size={24} strokeWidth={2.2} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: THEME_V2.colors.textPrimary, marginBottom: 8 }}>
                  CÁN BỘ PC06
                </div>
                <div style={{ fontSize: 14, color: THEME_V2.colors.textSecondary, lineHeight: 1.6 }}>
                  Đối soát Bán/Mua tự động; Phê duyệt và cấp số điện tử tức thì; Truy vết trách nhiệm nhanh qua QR; Hậu kiểm lộ trình xe qua GPS.
                </div>
              </div>
              <div style={{ backgroundColor: '#E0F2FE', padding: '12px', borderRadius: 12, textAlign: 'center', fontWeight: 800, color: '#0284C7', fontSize: 18 }}>
                2 ngày → Vài phút
              </div>
            </div>

            {/* Doanh nghiệp */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '32px 28px',
                boxShadow: THEME_V2.shadows.card,
                border: '1px solid rgba(217, 119, 6, 0.2)',
                borderTop: '5px solid #D97706',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 380,
              }}
            >
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: THEME_V2.colors.accentGoldLight, color: THEME_V2.colors.accentGold, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Building2 size={24} strokeWidth={2.2} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: THEME_V2.colors.textPrimary, marginBottom: 8 }}>
                  DOANH NGHIỆP
                </div>
                <div style={{ fontSize: 14, color: THEME_V2.colors.textSecondary, lineHeight: 1.6 }}>
                  Minh bạch quy trình thủ tục; Giảm thời gian chờ đợi; Chủ động kế hoạch sản xuất kinh doanh; An tâm pháp lý khi chuyển đổi số.
                </div>
              </div>
              <div style={{ backgroundColor: '#FEF3C7', padding: '12px', borderRadius: 12, textAlign: 'center', fontWeight: 800, color: '#D97706', fontSize: 18 }}>
                100% Số hóa thủ tục
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Part 2 (Second 7.5s): Police Emblem & Slogan Outro */}
      {isEnding && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            opacity: outroSpring,
            transform: `scale(${outroSpring})`,
          }}
        >
          {/* Executive Shield Emblem */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 30,
              backgroundColor: '#FFFFFF',
              boxShadow: THEME_V2.shadows.float,
              border: '2px solid rgba(5, 150, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: THEME_V2.colors.primary,
              marginBottom: 24,
            }}
          >
            <ShieldCheck size={64} strokeWidth={2.2} />
          </div>

          <div style={{ textAlign: 'center', maxWidth: 1100 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: THEME_V2.colors.primary,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              BỘ CÔNG AN — CÔNG AN TỈNH QUẢNG NINH
            </div>

            <h1
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: THEME_V2.colors.textPrimary,
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              PHÒNG CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI (PC06)
            </h1>

            <div
              style={{
                width: 100,
                height: 4,
                backgroundColor: THEME_V2.colors.primary,
                margin: '0 auto 24px auto',
                borderRadius: 2,
              }}
            />

            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: THEME_V2.colors.textSecondary,
                fontStyle: 'italic',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '16px 44px',
                borderRadius: 40,
                border: '1px solid rgba(5, 150, 105, 0.25)',
                boxShadow: THEME_V2.shadows.soft,
                display: 'inline-block',
              }}
            >
              "Đổi mới phương thức quản lý — Vì an ninh Tổ quốc, vì sự phát triển bền vững của doanh nghiệp"
            </div>
          </div>
        </div>
      )}

      <SubtitleBarV2 text="Công an tỉnh Quảng Ninh: Đồng hành cùng doanh nghiệp, tiên phong chuyển đổi số, giữ vững an ninh, trật tự và an toàn xã hội trên địa bàn vùng mỏ anh hùng." />
    </AbsoluteFill>
  );
};
