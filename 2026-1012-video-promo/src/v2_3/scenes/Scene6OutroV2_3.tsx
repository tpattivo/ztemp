import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  TrendingUp,
  UserCheck,
  Building2,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Award,
  Lock,
} from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene6OutroV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isEnding = frame >= 280;

  const cardsSpring = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 90 } });
  const outroSpring = spring({ frame: frame - 280, fps, config: { damping: 14, stiffness: 80 } });

  const bgZoom = interpolate(frame, [0, 660], [1.0, 1.07], { extrapolateRight: 'clamp' });

  // Floating particles simulation in outro
  const haloScale = 1.0 + Math.sin(frame * 0.05) * 0.06;

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      {/* Background B-roll with Dark Cinematic Treatment */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Img
          src={staticFile('broll/03_vlncn_depot.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${bgZoom})`,
            filter: 'brightness(0.28) contrast(1.2) blur(3px)',
          }}
        />
        <BackgroundMeshV2_3 accentColor="#F59E0B" />
      </div>

      <HeaderNavV2_3 currentChapter={6} />

      {/* Part 1 (Frame 0 to 280): 3 Monumental Value Pillar Monoliths (Slide 13) */}
      {!isEnding && (
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
            gap: 16,
            zIndex: 10,
            opacity: cardsSpring,
            transform: `translateY(${(1 - cardsSpring) * 20}px)`,
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: THEME_V2_3.colors.surfaceGlass,
              backdropFilter: 'blur(20px)',
              borderRadius: 18,
              padding: '16px 28px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: `${THEME_V2_3.shadows.card}, inset 0 1px 0 0 rgba(255, 255, 255, 0.14)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                  border: '1px solid rgba(245, 158, 11, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={18} color={THEME_V2_3.colors.goldBright} />
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                  HIỆU QUẢ QUẢN LÝ TOÀN DIỆN CHO 3 NHÓM ĐỐI TƯỢNG THỤ HƯỞNG
                </div>
                <div style={{ fontSize: 12, color: THEME_V2_3.colors.goldChampagne, fontWeight: 500 }}>
                  Đột phá năng lực quản trị Nhà nước theo mục tiêu Đề án 06/CP tại tỉnh Quảng Ninh
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: THEME_V2_3.colors.goldBright,
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                padding: '6px 14px',
                borderRadius: 20,
                letterSpacing: '0.08em',
              }}
            >
              GIÁ TRỊ CHIẾN LƯỢC
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {/* Pillar 1: Lãnh đạo chỉ đạo */}
            <div
              style={{
                backgroundColor: THEME_V2_3.colors.surfaceGlass,
                backdropFilter: 'blur(20px)',
                borderRadius: 20,
                padding: '24px',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(245, 158, 11, 0.15)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: 'rgba(245, 158, 11, 0.2)',
                      border: '1px solid rgba(245, 158, 11, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUp size={22} color={THEME_V2_3.colors.goldBright} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: THEME_V2_3.colors.goldBright, letterSpacing: '0.1em' }}>
                      ĐỐI TƯỢNG 01
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                      Lãnh Đạo Chỉ Đạo
                    </div>
                  </div>
                </div>

                {/* Big Metric Banner */}
                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: 12,
                    padding: '10px 14px',
                    marginBottom: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: THEME_V2_3.colors.goldChampagne }}>
                    GIÁ TRỊ CỐT LÕI
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 900, color: THEME_V2_3.colors.goldBright }}>
                    100% REALTIME
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.textSecondary }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.goldBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Bức tranh toàn cảnh realtime</strong> về tình hình xuất, nhập, tồn trên toàn địa bàn tỉnh.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.textSecondary }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.goldBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Dashboard chỉ đạo tức thời</strong>, hỗ trợ ra quyết định nhanh chóng, chính xác.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.textSecondary }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.goldBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Phát hiện sớm rủi ro</strong>: cảnh báo tự động khi kho hàng vượt ngưỡng an toàn hoặc chậm báo cáo.</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: THEME_V2_3.colors.goldChampagne,
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  padding: '8px 12px',
                  borderRadius: 10,
                  textAlign: 'center',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                }}
              >
                Chủ động điều hành trên dữ liệu số thay vì chờ báo cáo giấy
              </div>
            </div>

            {/* Pillar 2: Cán bộ PC06 */}
            <div
              style={{
                backgroundColor: THEME_V2_3.colors.surfaceGlass,
                backdropFilter: 'blur(20px)',
                borderRadius: 20,
                padding: '24px',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(220, 38, 38, 0.15)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                      border: '1px solid rgba(239, 68, 68, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <UserCheck size={22} color={THEME_V2_3.colors.primaryBright} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: THEME_V2_3.colors.primaryBright, letterSpacing: '0.1em' }}>
                      ĐỐI TƯỢNG 02
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                      Cán Bộ PC06
                    </div>
                  </div>
                </div>

                {/* Big Metric Banner */}
                <div
                  style={{
                    backgroundColor: 'rgba(220, 38, 38, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: 12,
                    padding: '10px 14px',
                    marginBottom: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#FCA5A5' }}>
                    TỐC ĐỘ XỬ LÝ HỒ SƠ
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 900, color: THEME_V2_3.colors.primaryBright }}>
                    2 NGÀY ➔ VÀI PHÚT
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.textSecondary }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.primaryBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Đối chiếu tự động 2 chiều</strong> giữa đơn vị bán và đơn vị mua, triệt tiêu sai lệch số lượng.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.primaryBright }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.primaryBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Duyệt & cấp số điện tử</strong> trực tiếp trên hệ thống, minh bạch và an toàn tuyệt đối.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.primaryBright }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.primaryBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Truy vết tức thời qua mã QR</strong> và lịch sử Audit log bất biến phục vụ công tác thanh tra.</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#FCA5A5',
                  backgroundColor: 'rgba(220, 38, 38, 0.1)',
                  padding: '8px 12px',
                  borderRadius: 10,
                  textAlign: 'center',
                  border: '1px solid rgba(220, 38, 38, 0.25)',
                }}
              >
                Giảm 95% thời gian tra cứu và thẩm định hồ sơ nghiệp vụ
              </div>
            </div>

            {/* Pillar 3: Doanh nghiệp */}
            <div
              style={{
                backgroundColor: THEME_V2_3.colors.surfaceGlass,
                backdropFilter: 'blur(20px)',
                borderRadius: 20,
                padding: '24px',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                boxShadow: `${THEME_V2_3.shadows.card}, 0 0 25px rgba(2, 132, 199, 0.15)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                      border: '1px solid rgba(14, 165, 233, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={22} color={THEME_V2_3.colors.cyanBright} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: THEME_V2_3.colors.cyanBright, letterSpacing: '0.1em' }}>
                      ĐỐI TƯỢNG 03
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                      Doanh Nghiệp
                    </div>
                  </div>
                </div>

                {/* Big Metric Banner */}
                <div
                  style={{
                    backgroundColor: 'rgba(14, 165, 233, 0.12)',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    borderRadius: 12,
                    padding: '10px 14px',
                    marginBottom: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#7DD3FC' }}>
                    THỦ TỤC VĂN BẢN
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 900, color: THEME_V2_3.colors.cyanBright }}>
                    0 CHỨNG TỪ GIẤY
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.textSecondary }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.cyanBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Dữ liệu minh bạch, chuẩn hóa</strong>, liên thông liền mạch với cơ quan quản lý.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.cyanBright }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.cyanBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Cắt giảm tối đa chi phí tuân thủ</strong> và thời gian chờ đợi phê duyệt nổ mìn.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: THEME_V2_3.colors.cyanBright }}>
                    <CheckCircle2 size={16} color={THEME_V2_3.colors.cyanBright} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span><strong>Nền tảng vận hành an toàn</strong>, bảo vệ tuyệt đối thông tin kinh doanh bí mật.</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#7DD3FC',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  padding: '8px 12px',
                  borderRadius: 10,
                  textAlign: 'center',
                  border: '1px solid rgba(14, 165, 233, 0.25)',
                }}
              >
                Gia tăng hiệu quả sản xuất và lưu thông hàng hóa
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Part 2 (Frame 280 to 660): Grand Cinematic Outro & Governance Slogan */}
      {isEnding && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            textAlign: 'center',
            zIndex: 20,
            opacity: outroSpring,
            transform: `scale(${outroSpring * 0.04 + 0.96})`,
          }}
        >
          {/* Ambient Divine Radiance Halo */}
          <div
            style={{
              position: 'absolute',
              top: '36%',
              left: '50%',
              width: 550,
              height: 550,
              transform: `translate(-50%, -50%) scale(${haloScale})`,
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(220, 38, 38, 0.2) 45%, transparent 70%)',
              filter: 'blur(55px)',
              pointerEvents: 'none',
            }}
          />

          {/* Monumental Official Golden Police Emblem */}
          <div
            style={{
              position: 'relative',
              width: 144,
              height: 144,
              borderRadius: '50%',
              padding: 5,
              background: 'linear-gradient(135deg, #F59E0B 0%, #DC2626 50%, #D97706 100%)',
              boxShadow: '0 0 55px rgba(245, 158, 11, 0.7), 0 0 110px rgba(220, 38, 38, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 26,
            }}
          >
            <Img
              src={staticFile('logo-bo-cong-an.jpg')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Organization Super-title */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: THEME_V2_3.colors.goldBright,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 8,
              textShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
            }}
          >
            CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06
          </div>

          {/* Monumental Headline */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: THEME_V2_3.colors.textWhite,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              maxWidth: 1300,
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.9)',
              marginBottom: 24,
            }}
          >
            HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP
          </div>

          {/* Official Governance Slogan in Golden Calligraphy Plaque */}
          <div
            style={{
              backgroundColor: 'rgba(15, 27, 50, 0.88)',
              backdropFilter: 'blur(24px)',
              borderRadius: 24,
              padding: '24px 52px',
              border: '1px solid rgba(245, 158, 11, 0.5)',
              boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.85), 0 0 40px rgba(245, 158, 11, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)',
              maxWidth: 1220,
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 21,
                fontWeight: 800,
                color: THEME_V2_3.colors.goldChampagne,
                letterSpacing: '0.04em',
                lineHeight: 1.5,
                textTransform: 'uppercase',
              }}
            >
              “TIÊN PHONG CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ — KIẾN TẠO MÔI TRƯỜNG MINH BẠCH, HIỆU QUẢ VÌ SỰ PHÁT TRIỂN BỀN VỮNG”
            </div>
          </div>

          {/* Bottom Security Seals */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 18px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                color: THEME_V2_3.colors.textSecondary,
              }}
            >
              <Shield size={14} color={THEME_V2_3.colors.goldBright} />
              <span>BẢO MẬT CẤP ĐỘ 3 QUỐC GIA</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 18px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                color: THEME_V2_3.colors.textSecondary,
              }}
            >
              <Lock size={14} color={THEME_V2_3.colors.cyanBright} />
              <span>ĐỀ ÁN 06/CP CHÍNH PHỦ</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 18px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                color: THEME_V2_3.colors.textSecondary,
              }}
            >
              <Award size={14} color={THEME_V2_3.colors.primaryBright} />
              <span>CÔNG AN TỈNH QUẢNG NINH · 2026</span>
            </div>
          </div>
        </div>
      )}

      <SubtitleBarV2_3
        text={
          isEnding
            ? "Tiên phong chuyển đổi số công tác quản trị — Kiến tạo môi trường minh bạch, hiệu quả vì sự phát triển bền vững."
            : "Hệ thống mang lại giá trị thiết thực: Lãnh đạo chỉ đạo tức thời, Cán bộ PC06 thẩm định trong vài phút, Doanh nghiệp minh bạch tuyệt đối."
        }
      />
    </AbsoluteFill>
  );
};
