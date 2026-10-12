import React from 'react';
import { AbsoluteFill, staticFile, useCurrentFrame } from 'remotion';
import { DeviceFrame } from '../components/DeviceFrame';
import { HeaderBadge } from '../components/HeaderBadge';
import { SubtitleBar } from '../components/SubtitleBar';
import { THEME } from '../styles/theme';

export const Scene3Features: React.FC = () => {
  const frame = useCurrentFrame();

  // 4 feature phases (300 frames each = 10s each, total 1200 frames = 40s)
  const phase = Math.floor(frame / 300);

  const features = [
    {
      title: 'TỔNG QUAN GIÁM SÁT TOÀN THÀNH PHỐ (REAL-TIME)',
      subtitle: 'Dashboard chỉ số thời gian thực · Cảnh báo sớm kho đầy (≥80%) & giấy phép',
      image: staticFile('screenshots/01_dashboard_tong_quan.png'),
      frameTitle: 'Cổng Công an PC06 — Màn hình Giám sát Tổng quan',
      badge: 'TÍNH NĂNG 01',
      subtitleText:
        'Cổng Công an PC06 giám sát tập trung toàn bộ kho và lưu chuyển VLNCN thời gian thực, tự động cảnh báo kho vượt ngưỡng.',
    },
    {
      title: 'CẶP LIÊN THÔNG BÁN – MUA TỰ ĐỘNG',
      subtitle: 'Ghép đơn 2 chiều giữa bên bán & bên mua · Cấp chung 1 mã định danh liên thông',
      image: staticFile('screenshots/02_dang_ky_yeu_cau_lien_thong.png'),
      frameTitle: 'Cổng Công an PC06 — Xử lý Cặp liên thông Bán/Mua',
      badge: 'TÍNH NĂNG 02',
      subtitleText:
        'Điểm nghẽn được giải quyết triệt để: Cặp liên thông tự động đối chiếu hai chiều giữa bên bán và bên mua, xóa bỏ sai lệch thủ công.',
    },
    {
      title: 'PHÊ DUYỆT SỐ ĐIỆN TỬ & MÃ QR VÒNG ĐỜI',
      subtitle: 'Duyệt & cấp số ngay trên hệ thống · Quét QR tra cứu toàn bộ timeline trách nhiệm',
      image: staticFile('screenshots/03_phieu_nhap_xuat_kho.png'),
      frameTitle: 'Cổng Quản lý Phiếu Nhập – Xuất & Mã định danh QR',
      badge: 'TÍNH NĂNG 03',
      subtitleText:
        'Quy trình phê duyệt và cấp số điện tử thay thế hoàn toàn văn thư giấy tờ; Vòng đời vật liệu nổ được định danh bất biến qua mã QR.',
    },
    {
      title: 'HẬU KIỂM GPS LỘ TRÌNH & HỖ TRỢ OFFLINE CỬA LÒ',
      subtitle: 'Đối chiếu hành trình xe vận chuyển · Hỗ trợ in phiếu QR tại hầm lò mất sóng',
      image: staticFile('screenshots/07_giam_sat_gps.png'),
      frameTitle: 'Giám sát Hành trình GPS & Nghiệp vụ Ngoại tuyến',
      badge: 'TÍNH NĂNG 04',
      subtitleText:
        'Hành trình vận chuyển được hậu kiểm minh bạch qua GPS; Cơ chế phiếu QR thông minh bảo đảm nghiệp vụ thông suốt ngay tại vùng cấm sóng.',
    },
  ];

  const current = features[Math.min(phase, 3)];

  return (
    <AbsoluteFill
      style={{
        background: THEME.colors.bgGradient,
        fontFamily: THEME.fonts.main,
      }}
    >
      <HeaderBadge
        title={current.title}
        subtitle={current.subtitle}
        badge={current.badge}
      />

      {/* Device mockup container */}
      <div
        style={{
          position: 'absolute',
          top: 105,
          left: 0,
          right: 0,
          bottom: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DeviceFrame
          key={phase}
          imageSrc={current.image}
          title={current.frameTitle}
          zoom={true}
        />
      </div>

      {/* Floating feature pills in bottom corners */}
      <div
        style={{
          position: 'absolute',
          bottom: 155,
          right: 80,
          display: 'flex',
          gap: 12,
          zIndex: 60,
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              backgroundColor: i === phase ? THEME.colors.primary : '#FFFFFF',
              color: i === phase ? '#FFFFFF' : THEME.colors.textMuted,
              boxShadow: THEME.shadows.soft,
              border: `1px solid ${i === phase ? THEME.colors.primary : '#E2E8F0'}`,
              transition: 'all 0.3s ease',
            }}
          >
            {f.badge}
          </div>
        ))}
      </div>

      <SubtitleBar text={current.subtitleText} />
    </AbsoluteFill>
  );
};
