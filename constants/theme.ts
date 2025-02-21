export const COLORS = {
  // Colores primarios
  primary: '#3F51B5',      // Azul índigo
  primaryDark: '#1A237E',  // Azul índigo oscuro
  
  // Colores de fondo
  background: '#121212',    // Negro material design (para exterior)
  backgroundLight: '#FFFFFF', // Blanco (para áreas de lectura)
  backgroundDark: '#000000',  // Negro puro
  white: '#FFFFFF',
  
  // Colores de texto
  text: {
    primary: '#212121',    // Casi negro (para texto en áreas blancas)
    secondary: '#424242',  // Gris oscuro (para texto secundario en áreas blancas)
    light: '#E0E0E0',     // Gris claro (para texto en áreas oscuras)
    white: '#FFFFFF',      // Blanco
  },
  
  // Colores de gradiente
  gradient: {
    primary: ['#3F51B5', '#1A237E'] as const,  // Azul índigo a azul oscuro
    card: ['#FFFFFF', '#F5F5F5'] as const,     // Blanco a gris muy claro
  },
  
  // Colores de overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  
  // Colores de sombra
  shadow: '#000000',

  light: {
    primary: '#6366f1',
    background: '#ffffff',
    backgroundLight: '#f5f5f5',
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      white: '#ffffff',
      light: '#e5e7eb',
    },
    gradient: {
      primary: ['#6366f1', '#4f46e5'] as const,
      card: ['#ffffff', '#f9fafb'] as const,
    },
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  dark: {
    primary: '#818cf8',
    background: '#111827',
    backgroundLight: '#1f2937',
    text: {
      primary: '#f3f4f6',
      secondary: '#d1d5db',
      white: '#ffffff',
      light: '#9ca3af',
    },
    gradient: {
      primary: ['#4f46e5', '#3730a3'] as const,
      card: ['#1f2937', '#111827'] as const,
    },
    overlay: 'rgba(0, 0, 0, 0.85)',
  },
};

export const SHADOWS = {
  light: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};
