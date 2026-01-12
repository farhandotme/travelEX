import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";

type CustomInputProps = {
  Heading: string;
  value: string;
} & TextInputProps;

const CustomTextInput = (props: CustomInputProps) => {
  return (
    <>
      <Text className="font-semibold ">{props.Heading}</Text>
      {/* name input  */}
      <TextInput
        {...props}
        className="p-5 rounded-2xl bg-gray-200"
        placeholderTextColor={"#363636"}
      />
    </>
  );
};

export default CustomTextInput;
