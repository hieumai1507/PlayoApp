import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";

const PlayScreen = () => {
  const [option, setOptions] = useState("My Sports");
  const [sport, setSport] = useState("Badminton");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* Header */}
      <View
        style={{
          padding: 12,
          backgroundColor: "#20B2AA",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            >
              Demacia
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="chatbox-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />

            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
              source={{
                uri: "https://yt3.ggpht.com/MfpPfmjkFhfRJcWAE0pVtD-uPE1IFYJr6gVvhNaUfNtNQs-CXn5Jiqe7aO99WnJINU_HnfEtyg=s88-c-k-c0x00ffffff-no-rj",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginVertical: 13,
          }}
        >
          <TouchableOpacity onPress={() => setOptions("Calendar")}>
            <Text
              style={{
                fontWeight: "500",
                color: option == "Calendar" ? "#87CEEB" : "white",
                fontSize: 15,
              }}
            >
              Calendar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOptions("My Sports")}>
            <Text
              style={{
                fontWeight: "500",
                color: option == "My Sports" ? "#87CEEB" : "white",
                fontSize: 15,
              }}
            >
              My Sports
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOptions("Other Sports")}>
            <Text
              style={{
                fontWeight: "500",
                color: option == "Other Sports" ? "#87CEEB" : "white",
                fontSize: 15,
              }}
            >
              Other Sports
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => setSport("Badminton")}
              style={{
                padding: 10,
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport == "Badminton" ? 0 : 1,
                backgroundColor:
                  sport == "Badminton" ? "#87CEEB" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
                Badminton
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSport("Cricket")}
              style={{
                padding: 10,
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport == "Cricket" ? 0 : 1,
                backgroundColor: sport == "Cricket" ? "#87CEEB" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
                Cricket
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSport("Cycling")}
              style={{
                padding: 10,
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport == "Cycling" ? 0 : 1,
                backgroundColor: sport == "Cycling" ? "#87CEEB" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
                Cycling
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSport("Running")}
              style={{
                padding: 10,
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport == "Running" ? 0 : 1,
                backgroundColor: sport == "Running" ? "#87CEEB" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
                Running
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Text style={{ fontWeight: "bold" }}>Create Game</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>Sort</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
