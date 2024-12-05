import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/app/(tabs)/Home";
import { Ionicons } from "@expo/vector-icons";
import Play from "./Play";
import Book from "./Book";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const tabIcons: Record<string, { focused: string; unfocused: string }> = {
  HOME: { focused: "home", unfocused: "home-outline" },
  PLAY: { focused: "people", unfocused: "people-outline" },
  BOOK: { focused: "book", unfocused: "book-outline" },
  PROFILE: { focused: "person", unfocused: "person-outline" },
};
const TabLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#87CEEB",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused
            ? tabIcons[route.name].focused
            : tabIcons[route.name].unfocused;
          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen name="PLAY" component={Play} />
      <Tab.Screen name="BOOK" component={Book} />
      <Tab.Screen name="PROFILE" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabLayout;
