export const COLORS = {
  // Colores primarios
  primary: "#1a237e",
  primaryDark: "#283593",

  // Colores de fondo
  background: "#f0f0f0",
  backgroundLight: "#f9f9f9",
  white: "#ffffff",

  // Colores de texto
  text: {
    primary: "#333333",
    secondary: "#555555",
    light: "#e0e0e0",
    white: "#ffffff",
  },

  // Colores de gradiente
  gradient: {
    primary: ["#1a237e", "#283593"] as const,
    card: ["#ffffff", "#f5f5f5"] as const,
  },

  // Colores de overlay
  overlay: "rgba(0, 0, 0, 0.5)",

  // Colores de sombra
  shadow: "#000000",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};
