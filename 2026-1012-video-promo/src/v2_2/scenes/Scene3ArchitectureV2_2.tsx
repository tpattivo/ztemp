import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  Database,
  ShieldCheck,
  Building2,
  Settings2,
  Scale,
  Lock,
  CheckCircle2,
  FileText,
  Truck,
  QrCode,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene3ArchitectureV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 90 } });
  const hubSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 85 } });
  const portalsSpring = spring({ frame: frame - 45, fps, config: { damping: 15, stiffness: 85 } });
  const processSpring = spring({ frame: frame - 65, fps, config: { damping: 15, stiffness: 85 } });

  // 8 steps in closed-loop workflow (Slide 12 in PDF)
  const workflowSteps = [
    { num: '1', name: 'Lập đơn', desc: 'Đăng ký nhập / Đề nghị xuất' },
    { num: '2', name: 'Xác nhận', desc: 'Bên bán / mua xác nhận' },
    { num: '3', name: 'Liên thông', desc: 'Ghép cặp đơn 2 chiều' },
    { num: '4', name: 'CA Duyệt', desc: 'Cấp số điện tử' },
    { num: '5', name: 'Ghi sổ', desc: 'Cập nhật tồn & QR' },
    { num: '6', name: 'Vận chuyển', desc: 'GPS hành trình' },
    { num: '7', name: 'Ca nổ', desc: 'Báo cáo nghiệm thu' },
    { num: '8', name: 'Hậu kiểm', desc: 'Báo cáo N–X–T' },
  ];

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={3} />

      {/* Main Container - Full height distribution with 4 rich tiers */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 50,
          right: 50,
          bottom: 96,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 14,
          zIndex: 10,
        }}
      >
        {/* Tier 1: Legal Basis Badges */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            padding: '14px 28px',
            boxShadow: THEME_V2_2.shadows.card,
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: titleSpring,
            transform: `translateY(${(1 - titleSpring) * 12}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: 'rgba(185, 28, 28, 0.08)',
                color: THEME_V2_2.colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Scale size={20} strokeWidth={2.4} />
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 800, color: THEME_V2_2.colors.primary, letterSpacing: '0.04em' }}>
                CĂN CỨ PHÁP LÝ CHUYỂN ĐỔI SỐ:
              </span>
              <span style={{ fontSize: 15, fontWeight: 800, color: THEME_V2_2.colors.textPrimary, marginLeft: 8 }}>
                Nghị quyết 57-NQ/TW · Đề án 06/CP · Luật số 42/2024/QH15 · Thông tư 77 & 02/2026/TT-BCA
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {['An toàn thông tin Cấp độ 3', 'Mã hóa AES-256', 'Audit Log Bất biến'].map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  backgroundColor: '#F1F5F9',
                  color: '#334155',
                  padding: '4px 12px',
                  borderRadius: 12,
                  border: '1px solid #CBD5E1',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tier 2: Unified Database & Integration Hub */}
        <div
          style={{
            backgroundColor: THEME_V2_2.colors.headerNavy,
            borderRadius: 20,
            padding: '20px 32px',
            boxShadow: THEME_V2_2.shadows.elevated,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            opacity: hubSpring,
            transform: `scale(${interpolate(hubSpring, [0, 1], [0.97, 1])})`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              backgroundColor: THEME_V2_2.colors.primary,
              boxShadow: '0 0 10px #B91C1C',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: 'rgba(185, 28, 28, 0.25)',
                border: '2px solid #B91C1C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FCA5A5',
              }}
            >
              <Database size={28} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#FCA5A5', letterSpacing: '0.08em' }}>
                NỀN TẢNG DỮ LIỆU DÙNG CHUNG TOÀN TỈNH QUẢNG NINH
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.01em', marginTop: 2 }}>
                Cơ Sở Dữ Liệu VLNCN Tập Trung (Single Source of Truth)
              </div>
              <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 2 }}>
                Quản lý kho · Doanh nghiệp & Hồ sơ · Nhân sự chứng chỉ · Tuyến vận chuyển GPS · Báo cáo & Cảnh báo tức thời
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '10px 18px',
                borderRadius: 14,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 11, color: '#94A3B8' }}>PHƯƠNG THỨC MỚI</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#38BDF8', marginTop: 2 }}>Chủ động theo dõi trên dữ liệu</div>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '10px 18px',
                borderRadius: 14,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 11, color: '#94A3B8' }}>NHẬT KÝ BẤT BIẾN</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#4ADE80', marginTop: 2 }}>Audit Trail 100% truy vết</div>
            </div>
          </div>
        </div>

        {/* Tier 3: 3 Portals Matrix (Slide 7 in PDF) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
            opacity: portalsSpring,
            transform: `translateY(${(1 - portalsSpring) * 12}px)`,
          }}
        >
          {/* Portal 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 18,
              padding: '20px 24px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(2, 132, 199, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: 'rgba(2, 132, 199, 0.08)',
                  padding: '4px 12px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#0284C7',
                  marginBottom: 8,
                }}
              >
                <Building2 size={14} /> CỔNG DOANH NGHIỆP
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                Khai Báo & Quản Lý Kho
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_2.colors.textMuted, marginTop: 2 }}>
                Đối tượng: Quản trị DN · Thủ kho · Chỉ huy ca nổ
              </div>
            </div>
            <div style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, marginTop: 10, lineHeight: 1.5 }}>
              • Đăng ký tiếp nhận (VC16) & Đề nghị xuất kho online<br />
              • Phiếu nhập/xuất cập nhật tồn theo % sức chứa<br />
              • Báo cáo ca nổ & Cơ chế QR Offline tại cửa lò
            </div>
          </div>

          {/* Portal 2 (Center Highlight: PC06) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 18,
              padding: '20px 24px',
              boxShadow: THEME_V2_2.shadows.elevated,
              border: '2px solid #B91C1C',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -10,
                right: 20,
                backgroundColor: THEME_V2_2.colors.primary,
                color: '#FFFFFF',
                fontSize: 10,
                fontWeight: 800,
                padding: '3px 12px',
                borderRadius: 10,
              }}
            >
              TRUNG TÂM CHỈ HUY
            </div>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: 'rgba(185, 28, 28, 0.08)',
                  padding: '4px 12px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 800,
                  color: THEME_V2_2.colors.primary,
                  marginBottom: 8,
                }}
              >
                <ShieldCheck size={14} /> CỔNG CÔNG AN (PC06)
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                Giám Sát & Phê Duyệt
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_2.colors.textMuted, marginTop: 2 }}>
                Đối tượng: Lãnh đạo & Cán bộ PC06
              </div>
            </div>
            <div style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, marginTop: 10, lineHeight: 1.5 }}>
              • Dashboard giám sát toàn tỉnh thời gian thực<br />
              • Duyệt cặp liên thông Bán – Mua & Cấp số điện tử<br />
              • Bản đồ số hậu kiểm lộ trình vận chuyển GPS
            </div>
          </div>

          {/* Portal 3 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 18,
              padding: '20px 24px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(100, 116, 139, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: 'rgba(100, 116, 139, 0.08)',
                  padding: '4px 12px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#475569',
                  marginBottom: 8,
                }}
              >
                <Settings2 size={14} /> CỔNG QUẢN TRỊ (ADMIN)
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                Nền Dữ Liệu Dùng Chung
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_2.colors.textMuted, marginTop: 2 }}>
                Đối tượng: Quản trị viên hệ thống tỉnh
              </div>
            </div>
            <div style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, marginTop: 10, lineHeight: 1.5 }}>
              • Cấu hình 58 kho chứa & sức chứa thiết kế<br />
              • Chuẩn hóa danh mục VLNCN 2 tầng toàn tỉnh<br />
              • Biểu mẫu phiếu in & phân quyền theo phạm vi dữ liệu
            </div>
          </div>
        </div>

        {/* Tier 4: Closed-Loop 8-Step Workflow (Slide 12 in PDF) - Fills bottom completely */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            padding: '16px 24px',
            boxShadow: THEME_V2_2.shadows.card,
            border: '1px solid rgba(226, 232, 240, 0.9)',
            opacity: processSpring,
            transform: `translateY(${(1 - processSpring) * 12}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Zap size={16} color={THEME_V2_2.colors.primary} />
              <span style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_2.colors.headerNavy }}>
                QUY TRÌNH VẬN HÀNH NGHIỆP VỤ KHÉP KÍN (8 BƯỚC LIÊN THÔNG TOÀN TRÌNH):
              </span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: THEME_V2_2.colors.primary }}>
              Lập đơn → Công an duyệt → Hoàn tất hậu kiểm
            </span>
          </div>

          {/* 8 Step Pills Flow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
            {workflowSteps.map((st, i) => (
              <React.Fragment key={st.num}>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: i === 3 ? 'rgba(185, 28, 28, 0.08)' : '#F8FAFC',
                    border: i === 3 ? '1.5px solid #B91C1C' : '1px solid #E2E8F0',
                    borderRadius: 12,
                    padding: '8px 10px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: i === 3 ? '#B91C1C' : '#64748B',
                    }}
                  >
                    BƯỚC {st.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: i === 3 ? '#B91C1C' : THEME_V2_2.colors.textPrimary,
                      marginTop: 2,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {st.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: '#64748B',
                      marginTop: 2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {st.desc}
                  </div>
                </div>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight size={14} color="#94A3B8" style={{ flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <SubtitleBarV2_2 text="Giải pháp kết nối liên thông 3 cổng nghiệp vụ trên một cơ sở dữ liệu duy nhất, vận hành quy trình 8 bước khép kín từ lập đơn, phê duyệt điện tử đến hậu kiểm GPS và QR Code." />
    </AbsoluteFill>
  );
};
