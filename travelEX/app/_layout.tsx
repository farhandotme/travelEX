import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    StoryScript: require("../assets/fonts/StoryScript-Regular.ttf"),
    NovaRound: require("../assets/fonts/NovaRound-Regular.ttf"),
    MonomaniacOne: require("../assets/fonts/MonomaniacOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <StatusBar style="inverted" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onBoarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="register/registerpage" />
      </Stack>
    </GestureHandlerRootView>
  );
}
