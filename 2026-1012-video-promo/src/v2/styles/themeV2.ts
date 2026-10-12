import { loadFont } from '@remotion/google-fonts/Inter';

// Load Inter font with full Vietnamese subset
export const { fontFamily: interFont } = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
  subsets: ['vietnamese', 'latin'],
});

export const THEME_V2 = {
  colors: {
    bgLight: '#FAFBFD',
    bgGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F3F8F5 50%, #EBF4F0 100%)',
    bgCard: '#FFFFFF',
    bgCardTranslucent: 'rgba(255, 255, 255, 0.92)',
    
    // Executive Pine / Emerald Palette
    primary: '#059669', // Emerald 600
    primaryDark: '#064E3B', // Deep Pine 900
    primaryLight: '#10B981', // Mint 500
    primaryUltraLight: '#ECFDF5', // Mint 50
    primaryBorder: 'rgba(5, 150, 105, 0.18)',

    // Accents
    accentGold: '#B45309', // Amber 700
    accentGoldLight: '#FEF3C7', // Amber 100
    accentBlue: '#0284C7', // Sky 600
    accentBlueLight: '#E0F2FE', // Sky 100
    accentPurple: '#7C3AED',
    accentPurpleLight: '#EDE9FE',
    danger: '#DC2626',
    dangerLight: '#FEE2E2',

    // Slate Typography
    textPrimary: '#0F172A',
    textSecondary: '#334155',
    textMuted: '#64748B',
    textSubtle: '#94A3B8',

    // Borders & Glass
    border: 'rgba(226, 232, 240, 0.85)',
    borderActive: 'rgba(5, 150, 105, 0.4)',
  },
  shadows: {
    soft: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
    card: '0 20px 40px -12px rgba(6, 78, 59, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
    float: '0 30px 60px -15px rgba(6, 78, 59, 0.12), 0 0 0 1px rgba(5, 150, 105, 0.1)',
    glow: '0 0 25px rgba(16, 185, 129, 0.2)',
  },
  fonts: {
    main: `${interFont}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  },
};
