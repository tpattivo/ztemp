import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Database, ShieldCheck, Building2, Settings2, Scale, Lock, CheckCircle2 } from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { THEME_V2 } from '../styles/themeV2';

export const Scene3ArchitectureV2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 90 } });
  const hubSpring = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 85 } });
  const portalsSpring = spring({ frame: frame - 65, fps, config: { damping: 15, stiffness: 85 } });

  // Flow pulse along SVG lines
  const dashOffset = (frame * 3) % 40;

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2.colors.bgGradient,
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <HeaderNavV2 currentChapter={3} />

      {/* Top Legal Basis Badges */}
      <div
        style={{
          position: 'absolute',
          top: 105,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: titleSpring,
          transform: `translateY(${(1 - titleSpring) * 15}px)`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          {[
            'NGHỊ QUYẾT 57-NQ/TW (BỘ CHÍNH TRỊ)',
            'ĐỀ ÁN 06/QĐ-TTG CHÍNH PHỦ',
            'LUẬT SỐ 42/2024/QH15',
            'THÔNG TƯ 77 & 02/2026/TT-BCA',
          ].map((tag, i) => (
            <span
              key={i}
              style={{
                backgroundColor: '#FFFFFF',
                color: THEME_V2.colors.primaryDark,
                fontSize: 12,
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: 20,
                border: '1px solid rgba(5, 150, 105, 0.25)',
                boxShadow: THEME_V2.shadows.soft,
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: THEME_V2.colors.textPrimary,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Kiến trúc 3 Cổng tương tác trên 1 Cơ sở dữ liệu tập trung
        </h1>
        <p style={{ fontSize: 16, color: THEME_V2.colors.textSecondary, margin: '6px 0 0 0' }}>
          Chuyển từ "Chờ báo cáo" sang "Theo dõi – Phân tích – Cảnh báo – Hậu kiểm trên dữ liệu số"
        </p>
      </div>

      {/* Central Hub & Portals Diagram */}
      <div
        style={{
          position: 'absolute',
          top: 245,
          left: 80,
          right: 80,
          height: 520,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Central DB Hub */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #059669',
            borderRadius: 24,
            padding: '20px 48px',
            boxShadow: THEME_V2.shadows.float,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            zIndex: 10,
            opacity: hubSpring,
            transform: `scale(${hubSpring})`,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              backgroundColor: THEME_V2.colors.primaryUltraLight,
              color: THEME_V2.colors.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Database size={32} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
              CƠ SỞ DỮ LIỆU VLNCN DÙNG CHUNG TOÀN THÀNH PHỐ
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 4 }}>
              <span style={{ fontSize: 13, color: THEME_V2.colors.primary, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={15} strokeWidth={2.4} /> Số liệu đồng bộ Real-time
              </span>
              <span style={{ fontSize: 13, color: THEME_V2.colors.accentGold, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Lock size={15} strokeWidth={2.4} /> Nhật ký Audit bất biến (Không thể sửa/xóa)
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic SVG Animated Flow Connectors */}
        <svg width="1000" height="60" style={{ overflow: 'visible' }}>
          <line
            x1="500"
            y1="0"
            x2="180"
            y2="55"
            stroke="#059669"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeDashoffset={-dashOffset}
          />
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="55"
            stroke="#0284C7"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeDashoffset={-dashOffset}
          />
          <line
            x1="500"
            y1="0"
            x2="820"
            y2="55"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeDashoffset={-dashOffset}
          />
        </svg>

        {/* 3 Portals Cards */}
        <div
          style={{
            display: 'flex',
            gap: 28,
            width: '100%',
            justifyContent: 'center',
            opacity: portalsSpring,
            transform: `translateY(${(1 - portalsSpring) * 25}px)`,
          }}
        >
          {/* Cổng Công An PC06 */}
          <div
            style={{
              flex: 1,
              maxWidth: 420,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME_V2.shadows.card,
              border: '2px solid #059669',
              borderTop: '6px solid #059669',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
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
                <ShieldCheck size={26} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
                CỔNG CÔNG AN (PC06)
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME_V2.colors.textSecondary, fontSize: 13.5, lineHeight: 1.65 }}>
              <li><strong>Giám sát toàn tỉnh:</strong> 58 kho chứa, sức chứa thực tế</li>
              <li><strong>Xử lý yêu cầu:</strong> Phê duyệt cặp liên thông Bán/Mua</li>
              <li><strong>Hậu kiểm:</strong> Đối soát hành trình GPS, quét QR truy vết</li>
            </ul>
          </div>

          {/* Cổng Doanh Nghiệp */}
          <div
            style={{
              flex: 1,
              maxWidth: 420,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME_V2.shadows.card,
              border: '2px solid #0284C7',
              borderTop: '6px solid #0284C7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: THEME_V2.colors.accentBlueLight,
                  color: THEME_V2.colors.accentBlue,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={26} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
                CỔNG DOANH NGHIỆP
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME_V2.colors.textSecondary, fontSize: 13.5, lineHeight: 1.65 }}>
              <li><strong>Đăng ký & Yêu cầu:</strong> Giấy VC16 / Đề nghị xuất kho</li>
              <li><strong>Phiếu nhập – xuất:</strong> Tự động ghi sổ tồn, khai báo xe</li>
              <li><strong>Nghiệp vụ đặc thù:</strong> Báo cáo ca nổ, hỗ trợ offline cửa lò</li>
            </ul>
          </div>

          {/* Cổng Quản Trị */}
          <div
            style={{
              flex: 1,
              maxWidth: 420,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '24px 28px',
              boxShadow: THEME_V2.shadows.card,
              border: '2px solid #D97706',
              borderTop: '6px solid #D97706',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
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
                <Settings2 size={26} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: THEME_V2.colors.textPrimary }}>
                CỔNG QUẢN TRỊ (ADMIN)
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: THEME_V2.colors.textSecondary, fontSize: 13.5, lineHeight: 1.65 }}>
              <li><strong>Dữ liệu nền dùng chung:</strong> Cấu hình kho & sức chứa thiết kế</li>
              <li><strong>Danh mục chuẩn hóa:</strong> Chủng loại thuốc nổ, phụ kiện 2 tầng</li>
              <li><strong>Nhật ký bất biến (Audit):</strong> Truy vết mọi thao tác hệ thống</li>
            </ul>
          </div>
        </div>
      </div>

      <SubtitleBarV2 text="Ba cổng nghiệp vụ chạy trên cùng một nền tảng dữ liệu duy nhất: Cổng Công an PC06 giám sát toàn diện, Cổng Doanh nghiệp kê khai kho bãi, và Cổng Quản trị chuẩn hóa dữ liệu." />
    </AbsoluteFill>
  );
};
