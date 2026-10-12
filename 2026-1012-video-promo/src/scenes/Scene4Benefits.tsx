import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeaderBadge } from '../components/HeaderBadge';
import { SubtitleBar } from '../components/SubtitleBar';
import { THEME } from '../styles/theme';

export const Scene4Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const card1Spring = spring({ frame: frame - 30, fps, config: { damping: 15, stiffness: 90 } });
  const card2Spring = spring({ frame: frame - 50, fps, config: { damping: 15, stiffness: 90 } });
  const card3Spring = spring({ frame: frame - 70, fps, config: { damping: 15, stiffness: 90 } });

  const benefits = [
    {
      role: 'ĐỐI VỚI LÃNH ĐẠO',
      icon: '🏛️',
      color: '#059669',
      spring: card1Spring,
      items: [
        'Nắm trọn bức tranh tồn kho & lưu chuyển VLNCN toàn tỉnh thời gian thực.',
        'Hệ thống Dashboard phân tích & cảnh báo sớm hỗ trợ chỉ đạo điều hành.',
        'Chủ động giám sát trên dữ liệu thay vì chờ đợi báo cáo định kỳ.',
      ],
      metric: 'Real-time',
      metricLabel: 'Chỉ đạo trên dữ liệu',
    },
    {
      role: 'ĐỐI VỚI CÁN BỘ PC06',
      icon: '🛡️',
      color: '#0284C7',
      spring: card2Spring,
      items: [
        'Xóa bỏ khâu đối soát giấy tờ nhờ cặp liên thông tự động.',
        'Phê duyệt và cấp số điện tử nhanh chóng, giảm văn thư thủ công.',
        'Truy vết trách nhiệm tức thì qua QR Code và hậu kiểm lộ trình GPS.',
      ],
      metric: '2 ngày → Vài phút',
      metricLabel: 'Rút ngắn thời gian xử lý',
    },
    {
      role: 'ĐỐI VỚI DOANH NGHIỆP',
      icon: '🏭',
      color: '#D97706',
      spring: card3Spring,
      items: [
        'Tinh gọn tối đa thủ tục hành chính, chủ động kế hoạch xuất/nhập.',
        'Giảm tải thời gian lập báo cáo, dữ liệu chuẩn hóa và minh bạch.',
        'An toàn pháp lý, yên tâm vận hành sản xuất và chuyển đổi số.',
      ],
      metric: '100% Số hóa',
      metricLabel: 'Minh bạch thủ tục',
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: THEME.colors.bgGradient,
        fontFamily: THEME.fonts.main,
      }}
    >
      <HeaderBadge
        title="HIỆU QUẢ THIẾT THỰC & GIÁ TRỊ TOÀN DIỆN"
        subtitle="CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06"
        badge="GIÁ TRỊ CỐT LÕI"
      />

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
        <h1
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: THEME.colors.textDark,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Giá trị đột phá cho từng chủ thể tham gia
        </h1>
        <p
          style={{
            fontSize: 18,
            color: THEME.colors.textSecondary,
            margin: '8px 0 0 0',
          }}
        >
          Minh bạch – Nhanh chóng – An toàn tuyệt đối – Hỗ trợ doanh nghiệp phát triển bền vững
        </p>
      </div>

      {/* 3 Value Pillars */}
      <div
        style={{
          position: 'absolute',
          top: 250,
          left: 70,
          right: 70,
          display: 'flex',
          gap: 28,
          justifyContent: 'center',
        }}
      >
        {benefits.map((b, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: '36px 32px',
              boxShadow: THEME.shadows.card,
              border: `2px solid ${b.color}25`,
              borderTop: `6px solid ${b.color}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: b.spring,
              transform: `translateY(${(1 - b.spring) * 35}px)`,
              height: 520,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <span style={{ fontSize: 36 }}>{b.icon}</span>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: b.color,
                    letterSpacing: '0.02em',
                  }}
                >
                  {b.role}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {b.items.map((it, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: b.color,
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: THEME.colors.textDark,
                        fontWeight: 500,
                      }}
                    >
                      {it}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight metric badge */}
            <div
              style={{
                backgroundColor: `${b.color}10`,
                borderRadius: 16,
                padding: '16px 20px',
                border: `1px solid ${b.color}30`,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: b.color }}>
                {b.metric}
              </div>
              <div style={{ fontSize: 13, color: THEME.colors.textMuted, fontWeight: 600, marginTop: 4 }}>
                {b.metricLabel}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SubtitleBar
        text={
          frame < 300
            ? 'Hệ thống giúp Lãnh đạo nắm trọn bức tranh an ninh vật liệu nổ toàn tỉnh; Giúp cán bộ thực thi rút ngắn thời gian xử lý từ 2 ngày xuống chỉ còn vài phút;'
            : 'Đồng thời tạo điều kiện thuận lợi tối đa cho doanh nghiệp sản xuất, kinh doanh an toàn, minh bạch và phát triển bền vững.'
        }
      />
    </AbsoluteFill>
  );
};
