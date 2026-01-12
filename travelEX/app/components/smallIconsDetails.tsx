import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';

type data = {
  iconName: keyof typeof Ionicons.glyphMap;
  details: string
}

const SmallIconsDetails: React.FC<data> = ({ iconName, details }) => {

  return (
    <View className='flex flex-row items-center gap-2'>
      <View className='h-12 w-12 bg-gray-200 justify-center items-center rounded-lg'>
        <Ionicons name={iconName} size={25} color={"#525252"} />
      </View>
      <Text className='font-semibold text-gray-600 text-[16px]'>
        {details}
      </Text>
    </View>
  )
}

export default SmallIconsDetails  