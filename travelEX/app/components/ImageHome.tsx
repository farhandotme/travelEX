import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from 'react-native-reanimated';
type imageDetails = {
  id: number,
  imageUrl: string,
  placeName: string,
  place: string
}

const ImageHome: React.FC<imageDetails> = ({ id, imageUrl, placeName, place }) => {
  const [isliked, setIsliked] = useState(false)
  const handleLike = () => {
    setIsliked(!isliked);
  }
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDuration(250)
    .onEnd(() => {
      runOnJS(handleLike)();
    });

  const router = useRouter();

  const handleSingleTap = () => {
    router.push(`/placeDetails/${id}`)
  }
  const singleTap = Gesture.Tap()
    .numberOfTaps(1).onEnd(() => { runOnJS(handleSingleTap)() })



  const TapGesture = Gesture.Exclusive(doubleTap, singleTap)
  return (
    <GestureDetector gesture={TapGesture}>
      <View collapsable={false}>
        <ImageBackground
          source={{
            uri: imageUrl,
          }}
          className="w-[300px] h-[400px]"
          imageStyle={{ borderRadius: 30 }}>
          <View className="justify-end items-end mt-5 mr-5 bg-[#929191] self-end p-2 rounded-full">
            <Ionicons name={isliked ? "heart" : "heart-outline"} color={isliked ? "#ff3030" : "white"} size={36} />
          </View>
          <View className="flex-1 items-center justify-end">
            <BlurView intensity={30} className="bg-blue-400 w-[220px] h-[70px] mb-10 rounded-xl" style={{ borderRadius: 12, overflow: "hidden" }}>
              <Text className="ml-3 mt-3 text-white font-bold">{placeName}</Text>
              <View className="ml-2 flex-1 flex-row items-center ">
                <Ionicons name="location" size={22} color={"white"} />
                <Text className="ml-3 text-white">{place}</Text>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
      </View>
    </GestureDetector>
  )
}

export default ImageHome