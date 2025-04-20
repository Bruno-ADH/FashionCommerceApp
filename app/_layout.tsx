import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '@/constants/colors';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    RobotoR: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoS: require('../assets/fonts/Roboto-SemiBold.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoCB: require('../assets/fonts/Roboto_Condensed-Bold.ttf'),
    RobotoCS: require('../assets/fonts/Roboto_Condensed-SemiBold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <StatusBar style="auto" />;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="auto" backgroundColor={colors.white} />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
