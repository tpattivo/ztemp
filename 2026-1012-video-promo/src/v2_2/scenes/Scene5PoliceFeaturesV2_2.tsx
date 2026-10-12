import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import {
  LayoutDashboard,
  GitMerge,
  FileCheck,
  Warehouse,
  Building2,
  Navigation,
  BarChart3,
} from 'lucide-react';
import { HeaderNavV2_2 } from '../components/HeaderNavV2_2';
import { SubtitleBarV2_2 } from '../components/SubtitleBarV2_2';
import { SimulatedWebBrowser, MenuItemConfig } from '../components/SimulatedWebBrowser';
import { THEME_V2_2 } from '../styles/themeV2_2';

export const Scene5PoliceFeaturesV2_2: React.FC = () => {
  const frame = useCurrentFrame();

  const isSecondHalf = frame >= 360;

  const menus: MenuItemConfig[] = [
    {
      id: 'tong_quan',
      label: 'Tổng quan',
      icon: LayoutDashboard,
      imageSrc: 'screenshots_v2/police_01_tong_quan.png',
    },
    {
      id: 'dang_ky_yeu_cau',
      label: 'Đăng ký & Yêu cầu',
      icon: GitMerge,
      imageSrc: 'screenshots/02_dang_ky_yeu_cau_lien_thong.png',
      badge: 'Liên thông',
    },
    {
      id: 'phieu_nhap_xuat',
      label: 'Phiếu nhập/xuất kho',
      icon: FileCheck,
      imageSrc: 'screenshots_v2/police_03_phieu_nhap_xuat.png',
    },
    {
      id: 'quan_ly_kho',
      label: 'Quản lý kho',
      icon: Warehouse,
      imageSrc: 'screenshots_v2/police_04_quan_ly_kho.png',
    },
    {
      id: 'doanh_nghiep',
      label: 'Doanh nghiệp',
      icon: Building2,
      imageSrc: 'screenshots_v2/police_05_doanh_nghiep.png',
    },
    {
      id: 'gps',
      label: 'Giám sát hành trình (GPS)',
      icon: Navigation,
      imageSrc: 'screenshots/07_giam_sat_gps.png',
      badge: 'Vệ tinh',
    },
    {
      id: 'bao_cao',
      label: 'Báo cáo Nhập – Xuất – Tồn',
      icon: BarChart3,
      imageSrc: 'screenshots_v2/police_07_bao_cao.png',
    },
  ];

  // Cursor movement timeline
  const cursorTimeline = !isSecondHalf
    ? {
        startX: 400,
        startY: 280,
        targetX: 230,
        targetY: 245, // Click "Đăng ký & Yêu cầu"
        startFrame: 30,
        clickFrame: 90,
      }
    : {
        startX: 230,
        startY: 245,
        targetX: 230,
        targetY: 415, // Move down and click "Giám sát hành trình (GPS)"
        startFrame: 370,
        clickFrame: 435,
      };

  return (
    <AbsoluteFill
      style={{
        background: THEME_V2_2.colors.bgGradient,
        fontFamily: THEME_V2_2.fonts.main,
      }}
    >
      <HeaderNavV2_2 currentChapter={5} />

      {/* Simulated Web Application Window */}
      <SimulatedWebBrowser
        portalTitle="CỔNG CÔNG AN (PC06) - TRUNG TÂM CHỈ HUY"
        url="vlncn.quangninh.gov.vn/ca/dashboard"
        menus={menus}
        activeMenuIndex={!isSecondHalf ? 1 : 5}
        cursorTimeline={cursorTimeline}
      />

      <SubtitleBarV2_2
        text={
          frame < 360
            ? 'Cổng Công an PC06 giữ vai trò trung tâm giám sát thông minh: Dashboard cảnh báo sớm kho vượt hạn mức; Cặp liên thông tự động đối chiếu hai chiều bên bán và bên mua, cấp số điện tử tức thì.'
            : 'Vòng đời vật liệu nổ được định danh bất biến qua mã QR; Hành trình xe vận chuyển được hậu kiểm minh bạch qua bản đồ GPS thời gian thực.'
        }
      />
    </AbsoluteFill>
  );
};
