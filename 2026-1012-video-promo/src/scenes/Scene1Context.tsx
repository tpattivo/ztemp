import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderBadge } from '../components/HeaderBadge';
import { SubtitleBar } from '../components/SubtitleBar';
import { THEME } from '../styles/theme';

export const Scene1Context: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Switch from Bay photo to Coal mine photo around frame 300 (10s)
  const isSecondHalf = frame >= 280;

  // Ken Burns zoom
  const zoom1 = interpolate(frame, [0, 300], [1.0, 1.08], { extrapolateRight: 'clamp' });
  const zoom2 = interpolate(frame, [280, 600], [1.0, 1.08], { extrapolateRight: 'clamp' });

  // Fade transition between photos
  const photo2Opacity = interpolate(frame, [270, 300], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Entrance spring for Metric Card
  const cardSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Entrance spring for Pain Points (after frame 320)
  const painSpring = spring({
    frame: frame - 320,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: THEME.colors.bgLight }}>
      {/* Background B-roll with gentle dark-to-light gradient overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Img
          src={staticFile('broll/01_quang_ninh_bay.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${zoom1})`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: photo2Opacity,
          }}
        >
          <Img
            src={staticFile('broll/02_coal_mine_qn.jpg')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${zoom2})`,
            }}
          />
        </div>

        {/* Clean Light-Glass wash overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.78) 55%, rgba(255, 255, 255, 0.35) 100%)',
          }}
        />
      </div>

      <HeaderBadge
        title="BỐI CẢNH ĐẶC THÙ & ĐÒI HỎI BẢO ĐẢM AN NINH"
        subtitle="CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06"
        badge="TRỌNG ĐIỂM QUỐC GIA"
      />

      {/* Main Content Area */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 80,
          width: 900,
          zIndex: 10,
        }}
      >
        {/* Title Tag */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            color: THEME.colors.primary,
            border: '1px solid rgba(5, 150, 105, 0.3)',
            padding: '8px 20px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '0.05em',
            marginBottom: 20,
          }}
        >
          ĐỊA BÀN CHIẾN LƯỢC CẢ NƯỚC VỀ KHAI THÁC KHOÁNG SẢN
        </div>

        <h1
          style={{
            fontSize: 50,
            lineHeight: 1.2,
            fontWeight: 800,
            color: THEME.colors.textDark,
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
          }}
        >
          Thách thức trong quản lý <br />
          <span style={{ color: THEME.colors.primary }}>Vật liệu nổ công nghiệp</span>
        </h1>

        {/* First Half: Big Stat Cards */}
        {!isSecondHalf && (
          <div
            style={{
              display: 'flex',
              gap: 24,
              opacity: cardSpring,
              transform: `translateY(${(1 - cardSpring) * 30}px)`,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 20,
                padding: '30px 40px',
                boxShadow: THEME.shadows.card,
                border: '1px solid rgba(16, 185, 129, 0.25)',
                flex: 1,
              }}
            >
              <div style={{ fontSize: 72, fontWeight: 900, color: THEME.colors.primary, lineHeight: 1 }}>
                58
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: THEME.colors.textDark, marginTop: 8 }}>
                Kho VLNCN Đang hoạt động
              </div>
              <div style={{ fontSize: 15, color: THEME.colors.textMuted, marginTop: 6 }}>
                Phục vụ khai thác than hầm lò, lộ thiên và vật liệu xây dựng
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 20,
                padding: '30px 40px',
                boxShadow: THEME.shadows.card,
                border: '1px solid rgba(16, 185, 129, 0.25)',
                flex: 1,
              }}
            >
              <div style={{ fontSize: 72, fontWeight: 900, color: THEME.colors.accentGold, lineHeight: 1 }}>
                24/7
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: THEME.colors.textDark, marginTop: 8 }}>
                Lưu chuyển thuốc nổ & kíp
              </div>
              <div style={{ fontSize: 15, color: THEME.colors.textMuted, marginTop: 6 }}>
                Đòi hỏi giám sát nghiêm ngặt tuyệt đối về an ninh & an toàn
              </div>
            </div>
          </div>
        )}

        {/* Second Half: 3 Pain points */}
        {isSecondHalf && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              opacity: painSpring,
              transform: `translateY(${(1 - painSpring) * 20}px)`,
            }}
          >
            {[
              {
                title: 'Đối soát Bán / Mua thủ công',
                desc: 'Phụ thuộc hồ sơ giấy, khó đồng bộ số liệu giữa bên bán và bên mua.',
                badge: 'ĐIỂM NGHẼN 01',
              },
              {
                title: 'Kiểm tra, xác nhận kho kéo dài 0,5 – 02 ngày',
                desc: 'Thủ tục văn thư gây phát sinh chi phí và thời gian cho doanh nghiệp.',
                badge: 'ĐIỂM NGHẼN 02',
              },
              {
                title: 'Dữ liệu hành trình GPS phân tán',
                desc: 'Cơ quan quản lý khó hậu kiểm lộ trình vận chuyển và số lượng tồn kho tức thời.',
                badge: 'ĐIỂM NGHẼN 03',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '20px 28px',
                  borderRadius: 16,
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  boxShadow: THEME.shadows.card,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FEE2E2',
                    color: '#DC2626',
                    fontSize: 12,
                    fontWeight: 800,
                    padding: '6px 12px',
                    borderRadius: 8,
                    letterSpacing: '0.05em',
                  }}
                >
                  {p.badge}
                </div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 700, color: THEME.colors.textDark }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 14, color: THEME.colors.textMuted, marginTop: 2 }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subtitles */}
      <SubtitleBar
        text={
          frame < 300
            ? 'Quảng Ninh – trung tâm công nghiệp khai khoáng lớn nhất cả nước, với 58 kho chứa vật liệu nổ công nghiệp đang hoạt động ngày đêm.'
            : 'Khối lượng lưu chuyển khổng lồ đặt ra yêu cầu cấp thiết: Chuyển dịch phương thức quản lý sang giám sát tập trung trên nền tảng dữ liệu số.'
        }
      />
    </AbsoluteFill>
  );
};
