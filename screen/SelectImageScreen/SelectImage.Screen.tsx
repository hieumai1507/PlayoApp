import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  getRegistrationProgress,
  saveRegistrationProgess,
} from "@/utils/RegistrationUtils";

const SelectImageScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const images = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/16683/16683469.png",
    },
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/16683/16683439.png",
    },
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4202/4202835.png",
    },
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3079/3079652.png",
    },
  ];
  useEffect(() => {
    getRegistrationProgress("Image").then((progressData) => {
      if (progressData) {
        setImage(progressData.image || "");
      }
    });
  }, []);

  const saveImage = () => {
    if (image.trim() !== "") {
      saveRegistrationProgess("Image", { image });
    }
    navigation.navigate("PreFinal");
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                Complete your profile
              </Text>
              <Text style={{ marginTop: 10, color: "gray" }}>
                What would you like your mates to call you?❤️
              </Text>
            </View>

            <View style={{ marginVertical: 25 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderColor: "#87CEEB",
                    borderWidth: 2,
                    resizeMode: "cover",
                  }}
                  source={{ uri: image ? image : images[0]?.image }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 25,
                  justifyContent: "center",
                }}
              >
                {images?.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setImage(item?.image)}
                    style={{
                      margin: 10,
                      gap: 10,
                    }}
                    key={index}
                  >
                    <Image
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        borderColor:
                          image === item?.image ? "#87CEEB" : "transparent",
                        borderWidth: 2,
                        resizeMode: "contain",
                      }}
                      source={{ uri: item?.image }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "gray",
                  marginVertical: 20,
                }}
              >
                OR
              </Text>
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                }}
              >
                <View>
                  <Text>Enter Your Image Link</Text>
                  <TextInput
                    value={image}
                    onChangeText={setImage}
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
            </View>
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity
          onPress={saveImage}
          style={{
            backgroundColor: "#87CEEB",
            marginTop: "auto",
            marginBottom: 30,
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
      </KeyboardAvoidingView>
    </>
  );
};

export default SelectImageScreen;
