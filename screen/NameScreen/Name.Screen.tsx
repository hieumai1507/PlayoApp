import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  getRegistrationProgress,
  saveRegistrationProgess,
} from "@/utils/RegistrationUtils";

const NameScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    getRegistrationProgress("Name").then((progessData) => {
      if (progessData) {
        setFirstName(progessData.firstName || "");
        setLastName(progessData.lastName || "");
      }
    });
  });
  const saveName = () => {
    if (firstName.trim() !== "") {
      saveRegistrationProgess("Name", { firstName, lastName });
    }
    navigation.navigate("Image");
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Complete your profile{" "}
          </Text>
          <Text style={{ marginTop: 10, color: "gray" }}>
            What would you like your mates to call you?
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 10,
            marginVertical: 25,
            flexDirection: "column",
            gap: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              First Name *
            </Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={{
                padding: 18,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              Last Name *
            </Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={{
                padding: 18,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={saveName}
        style={{
          backgroundColor: "#6CA6CD",
          marginTop: "auto",
          marginBlock: 30,
          padding: 12,
          marginHorizontal: 10,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NameScreen;
