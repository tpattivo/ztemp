import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  FileText,
  Clock,
  Navigation,
  Database,
  WifiOff,
  GitFork,
  AlertTriangle,
} from 'lucide-react';
import { HeaderNavV2 } from '../components/HeaderNavV2';
import { SubtitleBarV2 } from '../components/SubtitleBarV2';
import { THEME_V2 } from '../styles/themeV2';

export const Scene2PainPointsV2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 90 } });

  const painPoints = [
    {
      icon: FileText,
      tag: 'ĐIỂM NGHẼN 01',
      title: 'Đối soát Bán / Mua thủ công',
      desc: 'Phụ thuộc chứng từ giấy, sai lệch số lượng phát hiện muộn, dễ sót.',
      color: '#DC2626',
      bg: '#FEE2E2',
    },
    {
      icon: Clock,
      tag: 'ĐIỂM NGHẼN 02',
      title: 'Xác nhận kho mất 0,5 – 02 ngày',
      desc: 'Quy trình văn thư giấy tờ phát sinh thời gian, chi phí cho doanh nghiệp.',
      color: '#EA580C',
      bg: '#FFEDD5',
    },
    {
      icon: Navigation,
      tag: 'ĐIỂM NGHẼN 03',
      title: 'GPS lưu riêng tại từng doanh nghiệp',
      desc: 'Công an khó đối chiếu, hậu kiểm hành trình và điểm dừng đỗ thực tế.',
      color: '#D97706',
      bg: '#FEF3C7',
    },
    {
      icon: Database,
      tag: 'ĐIỂM NGHẼN 04',
      title: 'Báo cáo tồn kho định kỳ, phân tán',
      desc: 'Cơ quan quản lý không nắm được số lượng tồn tại từng thời điểm.',
      color: '#2563EB',
      bg: '#DBEAFE',
    },
    {
      icon: WifiOff,
      tag: 'ĐIỂM NGHẼN 05',
      title: 'Vùng cấm sóng tại cửa lò & hầm sâu',
      desc: 'Không có Internet, nghiệp vụ tại chỗ trước đây bắt buộc phải dùng giấy.',
      color: '#7C3AED',
      bg: '#EDE9FE',
    },
    {
      icon: GitFork,
      tag: 'ĐIỂM NGHẼN 06',
      title: 'Phần mềm nội bộ không liên thông',
      desc: 'Tăng chi phí kết nối, rủi ro phân mảnh dữ liệu giữa các chủ thể.',
      color: '#0D9488',
      bg: '#CCFBF1',
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2.colors.bgGradient,
        fontFamily: THEME_V2.fonts.main,
      }}
    >
      <HeaderNavV2 currentChapter={2} />

      {/* Title Section */}
      <div
        style={{
          position: 'absolute',
          top: 105,
          left: 80,
          right: 80,
          textAlign: 'center',
          opacity: titleSpring,
          transform: `translateY(${(1 - titleSpring) * 20}px)`,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(220, 38, 38, 0.08)',
            border: '1px solid rgba(220, 38, 38, 0.25)',
            padding: '6px 18px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 700,
            color: THEME_V2.colors.danger,
            marginBottom: 12,
            letterSpacing: '0.04em',
          }}
        >
          <AlertTriangle size={15} strokeWidth={2.4} />
          KHẢO SÁT THỰC TẾ TẠI PC06 VÀ CÁC DOANH NGHIỆP TRỌNG ĐIỂM
        </div>

        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: THEME_V2.colors.textPrimary,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Những điểm nghẽn của phương thức quản lý truyền thống
        </h1>
        <p
          style={{
            fontSize: 17,
            color: THEME_V2.colors.textSecondary,
            margin: '8px 0 0 0',
          }}
        >
          Hóa chất mỏ Quảng Ninh · Than Núi Béo · Than Uông Bí · Các đơn vị vận chuyển & sử dụng VLNCN
        </p>
      </div>

      {/* Grid of 6 Pain Points */}
      <div
        style={{
          position: 'absolute',
          top: 240,
          left: 100,
          right: 100,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 22,
        }}
      >
        {painPoints.map((item, idx) => {
          const itemSpring = spring({
            frame: frame - 25 - idx * 8,
            fps,
            config: { damping: 15, stiffness: 95 },
          });

          const IconComponent = item.icon;

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 18,
                padding: '22px 24px',
                boxShadow: THEME_V2.shadows.card,
                border: '1px solid rgba(226, 232, 240, 0.9)',
                opacity: itemSpring,
                transform: `translateY(${(1 - itemSpring) * 25}px)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 185,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      backgroundColor: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent size={20} strokeWidth={2.2} />
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: '0.05em',
                      backgroundColor: item.bg,
                      padding: '4px 10px',
                      borderRadius: 6,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: THEME_V2.colors.textPrimary,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </div>
              </div>

              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: THEME_V2.colors.textMuted,
                  marginTop: 8,
                }}
              >
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>

      <SubtitleBarV2 text="Khảo sát tại PC06 và 3 doanh nghiệp lớn chỉ rõ: Phương thức thủ công phụ thuộc giấy tờ gây chậm trễ, khó đối soát GPS và gián đoạn tại vùng cửa lò cấm sóng." />
    </AbsoluteFill>
  );
};
