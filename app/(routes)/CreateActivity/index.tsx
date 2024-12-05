import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import moment from "moment";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";
const CreateActivity = () => {
  const navigation = useNavigation();
  const [sport, setSport] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [timeInterval, setTimeInterval] = useState("");
  const [noOfPlayer, setNoOfPlayer] = useState("");

  const [selected, setSelected] = useState(["Public"]);
  const route = useRoute<any>();
  const [taggedVenue, setTaggedVenue] = useState(undefined);
  const { userId } = useContext(AuthContext);
  console.log("userID", userId);

  useEffect(() => {
    if (route?.params?.timeInterval) {
      setTimeInterval(route.params.timeInterval);
    }
  }, [route.params]);
  console.log("TimeInterval", timeInterval);
  useEffect(() => {
    if (route?.params?.taggedVenue) {
      setTaggedVenue(route.params.taggedVenue);
    }
  }, [route?.params]);
  console.log("tagged", route?.params?.taggedVenue);
  const [modalVisible, setModalVisible] = useState(false);
  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, "days");
      let displayDate;
      if (i === 0) {
        displayDate = "Today";
      } else if (i === 1) {
        displayDate = "Tomorrow";
      } else if (i == 2) {
        displayDate = "Day After";
      } else {
        displayDate = date.format("Do MMMM");
      }
      dates.push({
        id: i.toString,
        displayDate,
        dayOfWeek: date.format("dddd"),
        actualDate: date.format("Do MMMM"),
      });
    }
    return dates;
  };
  const dates = generateDates();
  console.log("Dates", dates);
  const selectDate = (date: string) => {
    setModalVisible(false);
    setDate(date);
  };
  const createGame = async () => {
    try {
      const admin = userId;
      const time = timeInterval;
      const gameData = {
        sport,
        area: taggedVenue,
        date,
        time,
        admin,
        totalPlayers: noOfPlayer,
      };
      const response = await axios.post(`${SERVER_URI}/creategame`, gameData);
      console.log("Game created", response.data);
      if (response.status == 200) {
        Alert.alert("Success!", "Game created Succesfully", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
        setSport("");
        setArea("");
        setDate("");
        setTimeInterval("");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: Platform.OS == "android" ? 35 : 0,
        }}
      >
        <ScrollView>
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
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Create Activity
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 15,
                marginVertical: 15,
              }}
            >
              <MaterialCommunityIcons name="whistle" size={24} color="gray" />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                  }}
                >
                  Sport
                </Text>
                <TextInput
                  value={sport}
                  onChangeText={setSport}
                  style={{
                    marginTop: 7,
                    fontSize: 15,
                    color: "black",
                  }}
                  placeholder="Ex: Badminton/ Football / Cricket"
                  placeholderTextColor="gray"
                />
              </View>

              <AntDesign name="arrowright" size={24} color="gray" />
            </TouchableOpacity>

            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("TagVenue")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 15,
                marginVertical: 15,
              }}
            >
              <Entypo name="location" size={24} color="gray" />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                  }}
                >
                  Area
                </Text>
                <TextInput
                  value={area ? area : taggedVenue}
                  onChangeText={setArea}
                  style={{
                    marginTop: 7,
                    fontSize: 15,
                    color: "black",
                  }}
                  placeholder="Location or venue name"
                  placeholderTextColor="gray"
                />
              </View>

              <AntDesign name="arrowright" size={24} color="gray" />
            </TouchableOpacity>
            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 15,
                marginVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="gray" />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                  }}
                >
                  Date
                </Text>
                <TextInput
                  editable={false}
                  style={{
                    marginTop: 7,
                    fontSize: 15,
                    color: "black",
                  }}
                  placeholder={date ? date : "Pick a Day"}
                  placeholderTextColor={date ? "black" : "gray"}
                />
              </View>

              <AntDesign name="arrowright" size={24} color="gray" />
            </TouchableOpacity>
            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Time")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 15,
                marginVertical: 15,
              }}
            >
              <AntDesign name="clockcircleo" size={24} color="gray" />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                  }}
                >
                  Time
                </Text>
                <TextInput
                  style={{
                    marginTop: 7,
                    fontSize: 15,
                    color: "black",
                  }}
                  placeholder={timeInterval ? timeInterval : "Pick Exact Time"}
                  placeholderTextColor={timeInterval ? "black" : "gray"}
                />
              </View>

              <AntDesign name="arrowright" size={24} color="gray" />
            </TouchableOpacity>
            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 7,
                marginVertical: 10,
              }}
            >
              <Feather name="activity" size={24} color="gray" />
              <View
                style={{
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Activity Access
                </Text>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setSelected(["Public"])}
                    style={
                      selected.includes("Public")
                        ? {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            backgroundColor: "#87CEEB",
                            width: 140,
                            justifyContent: "center",
                            borderRadius: 3,
                            padding: 10,
                          }
                        : {
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                            backgroundColor: "white",
                            width: 140,
                            justifyContent: "center",
                            borderRadius: 3,
                            padding: 10,
                          }
                    }
                  >
                    <Ionicons
                      name="earth"
                      size={24}
                      color={selected.includes("Public") ? "white" : "black"}
                    />
                    <Text
                      style={
                        selected.includes("Public")
                          ? { color: "white", fontWeight: "bold", fontSize: 15 }
                          : { color: "black", fontWeight: "bold", fontSize: 15 }
                      }
                    >
                      Public
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSelected(["Invite Only"])}
                    style={
                      selected.includes("Invite Only")
                        ? {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            backgroundColor: "#87CEEB",
                            width: 140,
                            justifyContent: "center",
                            borderRadius: 3,
                            padding: 10,
                          }
                        : {
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                            backgroundColor: "white",
                            width: 140,
                            justifyContent: "center",
                            borderRadius: 3,
                            padding: 10,
                          }
                    }
                  >
                    <AntDesign
                      name="lock1"
                      size={24}
                      color={
                        selected.includes("Invite Only") ? "white" : "black"
                      }
                    />
                    <Text
                      style={
                        selected.includes("Invite Only")
                          ? { color: "white", fontWeight: "bold", fontSize: 15 }
                          : { color: "black", fontWeight: "bold", fontSize: 15 }
                      }
                    >
                      Invite Only
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
                marginTop: 7,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
              }}
            >
              Total Players
            </Text>
            <View
              style={{
                padding: 10,
                backgroundColor: "#f0f0f0",
                marginTop: 10,
                borderRadius: 6,
              }}
            >
              <View
                style={{
                  marginVertical: 5,
                }}
              >
                <View>
                  <TextInput
                    value={noOfPlayer}
                    onChangeText={setNoOfPlayer}
                    style={{
                      padding: 10,
                      backgroundColor: "white",
                      borderColor: "#d0d0d0",
                      borderWidth: 1,
                    }}
                    placeholder="Total Players (including you)"
                  />
                </View>
              </View>
            </View>

            <Text
              style={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                height: 1,
                marginTop: 15,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginTop: 20,
              }}
            >
              Add Instructions
            </Text>
            <View
              style={{
                padding: 10,
                backgroundColor: "#f0f0f0",
                marginTop: 10,
                borderRadius: 6,
              }}
            >
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Ionicons name="bag-check" size={24} color="red" />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Bring your own equipment
                </Text>
                <FontAwesome name="check-square" size={24} color="#87CEEB" />
              </View>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <MaterialCommunityIcons
                  name="directions-fork"
                  size={24}
                  color="#febe10"
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Cost Shared
                </Text>
                <FontAwesome name="check-square" size={24} color="#87CEEB" />
              </View>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FontAwesome5 name="syringe" size={24} color="#87CEEB" />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Covid Vaccinated players preferred
                </Text>
                <FontAwesome name="check-square" size={24} color="#87CEEB" />
              </View>
              <TextInput
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  borderColor: "#d0d0d0",
                  borderWidth: 1,
                  marginVertical: 8,
                  borderRadius: 6,
                }}
                placeholder="Add Additonal Instructions"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 15,
                marginVertical: 10,
              }}
            >
              <AntDesign name="setting" size={24} color="black" />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Advanced Setting
                </Text>
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={createGame}
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
          Create Activity
        </Text>
      </TouchableOpacity>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => {
          setModalVisible(!modalVisible);
          return true;
        }}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent
          style={{
            width: " 100%",
            height: 400,
            backgroundColor: "white",
          }}
        >
          <View>
            <Text>Choose Data/Time to host</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                flexWrap: "wrap",
                marginVertical: 20,
              }}
            >
              {dates?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => selectDate(item?.actualDate)}
                  key={index}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1,
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{item?.displayDate}</Text>
                  <Text
                    style={{
                      color: "gray",
                      marginTop: 7,
                    }}
                  >
                    {item?.dayOfWeek}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default CreateActivity;
