import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";
import "../../global.css";
import SmallIconsDetails from "../components/smallIconsDetails";

const MovieDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const placeId = Number(id);

  const placeData = data.find((item) => item.id === placeId);

  const router = useRouter();

  return (
    <View className="bg-white">
      <SafeAreaView edges={["top"]} className="h-screen">
        <ScrollView>
          <View className="flex justify-center items-center">
            <View
              style={{
                shadowColor: "black",
                shadowOffset: { width: 0, height: 20 },
                shadowRadius: 20,
                shadowOpacity: 0.3,
              }}
            >
              <ImageBackground
                source={{ uri: placeData?.image }}
                style={{ width: 360, height: 480 }}
                imageStyle={{
                  borderRadius: 30,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                }}
              >
                <View className="flex-1 justify-between">
                  <View className="flex flex-row m-5 justify-between">
                    <Pressable
                      onPress={() => {
                        router.back();
                      }}
                    >
                      <BlurView
                        className="p-3"
                        style={{ borderRadius: 40, overflow: "hidden" }}
                      >
                        <Ionicons
                          name="chevron-back-outline"
                          size={25}
                          color={"white"}
                        />
                      </BlurView>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        alert("Saved Successfully");
                      }}
                    >
                      <BlurView
                        className="p-3"
                        style={{ borderRadius: 40, overflow: "hidden" }}
                      >
                        <Ionicons
                          name="receipt-outline"
                          size={25}
                          color={"white"}
                        />
                      </BlurView>
                    </Pressable>
                  </View>
                  <BlurView
                    className="flex m-10 bg-red-500 h-[100px] rounded-3xl"
                    style={{ borderRadius: 20, overflow: "hidden" }}
                  >
                    <View className="flex flex-row justify-between items-baseline">
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="text-white mt-5 ml-7 mr-7 "
                        style={{ fontWeight: "bold", fontSize: 22 }}
                      >
                        {placeData?.placeName}
                      </Text>
                      <Text
                        className="text-gray-300 mt-5 ml-7 mr-7 "
                        style={{ fontWeight: "600" }}
                      >
                        Price
                      </Text>
                    </View>
                    <View className="flex flex-row justify-between items-center">
                      <View className="flex-row items-center ml-5 mt-3 gap-1">
                        <Ionicons
                          name="location-outline"
                          size={22}
                          color={"white"}
                          className=""
                        />
                        <Text
                          className="text-white "
                          style={{ fontWeight: "light", fontSize: 18 }}
                        >
                          {placeData?.place}
                        </Text>
                      </View>
                      <View className="mr-7 mt-3">
                        <Text className="text-gray-400 text-[15px]">
                          ₹ {placeData?.price}
                        </Text>
                      </View>
                    </View>
                  </BlurView>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View className="flex-1 gap-4 ml-7 mr-7 mt-4">
            <View className="flex flex-row h-15 items-end gap-10 ">
              <Text className="font-bold text-[25px]">Overview</Text>
              <Text className="font-semibold text-[18px] mb-0.5 text-gray-500">
                Details
              </Text>
            </View>
            <View className="flex flex-row h-15 items-end gap-10 justify-between">
              <SmallIconsDetails
                details={placeData?.travelTime ?? "question"}
                iconName="time"
              />
              <SmallIconsDetails
                details={placeData?.temperature ?? "question"}
                iconName="cloud"
              />
              <SmallIconsDetails
                details={placeData?.rating?.toString() ?? "0"}
                iconName="star"
              />
            </View>
          </View>
          <View className="ml-8 mr-8 mt-8">
            <Text className="text-[20px] font-semibold text-gray-500">
              {placeData?.description}
            </Text>
          </View>
        </ScrollView>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={{
            position: "absolute",
            bottom: 100,
            left: 0,
            right: 0,
            height: 100,
          }}
          className=" justify-end items-end"
        />

        <View className="items-center bg-white mb-10">
          <Pressable
            style={{
              height: 70,
              width: 350,
              backgroundColor: "#242424",
              borderRadius: 25,
            }}
            className="flex flex-row justify-center items-center gap-1"
            onPress={() => {
              console.log("booked");
            }}
          >
            <Text className="text-white font-bold text-[20px] text-">
              Book Now{" "}
            </Text>
            <Ionicons name="paper-plane" color={"white"} size={22} />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MovieDetails;
