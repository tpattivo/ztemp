import React from 'react';
import { AbsoluteFill, staticFile, useCurrentFrame } from 'remotion';
import { ShieldCheck, GitMerge, QrCode, Navigation } from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { DeviceFrameV2 } from '../components/DeviceFrameV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { THEME_V2 } from '../styles/themeV2';

export const Scene5PoliceFeaturesV2: React.FC = () => {
  const frame = useCurrentFrame();

  const isSecondHalf = frame >= 600;

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2.colors.bgGradient,
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <HeaderNavV2 currentChapter={5} />

      {/* Main Title Badge */}
      <div
        style={{
          position: 'absolute',
          top: 95,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 80,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(5, 150, 105, 0.08)',
              border: '1px solid rgba(5, 150, 105, 0.25)',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              color: THEME_V2.colors.primaryDark,
              marginBottom: 6,
            }}
          >
            <ShieldCheck size={15} strokeWidth={2.4} />
            CỔNG CÔNG AN (PC06): GIÁM SÁT TOÀN DIỆN & PHÊ DUYỆT ĐIỆN TỬ
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
            {!isSecondHalf
              ? 'Cặp liên thông Bán – Mua: Tự động đối chiếu & Phê duyệt cấp số điện tử'
              : 'Hậu kiểm hành trình GPS & Truy vết vòng đời bất biến qua mã QR'}
          </div>
        </div>

        {/* Action Feature Pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              backgroundColor: !isSecondHalf ? THEME_V2.colors.primaryDark : '#FFFFFF',
              color: !isSecondHalf ? '#FFFFFF' : THEME_V2.colors.textMuted,
              boxShadow: THEME_V2.shadows.soft,
              border: '1px solid rgba(5, 150, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <GitMerge size={15} /> Cặp liên thông 2 chiều
          </div>
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              backgroundColor: isSecondHalf ? THEME_V2.colors.primaryDark : '#FFFFFF',
              color: isSecondHalf ? '#FFFFFF' : THEME_V2.colors.textMuted,
              boxShadow: THEME_V2.shadows.soft,
              border: '1px solid rgba(5, 150, 105, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Navigation size={15} /> Giám sát GPS & QR
          </div>
        </div>
      </div>

      {/* Screen Mockup Container with simulated cursor */}
      <div
        style={{
          position: 'absolute',
          top: 155,
          left: 0,
          right: 0,
          bottom: 110,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!isSecondHalf ? (
          <DeviceFrameV2
            key="lien_thong"
            imageSrc={staticFile('screenshots/02_dang_ky_yeu_cau_lien_thong.png')}
            title="Cổng Công an PC06 — Phê duyệt Cặp liên thông Bán / Mua trực tuyến"
            cursorAction={{
              startX: 500,
              startY: 320,
              targetX: 1220,
              targetY: 440,
              moveStartFrame: 70,
              clickFrame: 160,
            }}
          />
        ) : (
          <DeviceFrameV2
            key="giam_sat_gps"
            imageSrc={staticFile('screenshots/07_giam_sat_gps.png')}
            title="Cổng Công an PC06 — Bản đồ số Hậu kiểm Hành trình Vận chuyển GPS"
            cursorAction={{
              startX: 300,
              startY: 350,
              targetX: 850,
              targetY: 480,
              moveStartFrame: 670,
              clickFrame: 760,
            }}
          />
        )}
      </div>

      <SubtitleBarV2
        text={
          frame < 600
            ? 'Cổng Công an PC06 giữ vai trò trung tâm giám sát thông minh: Dashboard cảnh báo sớm kho vượt hạn mức; Cặp liên thông tự động đối chiếu hai chiều bên bán và bên mua, cấp số điện tử tức thì.'
            : 'Vòng đời vật liệu nổ được định danh bất biến qua mã QR; Hành trình xe vận chuyển được hậu kiểm minh bạch qua bản đồ GPS thời gian thực.'
        }
      />
    </AbsoluteFill>
  );
};
