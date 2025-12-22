import { useFonts } from 'expo-font';

import { Stack } from "expo-router";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    StoryScript: require("../assets/fonts/StoryScript-Regular.ttf")
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onBoarding" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
