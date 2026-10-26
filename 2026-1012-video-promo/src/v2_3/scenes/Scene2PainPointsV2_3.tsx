import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  FileText,
  Clock,
  Navigation,
  Database,
  WifiOff,
  GitFork,
  AlertOctagon,
  Flame,
} from 'lucide-react';
import { HeaderNavV2_3 } from '../components/HeaderNavV2_3';
import { SubtitleBarV2_3 } from '../components/SubtitleBarV2_3';
import { BackgroundMeshV2_3 } from '../components/BackgroundMeshV2_3';
import { THEME_V2_3 } from '../styles/themeV2_3';

export const Scene2PainPointsV2_3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 16, stiffness: 90 } });

  const painPoints = [
    {
      num: '01',
      icon: FileText,
      tag: 'CHỨNG TỪ GIẤY',
      title: 'Đối soát Bán / Mua thủ công',
      desc: 'Phụ thuộc chứng từ giấy tờ, sai lệch số lượng phát hiện muộn, nguy cơ thất thoát dữ liệu và rủi ro pháp lý.',
      color: '#EF4444',
      bgGlow: 'rgba(239, 68, 68, 0.25)',
    },
    {
      num: '02',
      icon: Clock,
      tag: 'THỦ TỤC KÉO DÀI',
      title: 'Xác nhận kho mất 0,5 – 02 ngày',
      desc: 'Quy trình văn thư thủ công qua nhiều khâu, phát sinh chi phí trung gian và làm gián đoạn tiến độ nổ mìn than.',
      color: '#F97316',
      bgGlow: 'rgba(249, 115, 22, 0.25)',
    },
    {
      num: '03',
      icon: Navigation,
      tag: 'GIÁM SÁT RỜI RẠC',
      title: 'GPS lưu riêng tại từng doanh nghiệp',
      desc: 'Dữ liệu hành trình phân tán, lực lượng Công an khó đối chiếu, hậu kiểm lộ trình và các điểm dừng đỗ thực tế.',
      color: '#F59E0B',
      bgGlow: 'rgba(245, 158, 11, 0.25)',
    },
    {
      num: '04',
      icon: Database,
      tag: 'BÁO CÁO THIẾU REALTIME',
      title: 'Tồn kho phân tán, chậm cảnh báo',
      desc: 'Cơ quan quản lý không nắm bắt được số lượng tồn kho tức thời tại 58 kho mỏ than, thiếu cơ chế cảnh báo sớm.',
      color: '#0EA5E9',
      bgGlow: 'rgba(14, 165, 233, 0.25)',
    },
    {
      num: '05',
      icon: WifiOff,
      tag: 'ĐỨT GÃY TẠI CHỖ',
      title: 'Vùng cấm sóng hầm lò & sâu lòng đất',
      desc: 'Khu vực hầm lò sâu dưới mực nước biển hoàn toàn không có sóng, nghiệp vụ trước đây bắt buộc ghi chép sổ tay.',
      color: '#A855F7',
      bgGlow: 'rgba(168, 85, 247, 0.25)',
    },
    {
      num: '06',
      icon: GitFork,
      tag: 'DỮ LIỆU ĐÓNG BĂNG',
      title: 'Thiếu liên thông Doanh nghiệp - Công an',
      desc: 'Dữ liệu giữa các đơn vị ngành than, doanh nghiệp vận tải và cơ quan quản lý nhà nước không kết nối đồng bộ.',
      color: '#E11D48',
      bgGlow: 'rgba(225, 29, 72, 0.25)',
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_V2_3.colors.bgBase, fontFamily: THEME_V2_3.fonts.main }}>
      <BackgroundMeshV2_3 accentColor="#EF4444" />
      <HeaderNavV2_3 currentChapter={2} />

      {/* Main Container */}
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
        }}
      >
        {/* Header Bar */}
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
            opacity: titleSpring,
            transform: `translateY(${(1 - titleSpring) * -15}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlertOctagon size={20} color={THEME_V2_3.colors.primaryBright} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: THEME_V2_3.colors.textWhite }}>
                6 ĐIỂM NGHẼN TRỌNG YẾU TỪ KHẢO SÁT THỰC TẾ
              </div>
              <div style={{ fontSize: 12, color: THEME_V2_3.colors.goldChampagne, fontWeight: 500 }}>
                Báo cáo hiện trạng công tác quản lý Nhà nước về VLNCN — Công an tỉnh Quảng Ninh
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: THEME_V2_3.colors.primaryBright,
              backgroundColor: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              padding: '6px 14px',
              borderRadius: 20,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            YÊU CẦU CẤP THIẾT PHẢI ĐỔI MỚI
          </div>
        </div>

        {/* 3x2 Bento Matrix of Friction Points */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {painPoints.map((p, idx) => {
            const cardSpring = spring({
              frame: frame - (15 + idx * 8),
              fps,
              config: { damping: 15, stiffness: 90 },
            });

            const IconComp = p.icon;

            return (
              <div
                key={p.num}
                style={{
                  position: 'relative',
                  backgroundColor: THEME_V2_3.colors.surfaceGlass,
                  backdropFilter: 'blur(20px)',
                  borderRadius: 18,
                  padding: '22px 24px',
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                  boxShadow: `${THEME_V2_3.shadows.card}, inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  opacity: cardSpring,
                  transform: `translateY(${(1 - cardSpring) * 20}px) scale(${cardSpring * 0.03 + 0.97})`,
                }}
              >
                {/* Ambient Top Glow Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    right: '15%',
                    height: 2,
                    background: `linear-gradient(to right, transparent, ${p.color}, transparent)`,
                    boxShadow: `0 0 10px ${p.color}`,
                  }}
                />

                {/* Top Row: Icon & Number Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: p.bgGlow,
                      border: `1px solid ${p.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp size={22} color={p.color} />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: p.color,
                        letterSpacing: '0.08em',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '3px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 14,
                        fontWeight: 800,
                        color: THEME_V2_3.colors.textSubtle,
                      }}
                    >
                      #{p.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ marginTop: 12 }}>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: THEME_V2_3.colors.textWhite,
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: THEME_V2_3.colors.textSecondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SubtitleBarV2_3 text="Khảo sát thực tế chỉ ra 6 điểm nghẽn lớn từ đối soát thủ công, xác nhận kéo dài 0,5 - 2 ngày đến dữ liệu GPS phân tán." />
    </AbsoluteFill>
  );
};
