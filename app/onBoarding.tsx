import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Platform, Text, View } from "react-native";


import { useEffect } from "react";
import "../global.css";
export default function OnBoarding() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)")
    }, 3000);
  })


  return (
    <LinearGradient colors={["#0171B1", "#001747"]} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View className="flex-row items-center ml-20 mr-20">
        <Text style={{ fontFamily: "StoryScript" }} className={`${Platform.OS === "android" ? "text-5xl" : " text-7xl "} text-white font-bold mt-5`}>Travel EX</Text>
        <Image style={{ height: 120, width: 120 }} source={require("../assets/images/logoRemove.png")} />
      </View>

      <View className="flex items-center">
        <Text style={{ fontFamily: "StoryScript" }} className="text-white text-3xl">
          Find Your Dream
        </Text>
        <Text style={{ fontFamily: "StoryScript" }} className="text-white text-3xl">
          Destination With Us
        </Text>
      </View>
    </LinearGradient>
  );
}
