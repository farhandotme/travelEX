import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from 'react-native-reanimated';
type imageDetails = {
  imageUrl: string,
  placeName: string,
  place: string

}

const ImageHome: React.FC<imageDetails> = ({ imageUrl, placeName, place }) => {
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
  return (
    <GestureDetector gesture={doubleTap}>
      <View collapsable={false}>
        <ImageBackground
          source={{
            uri: imageUrl,
          }}
          className="w-[300px] h-[400px]"
          imageStyle={{ borderRadius: 30 }}
        >
          <View className="justify-end items-end mt-5 mr-5 bg-[#1D1D1D] opacity-40 self-end p-2 rounded-full">
            <Pressable className='' onPress={handleLike}><Ionicons name={isliked ? "heart" : "heart-outline"} color={isliked ? "red" : "white"} size={36} /></Pressable>
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