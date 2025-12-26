import Ionicons from '@expo/vector-icons/Ionicons'
import { BlurView } from 'expo-blur'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from "../../data.json"
import '../../global.css'
import SmallIconsDetails from '../components/smallIconsDetails'

const MovieDetails = () => {

  const { id } = useLocalSearchParams<{ id: string }>();

  const placeId = Number(id);

  const placeData = data.find((item) =>
    item.id === placeId
  )

  const router = useRouter();

  return (
    <SafeAreaView className='h-screen'>
      <View className="flex justify-center items-center">
        <View style={{
          shadowColor: "black",
          shadowOffset: { width: 0, height: 20 },
          shadowRadius: 20,
          shadowOpacity: 0.3,
        }}>
          <ImageBackground source={{ uri: placeData?.image }} style={{ width: 360, height: 480 }} imageStyle={{
            borderRadius: 30, shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.4,
            shadowRadius: 20,
          }} >
            <View className='flex flex-row m-5 justify-between'>
              <Pressable onPress={() => { router.back() }}><BlurView className='p-3' style={{ borderRadius: 40, overflow: "hidden" }} >
                <Ionicons name='chevron-back-outline' size={25} color={"white"} />
              </BlurView></Pressable>
              <Pressable onPress={() => { alert("Saved Successfully") }}><BlurView className='p-3' style={{ borderRadius: 40, overflow: "hidden" }} >
                <Ionicons name='receipt-outline' size={25} color={"white"} />
              </BlurView></Pressable>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View className='flex-1 gap-4 ml-7 mr-7 mt-4'>


        <View className='flex flex-row h-15 items-end gap-10 ' >
          <Text className='font-bold text-[25px]'>Overview</Text>
          <Text className='font-semibold text-[18px] mb-0.5 text-gray-500'>Details</Text>
        </View>


        <View className='flex flex-row h-15 items-end gap-10 justify-between' >
          <SmallIconsDetails details='8 Hours' iconName='time' />
          <SmallIconsDetails details='16°C' iconName='cloud' />
          <SmallIconsDetails details='4.5' iconName='star' />
        </View>


      </View>
    </SafeAreaView>
  )
}

export default MovieDetails 
