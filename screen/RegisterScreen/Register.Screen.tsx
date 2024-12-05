import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import {
  getRegistrationProgress,
  saveRegistrationProgess,
} from "@/utils/RegistrationUtils";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("Register").then((progessData) => {
      if (progessData) {
        setEmail(progessData.email || "");
      }
    });
  });
  const next = () => {
    if (email.trim() !== "") {
      saveRegistrationProgess("Register", { email });
    }

    navigation.navigate("Password");
  };
  return (
    <SafeAreaView style={{}}>
      <View style={{ padding: 13 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          You're Almost There
        </Text>

        <View
          style={{
            flexDirection: "column",
            gap: 16,
            marginVertical: 40,
          }}
        >
          <Text>Enter Email</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="email"
            style={{
              padding: 15,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity
            onPress={next}
            style={{
              padding: 15,
              backgroundColor: email?.length > 4 ? "#87CEEB" : "#e0e0e0",
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 15,
            }}
          >
            I agree to receive updates over Whatsapp
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            By Signing Up, you agree to the terms of services and privacy and
            privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
