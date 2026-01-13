import {
  Pressable,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import "../../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "expo-checkbox";
import Feather from "@expo/vector-icons/Feather";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import { SchemaFormData, SignUpSchema } from "../Schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
export default function App() {
  const [passVisible, setPassVisible] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //handle submit
  const Submit = async (data: SchemaFormData): Promise<void> => {
    try {
      const res = await axios.post("http://192.168.29.211:3000/register", data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  };

  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView className="bg-white flex-1 mt-5">
      <View className="flex items-center">
        <Text className="text-[20px] font-bold">Sign Up Account</Text>
        <Text className="text-[16px] mt-4 font-semibold text-gray-500">
          Join us for good Experience
        </Text>
      </View>
      <View className="ml-9 mt-10 mr-9 gap-0">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => {
            return (
              <View>
                <CustomTextInput
                  Heading="Name"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter Your Name"
                />

                {/* {errors.name && ( */}
                <Text className="text-red-500 ml-4 font-semibold">
                  {errors.name?.message}
                </Text>
                {/* )} */}
              </View>
            );
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <View>
                <CustomTextInput
                  Heading="Email"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter Your Email"
                  keyboardType="email-address"
                />
                {/* {errors.name && ( */}
                <Text className="text-red-500 ml-4 font-semibold">
                  {errors.email?.message}
                </Text>
                {/* )} */}
              </View>
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <View>
                <Text className="font-semibold ">Password</Text>
                <View className="flex flex-row items-center rounded-2xl bg-gray-200 ">
                  {/* password input  */}
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter Your Password"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={passVisible}
                    className="p-5 w-[310px]"
                    placeholderTextColor={"#363636"}
                  />

                  {/* this is the pressible button */}
                  <Pressable
                    onPress={() => {
                      setPassVisible(!passVisible);
                    }}
                  >
                    <Feather
                      name={passVisible ? "eye-off" : "eye"}
                      size={18}
                      color={"#363636"}
                    />
                  </Pressable>
                </View>
                {/* {errors.name && ( */}
                <Text className="text-red-500 ml-4 font-semibold">
                  {errors.password?.message}
                </Text>
                {/* )} */}
              </View>
            );
          }}
        />

        <View className="flex-row items-center mt-1 justify-between">
          <View className="flex flex-row gap-3 items-center">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#23D600" : undefined}
            />

            <Text>Remember me</Text>
          </View>
          <View>
            <Pressable onPress={() => {}}>
              <Text className="text-blue-500 font-semibold">
                Forget Password ?
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="mt-4">
          <Pressable
            onPress={handleSubmit(Submit)}
            className="flex flex-row justify-center  bg-black p-5 rounded-2xl"
          >
            <Text className="text-white font-bold">Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <View className="mt-10 ml-10 mr-10 flex flex-row justify-between items-center">
        <View className="bg-gray-300 w-[150px] h-[1px]"></View>
        <Text>OR</Text>
        <View className="bg-gray-300 w-[150px] h-[1px]"></View>
      </View>
      <View className="justify-center items-center gap-1">
        <View className="bg-gray-200 mt-4 w-[350px] items-center h-[70px] justify-center rounded-full">
          <Ionicons name="logo-google" size={40} />
        </View>
        <View className="bg-gray-200 mt-4 w-[350px] items-center h-[70px] justify-center rounded-full">
          <Ionicons name="logo-facebook" size={40} color={"#2784F5"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
