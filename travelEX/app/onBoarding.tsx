import { LinearGradient } from "expo-linear-gradient";
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import "../global.css";

import * as SecureStore from "expo-secure-store";
import { scale } from "./utils/scale";
export default function OnBoarding() {
  const router = useRouter();

  const getAuthToken = async () => {
    const token = await SecureStore.getItemAsync("authToken");
    setTimeout(() => {
      if (token) {
        router.replace("/(tabs)");
      } else {
        router.replace("/register/registerpage");
      }
    }, 3000);
  };
  useEffect(() => {
    getAuthToken();
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
