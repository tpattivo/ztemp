import React from 'react';
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  Lock,
  Search,
  Bell,
  User,
  ExternalLink,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { THEME_V2_2 } from '../styles/themeV2_2';

export interface MenuItemConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  imageSrc: string;
  badge?: string;
}

interface SimulatedWebBrowserProps {
  portalTitle: string; // e.g. "CỔNG DOANH NGHIỆP" or "CỔNG CÔNG AN (PC06)"
  url: string;
  menus: MenuItemConfig[];
  activeMenuIndex: number;
  cursorTimeline?: {
    startX: number;
    startY: number;
    targetX: number;
    targetY: number;
    startFrame: number;
    clickFrame: number;
  };
}

export const SimulatedWebBrowser: React.FC<SimulatedWebBrowserProps> = ({
  portalTitle,
  url,
  menus,
  activeMenuIndex,
  cursorTimeline,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Window entrance spring
  const winSpring = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 90 } });

  // Cursor interpolation if provided
  let cursorX = 0;
  let cursorY = 0;
  let isClicking = false;
  let clickRipple = 0;

  if (cursorTimeline) {
    const { startX, startY, targetX, targetY, startFrame, clickFrame } = cursorTimeline;
    const t = interpolate(frame, [startFrame, clickFrame - 10], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    // Smooth ease out
    const ease = Math.min(1, Math.max(0, t));
    cursorX = startX + (targetX - startX) * ease;
    cursorY = startY + (targetY - startY) * ease;

    if (frame >= clickFrame && frame <= clickFrame + 30) {
      isClicking = true;
      clickRipple = interpolate(frame, [clickFrame, clickFrame + 25], [0, 1], {
        extrapolateRight: 'clamp',
      });
    }
  }

  const activeMenu = menus[activeMenuIndex] || menus[0];

  return (
    <div
      style={{
        position: 'absolute',
        top: 104,
        left: 60,
        right: 60,
        bottom: 96,
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        overflow: 'hidden',
        boxShadow: THEME_V2_2.shadows.elevated,
        border: '1px solid rgba(226, 232, 240, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        opacity: winSpring,
        transform: `scale(${interpolate(winSpring, [0, 1], [0.97, 1])})`,
      }}
    >
      {/* 1. Browser Window Top Chrome Bar */}
      <div
        style={{
          height: 44,
          backgroundColor: '#F1F5F9',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          padding: '0 18px',
          gap: 16,
          flexShrink: 0,
        }}
      >
        {/* macOS Traffic Lights */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
        </div>

        {/* URL Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: 620,
            height: 30,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            border: '1px solid #CBD5E1',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: 8,
            fontSize: 12,
            fontFamily: THEME_V2_2.fonts.main,
            color: '#334155',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
          }}
        >
          <Lock size={13} color="#16A34A" />
          <span style={{ fontWeight: 600, color: '#16A34A' }}>https://</span>
          <span style={{ fontWeight: 600, color: '#0F172A' }}>{url}</span>
        </div>

        {/* Right portal indicator */}
        <div
          style={{
            marginLeft: 'auto',
            fontSize: 12,
            fontWeight: 800,
            color: THEME_V2_2.colors.primary,
            backgroundColor: 'rgba(185, 28, 28, 0.08)',
            padding: '4px 14px',
            borderRadius: 20,
            border: '1px solid rgba(185, 28, 28, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#B91C1C' }} />
          {portalTitle}
        </div>
      </div>

      {/* 2. Web Application Shell (Header + Body) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Web Top Header */}
        <div
          style={{
            height: 58,
            backgroundColor: THEME_V2_2.colors.headerNavy,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
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
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                }}
              >
                HỆ THỐNG QUẢN LÝ VẬT LIỆU NỔ CÔNG NGHIỆP
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#FCA5A5',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                CÔNG AN TỈNH QUẢNG NINH · PHÒNG PC06
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '5px 12px',
                borderRadius: 16,
                fontSize: 12,
                color: '#E2E8F0',
              }}
            >
              <User size={14} />
              <span style={{ fontWeight: 600 }}>Tài khoản: {portalTitle}</span>
            </div>
            <div style={{ color: '#E2E8F0', position: 'relative' }}>
              <Bell size={18} />
              <span
                style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#EF4444',
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. Main Workspace: Sidebar Left + Content Right */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Sidebar Left */}
          <div
            style={{
              width: 330,
              backgroundColor: '#FFFFFF',
              borderRight: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 12px',
              gap: 6,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#64748B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                marginBottom: 4,
              }}
            >
              DANH MỤC NGHIỆP VỤ
            </div>

            {menus.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeMenuIndex;

              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: isActive ? 800 : 600,
                    fontFamily: THEME_V2_2.fonts.main,
                    backgroundColor: isActive ? THEME_V2_2.colors.primary : 'transparent',
                    color: isActive ? '#FFFFFF' : '#334155',
                    boxShadow: isActive ? '0 4px 12px rgba(185, 28, 28, 0.28)' : 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon size={18} strokeWidth={isActive ? 2.6 : 2.0} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: 11,
                        padding: '2px 8px',
                        borderRadius: 10,
                        backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#EFF6FF',
                        color: isActive ? '#FFFFFF' : '#2563EB',
                        fontWeight: 700,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight size={16} strokeWidth={2.8} />}
                </div>
              );
            })}
          </div>

          {/* Content Area Right (Displays Screenshots) */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#F8FAFC',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {activeMenu && (
              <Img
                src={staticFile(activeMenu.imageSrc)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top left',
                }}
              />
            )}

            {/* Subtle gradient overlay at bottom edge */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.04)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* 4. Simulated Interactive Cursor Overlay */}
      {cursorTimeline && (
        <div
          style={{
            position: 'absolute',
            left: cursorX,
            top: cursorY,
            pointerEvents: 'none',
            zIndex: 999,
          }}
        >
          {/* Click Ripple Effect */}
          {isClicking && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 50 * clickRipple,
                height: 50 * clickRipple,
                borderRadius: '50%',
                backgroundColor: 'rgba(185, 28, 28, 0.4)',
                border: '2px solid #B91C1C',
                transform: 'translate(-50%, -50%)',
                opacity: 1 - clickRipple,
              }}
            />
          )}

          {/* SVG Mouse Pointer */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))',
              transform: isClicking ? 'scale(0.88)' : 'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          >
            <path
              d="M3 3L10.07 20.97L12.58 13.58L19.97 11.07L3 3Z"
              fill={THEME_V2_2.colors.primary}
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
