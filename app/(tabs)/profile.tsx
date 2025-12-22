import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../../global.css"
const Profile = () => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
      <View className='flex items-center'>
        <Text style={{ fontSize: 20, fontFamily: "StoryScript" }}>This is a Demo App</Text>
        <Text style={{ fontSize: 20, fontFamily: "StoryScript" }}>Currently have no users</Text>
      </View>
    </SafeAreaView >
  )
}

export default Profile