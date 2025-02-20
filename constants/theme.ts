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
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,    // Reducida para superficies claras
    shadowRadius: 4,
    elevation: 3,
  },
};
