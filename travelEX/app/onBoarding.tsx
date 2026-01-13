import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import "../global.css";
import { scale } from "./utils/scale";
export default function OnBoarding() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/register/registerpage");
    }, 3000);
  });

  return (
    <LinearGradient
      colors={["#0171B1", "#001747"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View className="flex-row items-center">
        <Text
          style={{ fontFamily: "StoryScript", fontSize: scale(60) }}
          className=" text-white"
        >
          Travel EX
        </Text>
        <Image
          style={{ height: 120, width: 120 }}
          source={require("../assets/images/logoRemove.png")}
        />
      </View>

      <View className="flex items-center">
        <Text
          style={{ fontFamily: "StoryScript" }}
          className="text-white text-3xl"
        >
          Find Your Dream
        </Text>
        <Text
          style={{ fontFamily: "StoryScript" }}
          className="text-white text-3xl"
        >
          Destination With Us
        </Text>
      </View>
    </LinearGradient>
  );
}
