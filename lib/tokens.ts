// Hermes KR Design System tokens
// Used for dynamic styling where CSS variables aren't sufficient

export const hermesTokens = {
  colors: {
    primary: "#0f62fe",
    primaryHover: "#0353e9",
    primaryActive: "#002d9c",
    surfaceDark: "#041c1c",
    surfaceDarkAlt: "#0a2e2e",
    surfaceDarkHover: "#0f3a3a",
    cream: "#ffe6cb",
    creamMuted: "#f5dcc6",
    creamPale: "#faf0e6",
    textPrimary: "#f0e6d9",
    textSecondary: "#c4b8a8",
    textDisabled: "#8a7f72",
    error: "#da1e28",
    success: "#24a148",
    warning: "#f1c21b",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "9999px",
  },
} as const;
