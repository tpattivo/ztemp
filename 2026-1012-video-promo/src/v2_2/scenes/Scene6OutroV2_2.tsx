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
} from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene6OutroV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isEnding = frame >= 280;

  const cardsSpring = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 90 } });
  const outroSpring = spring({ frame: frame - 280, fps, config: { damping: 14, stiffness: 85 } });

  const bgZoom = interpolate(frame, [0, 660], [1.0, 1.06], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
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
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.93) 50%, rgba(241, 245, 249, 0.97) 100%)',
          }}
        />
      </div>

      <HeaderNavV2_2 currentChapter={6} />

      {/* Part 1 (Frame 0 to 280): Comprehensive 3 Pillar Values from Slide 13 in PDF */}
      {!isEnding && (
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
            gap: 16,
            zIndex: 10,
            opacity: cardsSpring,
            transform: `translateY(${(1 - cardsSpring) * 15}px)`,
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 18,
              padding: '18px 32px',
              boxShadow: THEME_V2_2.shadows.card,
              border: '1px solid rgba(226, 232, 240, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: 'rgba(185, 28, 28, 0.08)',
                  border: '1px solid rgba(185, 28, 28, 0.25)',
                  padding: '5px 16px',
                  borderRadius: 16,
                  fontSize: 12,
                  fontWeight: 800,
                  color: THEME_V2_2.colors.primary,
                  marginBottom: 6,
                }}
              >
                <Sparkles size={14} strokeWidth={2.4} />
                HIỆU QUẢ & GIÁ TRỊ MANG LẠI (SLIDE 13)
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                HỆ THỐNG MANG LẠI GIÁ TRỊ ĐỘT PHÁ CHO TỪNG NHÓM ĐỐI TƯỢNG
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                backgroundColor: '#FEF2F2',
                padding: '10px 20px',
                borderRadius: 16,
                border: '1px solid #FECACA',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #D97706',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Img
                  src={staticFile('logo-bo-cong-an.jpg')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#991B1B' }}>ĐƠN VỊ CHỦ TRÌ</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: THEME_V2_2.colors.primary }}>CÔNG AN TỈNH (PC06)</div>
              </div>
            </div>
          </div>

          {/* 3 Large Pillar Columns (Covering 100% of Slide 13 content) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, flex: 1 }}>
            {/* Column 1: Đối với Lãnh đạo */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '26px 28px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1.5px solid rgba(185, 28, 28, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: THEME_V2_2.colors.primary }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      backgroundColor: 'rgba(185, 28, 28, 0.08)',
                      color: THEME_V2_2.colors.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUp size={24} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_2.colors.primary, letterSpacing: '0.04em' }}>
                      ĐỐI TƯỢNG 01
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                      ĐỐI VỚI LÃNH ĐẠO
                    </div>
                  </div>
                </div>

                {/* Content bullets from Slide 13 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                  {[
                    'Bức tranh tồn kho & lưu chuyển VLNCN toàn thành phố gần thời gian thực.',
                    'Dashboard, báo cáo & cảnh báo phục vụ chỉ đạo, điều hành tức thời.',
                    'Phát hiện sớm rủi ro: tồn vượt sức chứa, DN chậm báo cáo, chuyến cần chú ý.',
                    'Chủ động theo dõi trên dữ liệu thay vì chờ báo cáo giấy truyền thống.',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color={THEME_V2_2.colors.primary} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: '10px 14px',
                  backgroundColor: 'rgba(185, 28, 28, 0.06)',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  color: THEME_V2_2.colors.primary,
                  textAlign: 'center',
                }}
              >
                Chỉ đạo điều hành dựa trên dữ liệu số thời gian thực
              </div>
            </div>

            {/* Column 2: Đối với Cán bộ sử dụng (PC06) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '26px 28px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1.5px solid rgba(2, 132, 199, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: '#0284C7' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      backgroundColor: 'rgba(2, 132, 199, 0.08)',
                      color: '#0284C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <UserCheck size={24} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#0284C7', letterSpacing: '0.04em' }}>
                      ĐỐI TƯỢNG 02
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                      ĐỐI VỚI CÁN BỘ SỬ DỤNG
                    </div>
                  </div>
                </div>

                {/* Content bullets from Slide 13 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                  {[
                    'Đối chiếu Bán/Mua tự động qua cặp liên thông hai chiều.',
                    'Duyệt & cấp số điện tử ngay trên hệ thống thay ký giấy, chuyển văn thư.',
                    'Truy vết trách nhiệm nhanh chóng qua mã QR & vòng đời bất biến.',
                    'Hậu kiểm lộ trình GPS · xuất báo cáo Nhập–Xuất–Tồn bằng vài thao tác.',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: '10px 14px',
                  backgroundColor: 'rgba(2, 132, 199, 0.06)',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#0284C7',
                  textAlign: 'center',
                }}
              >
                Rút ngắn thời gian xử lý thủ tục từ 2 ngày xuống vài phút
              </div>
            </div>

            {/* Column 3: Đối với Đơn vị (Doanh nghiệp & Toàn hệ thống) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                padding: '26px 28px',
                boxShadow: THEME_V2_2.shadows.card,
                border: '1.5px solid rgba(217, 119, 6, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: THEME_V2_2.colors.accentGold }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      backgroundColor: THEME_V2_2.colors.accentGoldLight,
                      color: THEME_V2_2.colors.accentGold,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={24} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: THEME_V2_2.colors.accentGold, letterSpacing: '0.04em' }}>
                      ĐỐI TƯỢNG 03
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
                      ĐỐI VỚI DOANH NGHIỆP
                    </div>
                  </div>
                </div>

                {/* Content bullets from Slide 13 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                  {[
                    'Dữ liệu tập trung, chuẩn hóa, có nhật ký bất biến → minh bạch tuyệt đối.',
                    'Phối hợp Công an – Doanh nghiệp thuận lợi, thông suốt và nhanh chóng.',
                    'Doanh nghiệp chuyển đổi số, giảm thời gian tổng hợp báo cáo định kỳ.',
                    'Nền tảng quản lý lâu dài, an toàn dữ liệu, có khả năng mở rộng quy mô.',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color={THEME_V2_2.colors.accentGold} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 13, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: '10px 14px',
                  backgroundColor: 'rgba(217, 119, 6, 0.08)',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  color: THEME_V2_2.colors.accentGold,
                  textAlign: 'center',
                }}
              >
                Minh bạch hóa dữ liệu, kiến tạo phát triển bền vững
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Part 2 (Frame 280 to 660): Grand Outro Screen with New Governance Slogan */}
      {isEnding && (
        <div
          style={{
            position: 'absolute',
            top: 104,
            left: 50,
            right: 50,
            bottom: 96,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            opacity: outroSpring,
            transform: `scale(${interpolate(outroSpring, [0, 1], [0.94, 1])})`,
          }}
        >
          {/* Main Card with Official Logo and New Slogan */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 30,
              padding: '48px 60px',
              boxShadow: THEME_V2_2.shadows.elevated,
              border: '2px solid rgba(185, 28, 28, 0.25)',
              textAlign: 'center',
              maxWidth: 1320,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Official Police Emblem Logo */}
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #D97706',
                boxShadow: '0 10px 35px rgba(185, 28, 28, 0.35)',
                marginBottom: 22,
                backgroundColor: '#FFFFFF',
              }}
            >
              <Img
                src={staticFile('logo-bo-cong-an.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: THEME_V2_2.colors.primary,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              CÔNG AN TỈNH QUẢNG NINH
            </div>

            <h1
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: THEME_V2_2.colors.headerNavy,
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
                backgroundColor: THEME_V2_2.colors.primary,
                margin: '0 auto 24px auto',
                borderRadius: 2,
              }}
            />

            {/* NEW GOVERNANCE DIGITAL TRANSFORMATION SLOGAN */}
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: THEME_V2_2.colors.headerNavy,
                backgroundColor: 'rgba(248, 250, 252, 0.95)',
                padding: '20px 44px',
                borderRadius: 40,
                border: '2px solid rgba(185, 28, 28, 0.3)',
                boxShadow: THEME_V2_2.shadows.card,
                display: 'inline-block',
                lineHeight: 1.45,
              }}
            >
              "TIÊN PHONG CHUYỂN ĐỔI SỐ CÔNG TÁC QUẢN TRỊ — KIẾN TẠO MÔI TRƯỜNG MINH BẠCH, HIỆU QUẢ VÌ SỰ PHÁT TRIỂN BỀN VỮNG"
            </div>
          </div>
        </div>
      )}

      <SubtitleBarV2_2
        text={
          frame < 280
            ? 'Hệ thống tạo bước đột phá trong chuyển đổi số công tác quản trị: Giúp Lãnh đạo chỉ đạo điều hành trên dữ liệu số thời gian thực, tối ưu hóa quy trình nghiệp vụ, minh bạch hóa thủ tục.'
            : 'Công an tỉnh Quảng Ninh: Tiên phong chuyển đổi số công tác quản trị, kiến tạo môi trường minh bạch, hiện đại và phát triển bền vững.'
        }
      />
    </AbsoluteFill>
  );
};
