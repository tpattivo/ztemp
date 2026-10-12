import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { SubtitleBar } from '../components/SubtitleBar';
import { THEME } from '../styles/theme';

export const Scene5Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const emblemSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 85 } });
  const textSpring = spring({ frame: frame - 30, fps, config: { damping: 15, stiffness: 90 } });

  const bgZoom = interpolate(frame, [0, 450], [1.0, 1.05], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', fontFamily: THEME.fonts.main }}>
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
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(240, 253, 244, 0.92) 50%, rgba(236, 253, 245, 0.95) 100%)',
          }}
        />
      </div>

      {/* Center Outro Card */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        {/* Police Shield Star Emblem */}
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(5, 150, 105, 0.35)',
            border: '4px solid #34D399',
            color: '#FFFFFF',
            fontSize: 60,
            fontWeight: 900,
            marginBottom: 28,
            transform: `scale(${emblemSpring})`,
            opacity: emblemSpring,
          }}
        >
          ★
        </div>

        <div
          style={{
            textAlign: 'center',
            transform: `translateY(${(1 - textSpring) * 25}px)`,
            opacity: textSpring,
            maxWidth: 1100,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: THEME.colors.primary,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            BỘ CÔNG AN — CÔNG AN TỈNH QUẢNG NINH
          </div>

          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: THEME.colors.textDark,
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
              backgroundColor: THEME.colors.primary,
              margin: '0 auto 24px auto',
              borderRadius: 2,
            }}
          />

          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: THEME.colors.textSecondary,
              fontStyle: 'italic',
              lineHeight: 1.4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '16px 40px',
              borderRadius: 30,
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'inline-block',
            }}
          >
            "Đổi mới phương thức quản lý — Vì an ninh Tổ quốc, vì sự phát triển bền vững của doanh nghiệp"
          </div>
        </div>
      </div>

      <SubtitleBar
        text="Công an tỉnh Quảng Ninh: Đồng hành cùng doanh nghiệp, tiên phong chuyển đổi số, giữ vững an ninh, trật tự và an toàn xã hội trên địa bàn vùng mỏ anh hùng."
      />
    </AbsoluteFill>
  );
};
