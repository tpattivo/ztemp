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
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene2PainPointsV2_2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 90 } });

  const painPoints = [
    {
      icon: FileText,
      tag: 'ĐIỂM NGHẼN 01',
      title: 'Đối soát Bán / Mua thủ công',
      desc: 'Phụ thuộc hoàn toàn vào chứng từ giấy, sai lệch số lượng phát hiện muộn, dễ thất thoát dữ liệu.',
      color: '#DC2626',
      bg: '#FEE2E2',
    },
    {
      icon: Clock,
      tag: 'ĐIỂM NGHẼN 02',
      title: 'Xác nhận kho mất 0,5 – 02 ngày',
      desc: 'Quy trình văn thư giấy tờ phát sinh thời gian, tăng chi phí và ảnh hưởng tiến độ sản xuất.',
      color: '#EA580C',
      bg: '#FFEDD5',
    },
    {
      icon: Navigation,
      tag: 'ĐIỂM NGHẼN 03',
      title: 'GPS lưu riêng tại từng doanh nghiệp',
      desc: 'Dữ liệu phân tán, lực lượng Công an khó đối chiếu, hậu kiểm hành trình và điểm dừng đỗ thực tế.',
      color: '#D97706',
      bg: '#FEF3C7',
    },
    {
      icon: Database,
      tag: 'ĐIỂM NGHẼN 04',
      title: 'Báo cáo tồn kho định kỳ, phân tán',
      desc: 'Cơ quan quản lý không nắm bắt được số lượng tồn kho tức thời tại từng mỏ than và kho dự trữ.',
      color: '#2563EB',
      bg: '#DBEAFE',
    },
    {
      icon: WifiOff,
      tag: 'ĐIỂM NGHẼN 05',
      title: 'Vùng cấm sóng tại cửa lò & hầm sâu',
      desc: 'Khu vực hầm lò không có sóng viễn thông, nghiệp vụ tại chỗ trước đây bắt buộc phải ghi sổ tay.',
      color: '#7C3AED',
      bg: '#F3E8FF',
    },
    {
      icon: GitFork,
      tag: 'ĐIỂM NGHẼN 06',
      title: 'Nguy cơ đứt gãy thông tin quản lý',
      desc: 'Thiếu cơ sở dữ liệu số tập trung, việc phối hợp kiểm tra liên ngành mất nhiều thời gian, công sức.',
      color: '#B91C1C',
      bg: '#FFE4E6',
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={2} />

      {/* Main Container - Spread evenly from top: 110 to bottom: 100 */}
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
        {/* Section Title Header Banner */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            padding: '24px 36px',
            boxShadow: THEME_V2_2.shadows.card,
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: titleSpring,
            transform: `translateY(${(1 - titleSpring) * 15}px)`,
          }}
        >
          <div>
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
                color: '#DC2626',
                marginBottom: 8,
              }}
            >
              <AlertTriangle size={15} strokeWidth={2.4} />
              THỰC TRẠNG QUẢN LÝ THỦ CÔNG TRUYỀN THỐNG
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: THEME_V2_2.colors.textPrimary }}>
              6 ĐIỂM NGHẼN LỚN ĐƯỢC CHỈ RA QUA KHẢO SÁT THỰC TẾ PC06
            </div>
          </div>

          <div
            style={{
              padding: '12px 24px',
              backgroundColor: '#FEF2F2',
              borderRadius: 16,
              border: '1px solid #FECACA',
              textAlign: 'right',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: '#991B1B' }}>ĐƠN VỊ KHẢO SÁT TRỌNG ĐIỂM</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: THEME_V2_2.colors.primary, marginTop: 2 }}>
              Hóa chất mỏ · Than Núi Béo · Than Uông Bí
            </div>
          </div>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) filling entire height */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 22,
            flex: 1,
            marginTop: 18,
          }}
        >
          {painPoints.map((item, i) => {
            const cardSpring = spring({
              frame: frame - (15 + i * 5),
              fps,
              config: { damping: 15, stiffness: 85 },
            });
            const IconComponent = item.icon;

            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  padding: '24px 28px',
                  boxShadow: THEME_V2_2.shadows.card,
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: cardSpring,
                  transform: `translateY(${(1 - cardSpring) * 20}px)`,
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
                    height: 4,
                    backgroundColor: item.color,
                  }}
                />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        backgroundColor: item.bg,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent size={24} strokeWidth={2.4} />
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: item.color,
                        letterSpacing: '0.06em',
                        backgroundColor: item.bg,
                        padding: '4px 12px',
                        borderRadius: 12,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: 20, fontWeight: 800, color: THEME_V2_2.colors.textPrimary, lineHeight: 1.3 }}>
                    {item.title}
                  </div>
                </div>

                <div style={{ fontSize: 14, color: THEME_V2_2.colors.textSecondary, lineHeight: 1.5, marginTop: 10 }}>
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SubtitleBarV2_2 text="Qua khảo sát thực tế tại Phòng PC06 và các đơn vị trọng điểm ngành than, phương thức quản lý thủ công trước đây bộc lộ nhiều điểm nghẽn, từ xác nhận kho, đối soát số liệu đến vùng cấm sóng." />
    </AbsoluteFill>
  );
};
