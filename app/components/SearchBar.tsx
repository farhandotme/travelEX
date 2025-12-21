import React from 'react'
import { TextInput, View } from 'react-native'

export default function SearchBar() {
  return (
    <View className=''>
      <TextInput
        placeholder="Search places"
        placeholderTextColor={"#BFBFBF"}
        style={{
          backgroundColor: "",
          padding: 10,
          paddingLeft: 20,
          borderRadius: 20,
          borderColor: "#BFBFBF",
          borderWidth: 2,
          width: 350,
          height: 60,
        }}
      />
    </View>
  )
}