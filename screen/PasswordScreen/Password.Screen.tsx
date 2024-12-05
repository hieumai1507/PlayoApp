import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { saveRegistrationProgess } from "@/utils/RegistrationUtils";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    if (password.trim() !== "") {
      saveRegistrationProgess("Password", { password });
    }
    navigation.navigate("Name");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 90,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: "#87CEEB",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="lock1" color="#87CEEB" size={24} />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "GeezaPro-Bold",
            marginTop: 15,
          }}
        >
          Please choose a password
        </Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBlockColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontSize: password ? 22 : 20,
            fontFamily: "GeezaPro-Bold",
          }}
        />

        <Text
          style={{
            color: "gray",
            fontSize: 15,
            marginTop: 7,
          }}
        >
          Note: Your details will be wafe with us
        </Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{
            marginTop: 30,
            marginLeft: "auto",
          }}
        >
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#87CEEB"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;
