import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Database, ShieldCheck, Building2, Settings2, Scale, Lock, CheckCircle2 } from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene3ArchitectureV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 90 } });
  const hubSpring = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 85 } });
  const portalsSpring = spring({ frame: frame - 55, fps, config: { damping: 15, stiffness: 85 } });

  const dashOffset = (frame * 3) % 40;

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={3} />

      {/* Main Container - Full height distribution */}
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
        }}
      >
        {/* Top Legal Basis Badges */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            padding: '20px 32px',
            boxShadow: THEME_V2_2.shadows.card,
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: titleSpring,
            transform: `translateY(${(1 - titleSpring) * 15}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: 'rgba(185, 28, 28, 0.08)',
                color: THEME_V2_2.colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Scale size={24} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_2.colors.primary, letterSpacing: '0.04em' }}>
                CĂN CỨ PHÁP LÝ & ĐỊNH HƯỚNG QUỐC GIA
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                Đề án 06/CP · Nghị quyết 57-NQ/TW Bộ Chính trị · Luật số 42/2024/QH15
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {['Thông tư 77/BCA', 'Thông tư 02/2026/BCA', 'An toàn Cấp độ 3'].map((item, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  borderRadius: 14,
                  fontSize: 12,
                  fontWeight: 700,
                  backgroundColor: '#F1F5F9',
                  color: '#334155',
                  border: '1px solid #CBD5E1',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Center: Central Unified Database Hub */}
        <div
          style={{
            backgroundColor: THEME_V2_2.colors.headerNavy,
            borderRadius: 24,
            padding: '30px 44px',
            boxShadow: THEME_V2_2.shadows.elevated,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            opacity: hubSpring,
            transform: `scale(${interpolate(hubSpring, [0, 1], [0.96, 1])})`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle glow border */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              backgroundColor: THEME_V2_2.colors.primary,
              boxShadow: '0 0 12px #B91C1C',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                backgroundColor: 'rgba(185, 28, 28, 0.25)',
                border: '2px solid #B91C1C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FCA5A5',
              }}
            >
              <Database size={36} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#FCA5A5', letterSpacing: '0.08em' }}>
                CƠ SỞ DỮ LIỆU TẬP TRUNG TỈNH QUẢNG NINH
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.01em', marginTop: 4 }}>
                Một Nguồn Dữ Liệu Duy Nhất (Single Source of Truth)
              </div>
              <div style={{ fontSize: 15, color: '#94A3B8', marginTop: 4 }}>
                Nhật ký truy vết bất biến (Audit Trail) · Đồng bộ trực tuyến & ngoại tuyến · Mã hóa dữ liệu cấp độ 3
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14 }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '12px 20px',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 12, color: '#94A3B8' }}>BẢO MẬT DỮ LIỆU</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginTop: 2 }}>Mã hóa AES-256</div>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '12px 20px',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 12, color: '#94A3B8' }}>ĐỘ TRỄ ĐỒNG BỘ</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#38BDF8', marginTop: 2 }}>&lt; 500 ms</div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 Interconnected Portals */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            opacity: portalsSpring,
            transform: `translateY(${(1 - portalsSpring) * 15}px)`,
          }}
        >
          {/* Portal 1: Doanh nghiệp */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 22,
              padding: '28px 32px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(2, 132, 199, 0.25)',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(2, 132, 199, 0.08)',
                padding: '5px 14px',
                borderRadius: 14,
                fontSize: 12,
                fontWeight: 800,
                color: '#0284C7',
                marginBottom: 12,
              }}
            >
              <Building2 size={16} /> PHÂN HỆ 01
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
              CỔNG DOANH NGHIỆP
            </div>
            <div style={{ fontSize: 14, color: THEME_V2_2.colors.textSecondary, marginTop: 8, lineHeight: 1.5 }}>
              Quản lý kho, đăng ký tiếp nhận, đề nghị xuất kho và cơ chế QR Code an toàn tại cửa lò mất sóng.
            </div>
          </div>

          {/* Portal 2: Công an PC06 (Highlight) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 22,
              padding: '28px 32px',
              boxShadow: THEME_V2_2.shadows.elevated,
              border: '2px solid #B91C1C',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -12,
                right: 24,
                backgroundColor: THEME_V2_2.colors.primary,
                color: '#FFFFFF',
                fontSize: 11,
                fontWeight: 800,
                padding: '4px 14px',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(185, 28, 28, 0.3)',
              }}
            >
              TRUNG TÂM CHỈ HUY
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(185, 28, 28, 0.08)',
                padding: '5px 14px',
                borderRadius: 14,
                fontSize: 12,
                fontWeight: 800,
                color: THEME_V2_2.colors.primary,
                marginBottom: 12,
              }}
            >
              <ShieldCheck size={16} /> PHÂN HỆ 02
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
              CỔNG CÔNG AN (PC06)
            </div>
            <div style={{ fontSize: 14, color: THEME_V2_2.colors.textSecondary, marginTop: 8, lineHeight: 1.5 }}>
              Dashboard cảnh báo kho, phê duyệt cấp số điện tử, cặp liên thông bán-mua và bản đồ số GPS thời gian thực.
            </div>
          </div>

          {/* Portal 3: Quản trị */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 22,
              padding: '28px 32px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(100, 116, 139, 0.25)',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(100, 116, 139, 0.08)',
                padding: '5px 14px',
                borderRadius: 14,
                fontSize: 12,
                fontWeight: 800,
                color: '#475569',
                marginBottom: 12,
              }}
            >
              <Settings2 size={16} /> PHÂN HỆ 03
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
              CỔNG QUẢN TRỊ HỆ THỐNG
            </div>
            <div style={{ fontSize: 14, color: THEME_V2_2.colors.textSecondary, marginTop: 8, lineHeight: 1.5 }}>
              Quản lý danh mục chủng loại VLNCN, cấu hình sức chứa thiết kế, phân quyền người dùng và nhật ký an toàn.
            </div>
          </div>
        </div>
      </div>

      <SubtitleBarV2_2 text="Bám sát Đề án 06 của Chính phủ và các Thông tư Bộ Công an, giải pháp liên thông 3 cổng nghiệp vụ trên một cơ sở dữ liệu duy nhất với nhật ký truy vết bất biến." />
    </AbsoluteFill>
  );
};
