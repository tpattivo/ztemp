import { loadFont } from '@remotion/google-fonts/Inter';

// Load Inter font with full Vietnamese subset
export const { fontFamily: interFont } = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
  subsets: ['vietnamese', 'latin'],
});

export const THEME_V2_3 = {
  colors: {
    // Canvas Base: Deep Command Navy & Obsidian Night
    bgBase: '#040812',
    bgDarkGradient: 'radial-gradient(ellipse 80% 60% at 50% -10%, #0c1b33 0%, #040812 100%)',
    bgMeshGradient: 'linear-gradient(135deg, #060D1E 0%, #030712 50%, #081024 100%)',

    // Frosted Glass Surfaces (VibeCurb Titanium / Glassmorphism)
    surfaceGlass: 'rgba(12, 22, 42, 0.72)',
    surfaceGlassHover: 'rgba(18, 32, 60, 0.85)',
    surfaceCard: 'rgba(10, 19, 36, 0.82)',
    surfaceElevated: 'rgba(15, 27, 50, 0.94)',

    // Primary Identity: Police Crimson Red (High-dynamic range & laser glow)
    primary: '#DC2626',
    primaryBright: '#EF4444',
    primaryDark: '#991B1B',
    primaryDeep: '#7F1D1D',
    primaryGlow: 'rgba(239, 68, 68, 0.45)',
    primaryGlass: 'rgba(220, 38, 38, 0.15)',

    // Golden Honors (Logo Bộ Công An & Official Highlights)
    gold: '#F59E0B',
    goldBright: '#FBBF24',
    goldDeep: '#D97706',
    goldChampagne: '#FEF3C7',
    goldGlow: 'rgba(245, 158, 11, 0.4)',
    goldGlass: 'rgba(245, 158, 11, 0.14)',

    // Tech Accents (Command Cyan & Emerald Security)
    cyan: '#06B6D4',
    cyanBright: '#38BDF8',
    cyanGlow: 'rgba(6, 182, 212, 0.35)',
    emerald: '#10B981',
    emeraldGlow: 'rgba(16, 185, 129, 0.35)',

    // Neutral Typography
    textWhite: '#FFFFFF',
    textPrimary: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    textSubtle: '#64748B',

    // Borders & Specular Lines
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderGlass: 'rgba(255, 255, 255, 0.14)',
    borderHighlight: 'rgba(255, 255, 255, 0.28)',
    borderPrimary: 'rgba(239, 68, 68, 0.4)',
    borderGold: 'rgba(245, 158, 11, 0.4)',
  },
  fonts: {
    main: `${interFont}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  },
  shadows: {
    ambient: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
    card: '0 16px 40px -10px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
    elevated: '0 24px 60px -12px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.12)',
    glowRed: '0 0 35px -5px rgba(239, 68, 68, 0.45)',
    glowGold: '0 0 35px -5px rgba(245, 158, 11, 0.45)',
    glowCyan: '0 0 30px -5px rgba(6, 182, 212, 0.35)',
  },
};
