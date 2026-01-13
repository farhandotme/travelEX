import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";
import '../../global.css';
import ImageHome from "../components/ImageHome";
import SearchBar from "../components/SearchBar";
import SelectCategory from "../components/selectCategory";
export default function Index() {
  type Place = {
    id: number,
    image: string,
    place: string,
    placeName: string
  }

  const mainData: Place[] = data
  const [tab, setTab] = useState<string>("Most Viewed")
  const categories = ["Most Viewed", "Latest", "Nearby"]

  return (
    <SafeAreaView edges={["top"]} className="h-screen bg-white">

      <ScrollView>
        <View className="flex-1 ml-8 mr-8 justify-center items-center max-h-20 mt-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-[30px] font-semibold ">
                Hi, Farhan 👋
              </Text>
              <Text className="text-[20px] font-semibold text-gray-400 ">
                Explore the World
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/images/profile.jpg")}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            </View>
          </View>
        </View>
        <View className="ml-8 mr-8 flex justify-center items-center mt-[20]">
          <SearchBar />
        </View>
        <View className="ml-8 mr-8 flex flex-row justify-between items-center mt-[30]">
          <Text style={{ fontSize: 20, fontWeight: "bold" }} >Popular Places</Text>
          <Link href={`/`} style={{ color: "grey", fontWeight: "bold" }}>View All</Link>
        </View>
        <ScrollView horizontal contentContainerStyle={{ gap: 10, paddingHorizontal: 25, height: 60 }} showsHorizontalScrollIndicator={false} className=" mt-10" >
          {categories.map((item) => {
            return (
              <SelectCategory key={item} items={item} tab={tab} setTab={setTab} />
            )
          })}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 25, paddingHorizontal: 25 }} className="mt-10">
          {
            mainData.map((value) => {
              return <ImageHome key={value.id} id={value.id} imageUrl={value.image} placeName={value.placeName} place={value.place} />
            })
          }
        </ScrollView>
      </ScrollView>
    </SafeAreaView >
  );
}
