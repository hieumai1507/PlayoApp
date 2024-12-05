import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getRegistrationProgress } from "@/utils/RegistrationUtils";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import { SERVER_URI } from "@/utils/uri";
// Định nghĩa kiểu cho dữ liệu user
interface UserData {
  [key: string]: any; // Bạn có thể thay `any` bằng kiểu cụ thể nếu biết cấu trúc dữ liệu
}

const PreFinalScreen: React.FC = () => {
  const { token, setToken } = useContext(AuthContext);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  useEffect(() => {
    if (token) {
      navigation.replace("RootLayoutNav", { screen: "Main" });
      console.log("Token loggin: ", token);
    }
  }, [token, navigation]);

  useEffect(() => {
    getAllScreenData();
  }, []);

  const getAllScreenData = async () => {
    try {
      const screens = ["Register", "Password", "Name", "Image"];
      let userData: UserData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = { ...userData, ...screenData };
        }
      }

      setUserData(userData);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const ClearAllScreenData = async () => {
    try {
      const screens = ["Register", "Password", "Name", "Image"];
      for (const screenName of screens) {
        const key = `registraion_process_${screenName}`;
        await AsyncStorage.removeItem(key);
      }

      console.log("All screen data cleared");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios
        .post(`${SERVER_URI}/register`, userData)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          console.log("token", token);
          AsyncStorage.setItem("token", token);
          setToken(token);
        });

      ClearAllScreenData();
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "GeezaPro-Bold",
            marginLeft: 20,
          }}
        >
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "GeezaPro-Bold",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Setting up your profile for you
        </Text>
      </View>

      <TouchableOpacity
        onPress={registerUser}
        style={{ backgroundColor: "#6CA6CD", padding: 15, marginTop: "auto" }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          Finish Registering
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PreFinalScreen;
