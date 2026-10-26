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
  Network,
  Share2,
} from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene3ArchitectureV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 16, stiffness: 90 } });
  const hubSpring = spring({ frame: frame - 20, fps, config: { damping: 15, stiffness: 85 } });
  const portalsSpring = spring({ frame: frame - 35, fps, config: { damping: 15, stiffness: 85 } });
  const processSpring = spring({ frame: frame - 50, fps, config: { damping: 15, stiffness: 85 } });

  // 8 steps in closed-loop workflow (Slide 12)
  const workflowSteps = [
    { num: '1', name: 'Lập đơn', desc: 'Đăng ký nhập / Đề nghị xuất' },
    { num: '2', name: 'Xác nhận', desc: 'Bên bán / mua xác nhận' },
    { num: '3', name: 'Liên thông', desc: 'Ghép cặp đơn 2 chiều' },
    { num: '4', name: 'CA Duyệt', desc: 'Cấp số điện tử tự động' },
    { num: '5', name: 'Ghi sổ số', desc: 'Cập nhật tồn & QR code' },
    { num: '6', name: 'Vận chuyển', desc: 'Giám sát GPS hành trình' },
    { num: '7', name: 'Ca nổ mìn', desc: 'Báo cáo nghiệm thu tại lò' },
    { num: '8', name: 'Hậu kiểm', desc: 'Đối soát N–X–T tự động' },
  ];

  // Active step runner
  const activeStepIdx = Math.min(7, Math.floor(interpolate(frame, [80, 500], [0, 8], { extrapolateRight: 'clamp' })));

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      <BackgroundMeshV2_3 accentColor="#0284C7" />
      <HeaderNavV2_3 currentChapter={3} />

      {/* Main Container - 4 Clean Tiers */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 48,
          right: 48,
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
            backgroundColor: THEME_V2_3.colors.surfaceGlass,
            backdropFilter: 'blur(20px)',
            borderRadius: 18,
            padding: '12px 24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: `${THEME_V2_3.shadows.card}, inset 0 1px 0 0 rgba(255, 255, 255, 0.14)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: titleSpring,
            transform: `translateY(${(1 - titleSpring) * -15}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Scale size={18} color={THEME_V2_3.colors.goldBright} />
            <span style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_3.colors.goldBright, letterSpacing: '0.06em' }}>
              CĂN CỨ PHÁP LÝ & ĐỊNH HƯỚNG CHIẾN LƯỢC:
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                padding: '6px 14px',
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                color: THEME_V2_3.colors.goldChampagne,
              }}
            >
              Nghị quyết số 57-NQ/TW của Bộ Chính trị
            </div>
            <div
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                padding: '6px 14px',
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                color: '#FCA5A5',
              }}
            >
              Đề án 06/CP của Chính phủ
            </div>
            <div
              style={{
                backgroundColor: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                padding: '6px 14px',
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                color: '#7DD3FC',
              }}
            >
              Luật số 42/2024/QH15 về Quản lý VK, VLN & CCHT
            </div>
          </div>
        </div>

        {/* Tier 2: Neural Central Hub & 3 Interconnected Portals */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr 1fr',
            gap: 18,
            alignItems: 'stretch',
          }}
        >
          {/* Portal 1: Cổng Doanh Nghiệp */}
          <div
            style={{
              backgroundColor: THEME_V2_3.colors.surfaceGlass,
              backdropFilter: 'blur(20px)',
              borderRadius: 20,
              padding: '24px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              boxShadow: THEME_V2_3.shadows.card,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: portalsSpring,
              transform: `translateX(${(1 - portalsSpring) * -20}px)`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: 'rgba(14, 165, 233, 0.2)',
                    border: '1px solid rgba(14, 165, 233, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Building2 size={22} color={THEME_V2_3.colors.cyanBright} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: THEME_V2_3.colors.cyanBright, letterSpacing: '0.1em' }}>
                    PHÂN HỆ 01
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                    Cổng Doanh Nghiệp
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 13, color: THEME_V2_3.colors.textSecondary, lineHeight: 1.5, marginBottom: 14 }}>
                Dành cho các đơn vị kinh doanh mỏ than, đơn vị vận tải và cung ứng vật liệu nổ.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.textSecondary }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.cyanBright} />
                  <span>Kê khai đơn hàng Bán / Mua trực tuyến</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.textSecondary }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.cyanBright} />
                  <span>Theo dõi định mức sức chứa 58 kho chứa</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.cyanBright }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.cyanBright} />
                  <span>Tự động xuất biểu mẫu phiếu in chuẩn hóa</span>
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: THEME_V2_3.colors.cyanBright,
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                padding: '6px 12px',
                borderRadius: 8,
                textAlign: 'center',
                border: '1px solid rgba(14, 165, 233, 0.25)',
              }}
            >
              Hoạt động trực tuyến 24/7 không độ trễ
            </div>
          </div>

          {/* Central Neural Hub: CƠ SỞ DỮ LIỆU TẬP TRUNG */}
          <div
            style={{
              position: 'relative',
              backgroundColor: 'rgba(11, 22, 44, 0.92)',
              backdropFilter: 'blur(24px)',
              borderRadius: 22,
              padding: '24px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              boxShadow: `${THEME_V2_3.shadows.elevated}, 0 0 35px rgba(245, 158, 11, 0.18), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              opacity: hubSpring,
              transform: `scale(${hubSpring * 0.03 + 0.97})`,
              overflow: 'hidden',
            }}
          >
            {/* Top Brand Block */}
            <div>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                  border: '1px solid rgba(245, 158, 11, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 10px',
                  boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)',
                }}
              >
                <Database size={26} color={THEME_V2_3.colors.goldBright} />
              </div>

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: THEME_V2_3.colors.goldBright,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                SINGLE SOURCE OF TRUTH
              </div>
              <div
                style={{
                  fontSize: 21,
                  fontWeight: 900,
                  color: THEME_V2_3.colors.textWhite,
                  letterSpacing: '-0.02em',
                  marginTop: 2,
                }}
              >
                CƠ SỞ DỮ LIỆU TẬP TRUNG
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_3.colors.textSecondary, marginTop: 4, maxWidth: 380 }}>
                Nền tảng đồng bộ dữ liệu thời gian thực kết nối 3 Cổng chuyên trách:
              </div>
            </div>

            {/* Middle Feature: Cổng 3 (Quản Trị Hệ Thống) & Connection Visualizer */}
            <div
              style={{
                width: '100%',
                backgroundColor: 'rgba(4, 8, 18, 0.65)',
                borderRadius: 14,
                padding: '12px 16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '10px 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    backgroundColor: 'rgba(16, 185, 129, 0.18)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Settings2 size={18} color="#34D399" />
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#34D399', letterSpacing: '0.08em' }}>
                    PHÂN HỆ 03 (LIÊN THÔNG BẢO MẬT)
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                    Cổng Quản Trị Hệ Thống & Phân Quyền
                  </div>
                  <div style={{ fontSize: 11, color: THEME_V2_3.colors.textMuted }}>
                    Giám sát an toàn thông tin & Audit log bất biến
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#34D399',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                Cấp độ 3
              </div>
            </div>

            {/* Bottom 3 Metric Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 8,
                width: '100%',
              }}
            >
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: THEME_V2_3.colors.goldBright }}>100%</div>
                <div style={{ fontSize: 10, color: THEME_V2_3.colors.textMuted }}>Số hóa dữ liệu</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: THEME_V2_3.colors.cyanBright }}>24/7</div>
                <div style={{ fontSize: 10, color: THEME_V2_3.colors.textMuted }}>Thời gian thực</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: THEME_V2_3.colors.emerald }}>Audit Log</div>
                <div style={{ fontSize: 10, color: THEME_V2_3.colors.textMuted }}>Không thể sửa xóa</div>
              </div>
            </div>
          </div>

          {/* Portal 2: Cổng Công An PC06 */}
          <div
            style={{
              backgroundColor: THEME_V2_3.colors.surfaceGlass,
              backdropFilter: 'blur(20px)',
              borderRadius: 20,
              padding: '24px',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              boxShadow: THEME_V2_3.shadows.card,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: portalsSpring,
              transform: `translateX(${(1 - portalsSpring) * 20}px)`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: 'rgba(220, 38, 38, 0.2)',
                    border: '1px solid rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShieldCheck size={22} color={THEME_V2_3.colors.primaryBright} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: THEME_V2_3.colors.primaryBright, letterSpacing: '0.1em' }}>
                    PHÂN HỆ 02
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                    Cổng Công An PC06
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 13, color: THEME_V2_3.colors.textSecondary, lineHeight: 1.5, marginBottom: 14 }}>
                Trung tâm điều hành và giám sát an ninh nghiệp vụ của lực lượng Công an tỉnh.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.textSecondary }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.primaryBright} />
                  <span>Phê duyệt & cấp số xác nhận điện tử</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.textSecondary }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.primaryBright} />
                  <span>Cảnh báo sớm kho vượt ngưỡng an toàn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: THEME_V2_3.colors.primaryBright }}>
                  <CheckCircle2 size={14} color={THEME_V2_3.colors.primaryBright} />
                  <span>Bản đồ GPS theo dõi lộ trình vận chuyển</span>
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: THEME_V2_3.colors.primaryBright,
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                padding: '6px 12px',
                borderRadius: 8,
                textAlign: 'center',
                border: '1px solid rgba(220, 38, 38, 0.25)',
              }}
            >
              Chỉ đạo điều hành trên nền tảng số
            </div>
          </div>
        </div>

        {/* Tier 3: 8-Step Full-Cycle Digital Workflow (Slide 12) */}
        <div
          style={{
            backgroundColor: THEME_V2_3.colors.surfaceGlass,
            backdropFilter: 'blur(20px)',
            borderRadius: 18,
            padding: '16px 20px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: THEME_V2_3.shadows.card,
            opacity: processSpring,
            transform: `translateY(${(1 - processSpring) * 15}px)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Zap size={16} color={THEME_V2_3.colors.goldBright} />
              <span style={{ fontSize: 12, fontWeight: 800, color: THEME_V2_3.colors.textWhite, letterSpacing: '0.08em' }}>
                CHU TRÌNH SỐ KHÉP KÍN 8 BƯỚC TOÀN TRÌNH (THEO QUY TRÌNH NGHIỆP VỤ BỘ CÔNG AN)
              </span>
            </div>
            <span style={{ fontSize: 11, color: THEME_V2_3.colors.goldChampagne, fontWeight: 600 }}>
              Tiến trình liên thông hai chiều tự động
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gap: 8,
            }}
          >
            {workflowSteps.map((s, idx) => {
              const isCurrent = idx === activeStepIdx;
              const isPassed = idx < activeStepIdx;

              return (
                <div
                  key={s.num}
                  style={{
                    backgroundColor: isCurrent
                      ? 'rgba(220, 38, 38, 0.25)'
                      : isPassed
                      ? 'rgba(245, 158, 11, 0.12)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isCurrent
                      ? '1px solid #EF4444'
                      : isPassed
                      ? '1px solid rgba(245, 158, 11, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 10,
                    padding: '8px 10px',
                    boxShadow: isCurrent ? '0 0 14px rgba(239, 68, 68, 0.4)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        color: isCurrent ? THEME_V2_3.colors.textWhite : isPassed ? THEME_V2_3.colors.goldBright : THEME_V2_3.colors.textSubtle,
                        backgroundColor: isCurrent ? '#DC2626' : 'rgba(255, 255, 255, 0.08)',
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {s.num}
                    </span>
                    {idx < 7 && <ArrowRight size={10} color={THEME_V2_3.colors.textSubtle} />}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: isCurrent ? THEME_V2_3.colors.textWhite : THEME_V2_3.colors.textPrimary,
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: THEME_V2_3.colors.textMuted,
                      marginTop: 2,
                      lineHeight: 1.3,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SubtitleBarV2_3 text="Hệ thống thiết lập nền tảng CSDL tập trung với 3 Cổng liên thông và quy trình nghiệp vụ 8 bước khép kín chuẩn hóa." />
    </AbsoluteFill>
  );
};
