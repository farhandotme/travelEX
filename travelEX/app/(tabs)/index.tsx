import * as SecureStore from "expo-secure-store";
import { Link, router } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";
import "../../global.css";
import ImageHome from "../components/ImageHome";
import SearchBar from "../components/SearchBar";
import SelectCategory from "../components/selectCategory";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import axios from "axios";
import Toast from "react-native-toast-message";
import { randomNumber } from "../utils/randomColorsProfile";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
export default function Index() {
  const tabBarHeight = useBottomTabBarHeight();
  type Place = {
    id: number;
    image: string;
    place: string;
    placeName: string;
  };
  type User = {
    name: string;
    email: string;
    _id: string;
  };
  const [randomColor, setRandomColor] = useState("");

  // bottomsheetconf
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoint = useMemo(() => ["30%"], []);

  const mainData: Place[] = data;
  const [tab, setTab] = useState<string>("Most Viewed");
  const categories = ["Most Viewed", "Latest", "Nearby"];
  const [user, setUser] = useState<User | null>(null);
  const getUserDetails = async () => {
    const token = await SecureStore.getItemAsync("authToken");
    try {
      const getData = await axios.get(`http://192.168.29.211:3000/profile/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(getData.data.user);
    } catch (error: any) {
      Toast.show({ type: "error", text1: error?.response?.data?.message });
    }
  };

  useEffect(() => {
    getUserDetails();
    const randomcolor = randomNumber();
    setRandomColor(randomcolor);
  }, []);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-1 ml-8 mr-8 justify-center items-center max-h-20 mt-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex-1">
              {!user ? (
                <Text className="text-[25px] text-red-500 font-bold">
                  User Not Found
                </Text>
              ) : (
                <Text className="text-[30px] font-semibold ">
                  Hi, {user?.name.split(" ")[0]} 👋
                </Text>
              )}

              <Text className="text-[20px] font-semibold text-gray-400 ">
                Explore the World
              </Text>
            </View>
            <View>
              {/* profile */}
              <Pressable
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}
                className="rounded-full h-[50px] w-[50px] flex justify-center items-center"
                style={{ backgroundColor: randomColor, opacity: 0.5 }}
              >
                <Text className="text-white font-bold text-3xl">
                  {user?.name.charAt(0)}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className="ml-8 mr-8 flex justify-center items-center mt-[20]">
          <SearchBar />
        </View>
        <View className="ml-8 mr-8 flex flex-row justify-between items-center mt-[30]">
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Popular Places
          </Text>
          <Pressable
            onPress={() => {
              alert("The backend is not conected ");
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold" }}>View All</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 10, paddingHorizontal: 25, height: 60 }}
          showsHorizontalScrollIndicator={false}
          className=" mt-10"
        >
          {categories.map((item) => {
            return (
              <SelectCategory
                key={item}
                items={item}
                tab={tab}
                setTab={setTab}
              />
            );
          })}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 25, paddingHorizontal: 25 }}
          className="mt-10"
        >
          {mainData.map((value) => {
            return (
              <ImageHome
                key={value.id}
                id={value.id}
                imageUrl={value.image}
                placeName={value.placeName}
                place={value.place}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoint}>
        <BottomSheetView
          style={{ paddingBottom: tabBarHeight + 16 }}
          className="p-6 bg-white rounded-3xl gap-6"
        >
          <Text className="text-xl font-bold text-gray-900">Profile</Text>

          <Pressable
            onPress={async () => {
              await SecureStore.deleteItemAsync("authToken");
              router.replace("/register/registerpage");
            }}
            className="flex-row items-center justify-center gap-2 bg-red-500 py-4 rounded-2xl active:opacity-80"
          >
            <Ionicons name="log-out-outline" size={22} color="white" />
            <Text className="text-white font-semibold text-lg">Logout</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}
