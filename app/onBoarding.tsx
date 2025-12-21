// import { LinearGradient } from "expo-linear-gradient";
// import { useRouter } from "expo-router";
// import { Image, Text, View } from "react-native";


// export default function OnBoarding() {
//   const router = useRouter();

//   return (
//     <LinearGradient colors={["#0171B1", "#001747"]} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <View><Text className="text-white text-5xl font-bold">Travel EX</Text> <Image source={require("../assets/images/logo.png")} /></View>
//     </LinearGradient>
//   );
// }



import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image } from 'react-native';

const OnBoarding = () => {
  const router = useRouter(); // ✅ hook at top level

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Image source={require("../assets/images/splashScreen.jpeg")} />
  )
}

export default OnBoarding