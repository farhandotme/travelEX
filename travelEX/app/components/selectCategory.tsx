import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type selectCategoryProps = {
  items: string,
  tab: string,
  setTab: (tab: string) => void
}

const SelectCategory: React.FC<selectCategoryProps> = ({ items, tab, setTab }) => {
  return (
    <TouchableOpacity className={` ${items === tab ? "bg-[#393838]" : "bg-[#e6e6e6]"} self-start pt-5 pr-8 pl-8 pb-5 rounded-2xl`} onPress={() => { setTab(items) }}>
      <Text className={`${items === tab ? "text-white" : `text-[#8a8686]`} font-semibold`}>
        {items}
      </Text>
    </TouchableOpacity >
  )
}

export default SelectCategory