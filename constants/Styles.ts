import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: "#8B5CF6", // Purple
    primaryGradient: "#A78BFA",
    secondary: "#10B981", // Bright Green
    accent: "#D8B4FE", // Light Purple
    background: "#0F0F0F", // Very dark
    surface: "#1A1A1A", // Dark grey card
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    textGrey: "#A1A1AA",
    border: "#262626",
    success: "#00FF00", // Neon Green
    neonGreen: "#00E676",
  },
  spacing: {
    padding: 20,
    gap: 12,
    section: 32,
  }
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  h1: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 36,
  },
  h2: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  h3: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#8B5CF6',
    letterSpacing: 0.5,
  },
  body: {
    fontSize: 13,
    color: '#A1A1AA',
    lineHeight: 18,
  },
  labelSm: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  labelXs: {
    fontSize: 9,
    fontWeight: '600',
    color: '#A1A1AA',
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#262626',
    backgroundColor: 'transparent',
  },
  pillActive: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 16,
  },
  rewardText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#00E676',
    textShadowColor: 'rgba(0, 230, 118, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  }
});
