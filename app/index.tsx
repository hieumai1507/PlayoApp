import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import Home from "./(tabs)/Home";

const index = () => {
  return <Redirect href={"/(tabs)"} />;
};

export default index;
