import { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Text, Image, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/theme';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

// Prevenir que el splash screen nativo se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Bold': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    async function prepare() {
      try {
        // Esperar a que las fuentes se carguen
        if (fontsLoaded) {
          // Ocultar el splash screen nativo
          await SplashScreen.hideAsync();
          
          // Mantenemos el splash personalizado visible por un tiempo
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Animación de fade out
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setIsReady(true);
          });
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <RootLayoutNav />
      </ThemeProvider>
      
      {/* Splash Screen personalizado siempre visible hasta que isReady sea true */}
      {!isReady && (
        <Animated.View 
          style={[
            StyleSheet.absoluteFill,
            { opacity: fadeAnim }
          ]}
        >
          <LinearGradient
            colors={['#111827', '#1F2937']}
            style={styles.splashContainer}
          >
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
              translucent={true}
            />
            <View style={styles.splashContent}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
              />
              <Text style={styles.title}>Confesión de Fe</Text>
              <Text style={styles.subtitle}>Bautista de Filadelfia</Text>
              <Text style={styles.year}>1742</Text>
            </View>
          </LinearGradient>
        </Animated.View>
      )}
    </View>
  );
}

function RootLayoutNav() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        translucent={true}
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Inter-Medium',
    color: '#E5E7EB',
    marginTop: 8,
    textAlign: 'center',
  },
  year: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 8,
    textAlign: 'center',
  },
});
