import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from "../../data.json"
import '../../global.css'

const MovieDetails = () => {

  const { id } = useLocalSearchParams<{ id: string }>();

  const placeId = Number(id);

  const placeData = data.find((item) =>
    item.id === placeId
  )
  return (
    <SafeAreaView className='h-screen'>
      <View className="flex justify-center items-center">
        <ImageBackground source={{ uri: placeData?.image }} style={{ width: 360, height: 480 }} imageStyle={{ borderRadius: 30 }} />
      </View>

    </SafeAreaView>
  )
}

export default MovieDetails 