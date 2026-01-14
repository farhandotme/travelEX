import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            marginHorizontal: 20,
            paddingTop: 13,
            marginBottom: 30,
            position: "absolute",
            borderRadius: 100,
            borderTopColor: "white",
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", marginTop: 6 }}>
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={28}
                    color={focused ? "black" : "#A1A1A1"}
                  />
                  <View style={{ height: 10, justifyContent: "center" }}>
                    {focused && (
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "red",
                          marginTop: 10,
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="time"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", marginTop: 6 }}>
                  <Ionicons
                    name={focused ? "time" : "time-outline"}
                    size={30}
                    color={focused ? "black" : "#A1A1A1"}
                  />
                  <View style={{ justifyContent: "center", height: 10 }}>
                    {focused && (
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "red",
                          marginTop: 10,
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="likes"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", marginTop: 6 }}>
                  <Entypo
                    name={focused ? "heart" : "heart-outlined"}
                    size={30}
                    color={focused ? "black" : "#A1A1A1"}
                  />
                  <View style={{ justifyContent: "center", height: 10 }}>
                    {focused && (
                      <View
                        style={{
                          height: 6,
                          backgroundColor: "red",
                          width: 6,
                          borderRadius: 3,
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", marginTop: 6 }}>
                  <Ionicons
                    name={focused ? "person" : "person-outline"}
                    size={26}
                    color={focused ? "black" : "#A1A1A1"}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      height: 10,
                      marginTop: 2,
                    }}
                  >
                    {focused && (
                      <View
                        style={{
                          height: 6,
                          width: 6,
                          borderRadius: 3,
                          backgroundColor: "red",
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            },
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default TabsLayout;
