import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderBadge } from '../components/HeaderBadge';
import { SubtitleBar } from '../components/SubtitleBar';
import { THEME } from '../styles/theme';

export const Scene2Architecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 90 } });
  const dbSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 80 } });
  const portalsSpring = spring({ frame: frame - 80, fps, config: { damping: 14, stiffness: 85 } });

  // Pulsing connection lines
  const pulse = Math.sin(frame / 6) * 0.3 + 0.7;

  return (
    <AbsoluteFill
      style={{
        background: THEME.colors.bgGradient,
        fontFamily: THEME.fonts.main,
      }}
    >
      <HeaderBadge
        title="GIẢI PHÁP ĐỘT PHÁ · KIẾN TRÚC 3 CỔNG LIÊN THÔNG"
        subtitle="CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06"
        badge="1 CƠ SỞ DỮ LIỆU DÙNG CHUNG"
      />

      {/* Top Title & Policy Badges */}
      <div
        style={{
          position: 'absolute',
          top: 130,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: titleSpring,
          transform: `translateY(${(1 - titleSpring) * 20}px)`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 14 }}>
          <span
            style={{
              backgroundColor: '#FEF3C7',
              color: '#B45309',
              fontSize: 14,
              fontWeight: 800,
              padding: '6px 18px',
              borderRadius: 20,
              border: '1px solid #FDE68A',
            }}
          >
            NGHỊ QUYẾT 57-NQ/TW
          </span>
          <span
            style={{
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              fontSize: 14,
              fontWeight: 800,
              padding: '6px 18px',
              borderRadius: 20,
              border: '1px solid #BBF7D0',
            }}
          >
            ĐỀ ÁN 06 CHÍNH PHỦ
          </span>
          <span
            style={{
              backgroundColor: '#E0E7FF',
              color: '#4338CA',
              fontSize: 14,
              fontWeight: 800,
              padding: '6px 18px',
              borderRadius: 20,
              border: '1px solid #C7D2FE',
            }}
          >
            THÔNG TƯ 77 & 02/2026/TT-BCA
          </span>
        </div>

        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: THEME.colors.textDark,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Hệ thống Quản lý Vật liệu nổ công nghiệp tập trung
        </h1>
        <p
          style={{
            fontSize: 18,
            color: THEME.colors.textSecondary,
            margin: '8px 0 0 0',
          }}
        >
          Chuyển từ "Chờ báo cáo" sang "Theo dõi – Phân tích – Cảnh báo – Hậu kiểm trên dữ liệu số"
        </p>
      </div>

      {/* Interactive System Diagram */}
      <div
        style={{
          position: 'absolute',
          top: 290,
          left: 80,
          right: 80,
          height: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Central Database Hub */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #10B981',
            borderRadius: 24,
            padding: '24px 50px',
            boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            zIndex: 10,
            opacity: dbSpring,
            transform: `scale(${dbSpring})`,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 20,
              backgroundColor: '#ECFDF5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              color: THEME.colors.primary,
            }}
          >
            🗄️
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: THEME.colors.textDark }}>
              CƠ SỞ DỮ LIỆU VLNCN TẬP TRUNG TOÀN TỈNH
            </div>
            <div style={{ fontSize: 15, color: THEME.colors.primary, fontWeight: 600, marginTop: 4 }}>
              Dữ liệu đồng bộ Real-time · Nhật ký Audit bất biến không thể sửa/xóa
            </div>
          </div>
        </div>

        {/* Dynamic Connector lines */}
        <div
          style={{
            width: 900,
            height: 50,
            display: 'flex',
            justifyContent: 'space-around',
            opacity: pulse,
          }}
        >
          <div style={{ width: 2, height: '100%', backgroundColor: '#10B981' }} />
          <div style={{ width: 2, height: '100%', backgroundColor: '#10B981' }} />
          <div style={{ width: 2, height: '100%', backgroundColor: '#10B981' }} />
        </div>

        {/* 3 Portals */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            width: '100%',
            justifyContent: 'center',
            opacity: portalsSpring,
            transform: `translateY(${(1 - portalsSpring) * 30}px)`,
          }}
        >
          {/* Portal 1: Police PC06 */}
          <div
            style={{
              flex: 1,
              maxWidth: 380,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME.shadows.card,
              border: '2px solid #059669',
              borderTop: '6px solid #059669',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 26 }}>👮</span>
              <div style={{ fontSize: 20, fontWeight: 800, color: THEME.colors.textDark }}>
                CỔNG CÔNG AN (PC06)
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME.colors.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
              <li><strong>Giám sát toàn tỉnh:</strong> 58 kho chứa, sức chứa thực tế</li>
              <li><strong>Duyệt điện tử:</strong> Phê duyệt cặp liên thông Bán/Mua</li>
              <li><strong>Hậu kiểm:</strong> Đối soát GPS hành trình, tra cứu QR code</li>
            </ul>
          </div>

          {/* Portal 2: Enterprise */}
          <div
            style={{
              flex: 1,
              maxWidth: 380,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME.shadows.card,
              border: '2px solid #0284C7',
              borderTop: '6px solid #0284C7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 26 }}>🏢</span>
              <div style={{ fontSize: 20, fontWeight: 800, color: THEME.colors.textDark }}>
                CỔNG DOANH NGHIỆP
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME.colors.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
              <li><strong>Đăng ký & Yêu cầu:</strong> Đề nghị xuất kho / nhập kho</li>
              <li><strong>Phiếu nhập – xuất:</strong> Tự động ghi sổ tồn, khai báo xe</li>
              <li><strong>Nghiệp vụ ca nổ:</strong> Báo cáo dư sau nổ, hỗ trợ offline</li>
            </ul>
          </div>

          {/* Portal 3: Admin */}
          <div
            style={{
              flex: 1,
              maxWidth: 380,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME.shadows.card,
              border: '2px solid #D97706',
              borderTop: '6px solid #D97706',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 26 }}>⚙️</span>
              <div style={{ fontSize: 20, fontWeight: 800, color: THEME.colors.textDark }}>
                CỔNG QUẢN TRỊ (ADMIN)
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME.colors.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
              <li><strong>Dữ liệu nền dùng chung:</strong> Doanh nghiệp, kho, sức chứa</li>
              <li><strong>Danh mục chuẩn hóa:</strong> Chủng loại thuốc nổ, kíp, phụ kiện</li>
              <li><strong>Nhật ký audit bất biến:</strong> Truy vết toàn bộ thao tác hệ thống</li>
            </ul>
          </div>
        </div>
      </div>

      <SubtitleBar
        text={
          frame < 380
            ? 'Thực hiện Nghị quyết số 57 của Bộ Chính trị và Đề án 06 của Chính phủ, Công an tỉnh Quảng Ninh tiên phong triển khai Hệ thống Quản lý VLNCN tập trung.'
            : 'Ba cổng nghiệp vụ chạy trên cùng một nền tảng dữ liệu duy nhất, kết nối thông suốt giữa Công an, Doanh nghiệp và Quản trị viên toàn tỉnh.'
        }
      />
    </AbsoluteFill>
  );
};
