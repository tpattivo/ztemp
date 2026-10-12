import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import {
  LayoutDashboard,
  FileSpreadsheet,
  QrCode,
  Warehouse,
  Truck,
  FileCheck,
} from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { SimulatedWebBrowser, MenuItemConfig } from '../components/SimulatedWebBrowser';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene4EnterpriseV2_2: React.FC = () => {
  const frame = useCurrentFrame();

  const isSecondHalf = frame >= 340;

  const menus: MenuItemConfig[] = [
    {
      id: 'tong_quan',
      label: 'Tổng quan',
      icon: LayoutDashboard,
      imageSrc: 'screenshots_v2/police_01_tong_quan.png',
    },
    {
      id: 'dang_ky',
      label: 'Đăng ký & Yêu cầu',
      icon: FileSpreadsheet,
      imageSrc: 'screenshots/02_dang_ky_yeu_cau_lien_thong.png',
      badge: 'Trực tuyến',
    },
    {
      id: 'phieu_xuat_nhap',
      label: 'Phiếu nhập/xuất kho (QR)',
      icon: QrCode,
      imageSrc: 'screenshots/03_phieu_nhap_xuat_kho.png',
      badge: 'Offline',
    },
    {
      id: 'quan_ly_kho',
      label: 'Quản lý kho & Sức chứa',
      icon: Warehouse,
      imageSrc: 'screenshots/04_quan_ly_kho_ton.png',
    },
    {
      id: 'phuong_tien',
      label: 'Phương tiện & Lộ trình',
      icon: Truck,
      imageSrc: 'screenshots/07_giam_sat_gps.png',
    },
    {
      id: 'bao_cao_ca_no',
      label: 'Báo cáo nghiệm thu ca nổ',
      icon: FileCheck,
      imageSrc: 'screenshots/03_phieu_nhap_xuat_kho.png',
    },
  ];

  // Cursor movement timeline
  const cursorTimeline = !isSecondHalf
    ? {
        startX: 400,
        startY: 280,
        targetX: 230,
        targetY: 340, // Click "Quản lý kho & Sức chứa"
        startFrame: 30,
        clickFrame: 90,
      }
    : {
        startX: 230,
        startY: 340,
        targetX: 230,
        targetY: 285, // Move up and click "Phiếu nhập/xuất kho (QR)"
        startFrame: 350,
        clickFrame: 410,
      };

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={4} />

      {/* Simulated Web Application Window */}
      <SimulatedWebBrowser
        portalTitle="CỔNG DOANH NGHIỆP SỬ DỤNG VLNCN"
        url="vlncn.quangninh.gov.vn/portal/enterprise"
        menus={menus}
        activeMenuIndex={!isSecondHalf ? 3 : 2}
        cursorTimeline={cursorTimeline}
      />

      <SubtitleBarV2_2
        text={
          frame < 340
            ? 'Tại Cổng Doanh nghiệp, mọi thao tác được số hóa toàn trình: Đơn vị lập đăng ký tiếp nhận, đề nghị xuất kho gửi trực tuyến; Phiếu xuất nhập tự động cập nhật sổ tồn theo tỷ lệ sức chứa.'
            : 'Đặc biệt, cơ chế in phiếu kèm mã QR thông minh cho phép ghi nhận an toàn tại cửa lò mất sóng và tự động đồng bộ ngay khi kết nối lại mạng.'
        }
      />
    </AbsoluteFill>
  );
};
