import React from 'react';
import { TextInput, View } from 'react-native';
import { scale } from "../utils/scale";

export default function SearchBar() {
  return (
    <View className=''>
      <TextInput
        placeholder="Search places"
        placeholderTextColor={"#BFBFBF"}
        style={{

          padding: scale(10),
          paddingLeft: scale(20),
          borderRadius: scale(20),
          borderColor: "#BFBFBF",
          borderWidth: 2,
          width: scale(350),
          height: scale(60),
        }}
      />
    </View>
  )
}