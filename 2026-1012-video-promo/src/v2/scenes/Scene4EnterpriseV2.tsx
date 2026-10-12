import React from 'react';
import { AbsoluteFill, staticFile, useCurrentFrame } from 'remotion';
import { Building2, FileCheck, WifiOff, QrCode } from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { DeviceFrameV2 } from '../components/DeviceFrameV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { THEME_V2 } from '../styles/themeV2';

export const Scene4EnterpriseV2: React.FC = () => {
  const frame = useCurrentFrame();

  const isSecondHalf = frame >= 600;

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2.colors.bgGradient,
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <HeaderNavV2 currentChapter={4} />

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
              backgroundColor: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              color: THEME_V2.colors.accentBlue,
              marginBottom: 6,
            }}
          >
            <Building2 size={15} strokeWidth={2.4} />
            CỔNG DOANH NGHIỆP: QUẢN LÝ KHO & NGHIỆP VỤ CA NỔ
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
            {!isSecondHalf
              ? 'Số hóa toàn trình quản lý kho & tỷ lệ sức chứa thiết kế'
              : 'Quy trình ca nổ mìn & Giải pháp ngoại tuyến (Offline) tại cửa lò'}
          </div>
        </div>

        {/* Feature Badges */}
        <div style={{ display: 'flex', gap: 12 }}>
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              backgroundColor: !isSecondHalf ? THEME_V2.colors.accentBlue : '#FFFFFF',
              color: !isSecondHalf ? '#FFFFFF' : THEME_V2.colors.textMuted,
              boxShadow: THEME_V2.shadows.soft,
              border: '1px solid rgba(2, 132, 199, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <FileCheck size={15} /> Sổ tồn & Sức chứa
          </div>
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              backgroundColor: isSecondHalf ? THEME_V2.colors.accentBlue : '#FFFFFF',
              color: isSecondHalf ? '#FFFFFF' : THEME_V2.colors.textMuted,
              boxShadow: THEME_V2.shadows.soft,
              border: '1px solid rgba(2, 132, 199, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <WifiOff size={15} /> Hỗ trợ Offline cửa lò
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
            key="kho_ton"
            imageSrc={staticFile('screenshots/04_quan_ly_kho_ton.png')}
            title="Cổng Doanh nghiệp — Quản lý Danh sách Kho & Tỷ lệ Tồn kho"
            cursorAction={{
              startX: 200,
              startY: 250,
              targetX: 620,
              targetY: 340,
              moveStartFrame: 60,
              clickFrame: 150,
            }}
          />
        ) : (
          <DeviceFrameV2
            key="phieu_xuat_nhap"
            imageSrc={staticFile('screenshots/03_phieu_nhap_xuat_kho.png')}
            title="Cổng Doanh nghiệp — Phiếu Nhập/Xuất & QR Code nghiệp vụ ca nổ"
            cursorAction={{
              startX: 800,
              startY: 200,
              targetX: 1150,
              targetY: 280,
              moveStartFrame: 660,
              clickFrame: 750,
            }}
          />
        )}
      </div>

      <SubtitleBarV2
        text={
          frame < 600
            ? 'Tại Cổng Doanh nghiệp, mọi thao tác được số hóa toàn trình: Đơn vị lập đăng ký tiếp nhận, đề nghị xuất kho gửi trực tuyến; Phiếu xuất nhập tự động cập nhật sổ tồn theo tỷ lệ sức chứa.'
            : 'Đặc biệt, cơ chế in phiếu kèm mã QR thông minh cho phép ghi nhận an toàn tại cửa lò mất sóng và tự động đồng bộ ngay khi kết nối lại mạng.'
        }
      />
    </AbsoluteFill>
  );
};
