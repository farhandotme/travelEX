
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import '../../global.css';
import ImageHome from "../components/ImageHome";
import SearchBar from "../components/SearchBar";
import SelectCategory from "../components/selectCategory";

export default function Index() {

  const [tab, setTab] = useState<string>("Most Viewed")
  const categories = ["Most Viewed", "Latest", "Nearby"]

  return (
    <SafeAreaView className="h-screen bg-white">
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
          <ImageHome imageUrl="https://images.unsplash.com/photo-1603011836628-554a4c507ed2?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" place="Maghalaya" placeName="Laitlum Canyon, Shillong" />
          <ImageHome imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRU4p2Kuk4q4zpvNoXoSjkH4zvrB0_6ZwR4WnW1b-FJ_ymcQSFnBVMo1Gw49bUkTXrOY_eiFFS-hqjRXx56-4Gonng&s=19" place="Jammu and Kashmir" placeName="Gulmarg" />
          <ImageHome imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcREi_6W84QQ0C68Efd5DLjDrUnFcTbC2gdPfmD-YnCCXhqtc9ldhDNILC3B244k5wReI8f5ybC8lW8iHUTPx2MiABU&s=19" place="Himachal Pradesh" placeName="Shimla" />
          <ImageHome imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQrpwXFtQJsmoanphilRNbJQolZ74m6pWbeOxG_TK-AB6V6qUwFF3O7pwB85HsDT4g3u3_qQLT-hc6mzDtgdFmwWZ8&s=19" place="Kerala" placeName="Munnar" />
          <ImageHome imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSullzLVgHQYVJqZowHLNGrNZrIzfRtd_-aAcPDfn0gZrap-nKI1MwhmUqIKBdpyq6qvQX4TEc6GfnlwUE-kCAdDug&s=19" place="Tamil Nadu" placeName="Ooty" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView >
  );
}
