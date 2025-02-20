import { useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/theme';

// Mantener el splash screen visible
SplashScreen.preventAutoHideAsync();

const fadeAnim = new Animated.Value(0);

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Tus fuentes aquí
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Ocultar el splash screen después de que las fuentes estén cargadas
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
