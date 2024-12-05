import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Amenities from "@/components/Amenities";

const VenueInfoScreen = () => {
  const route = useRoute();
  console.log(route?.params);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <>
            <View>
              <Image
                style={{
                  width: "100%",
                  height: 200,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
              />
            </View>
            <View
              style={{
                padding: 10,
              }}
            >
              <Text>{route?.params?.name}</Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="time-outline" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  6:00 AM - 11.00 PM
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  marginVertical: 8,
                }}
              >
                <Ionicons name="location-outline" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 14,
                    width: "80%",
                    fontWeight: "500",
                  }}
                >
                  {route?.params?.location}
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {[0, 0, 0, 0].map((en, i) => (
                    <FontAwesome
                      key={i}
                      style={{
                        paddingHorizontal: 3,
                      }}
                      name={
                        i < Math.floor(route.params.rating) ? "star" : "star-o"
                      }
                      size={15}
                      color="#FFD700"
                    />
                  ))}
                  <Text>{route.params.rating} (9 rating)</Text>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 6,
                    width: 160,
                    borderColor: "#686868",
                    borderWidth: 1,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>Rate Venue</Text>
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <Text>100 total Activities</Text>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 6,
                    width: 160,
                    borderColor: "#686868",
                    borderWidth: 1,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>1 Upcoming</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                fontWeight: "500",
              }}
            >
              Sport Available
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {route?.params?.sportsAvailable.map((item, index) => (
                <View
                  key={index}
                  style={{
                    borderColor: "#686868",
                    margin: 10,
                    padding: 20,
                    width: 130,
                    height: 90,
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    style={{
                      textAlign: "center",
                    }}
                    name={item.icon}
                    size={24}
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    {item?.name}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <Amenities />
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Activities
              </Text>
              <TouchableOpacity
                style={{
                  borderColor: "#787878",
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 5,
                }}
              >
                <AntDesign name="plus" size={24} color="black" />
                <Text>Create Activity</Text>
              </TouchableOpacity>
            </View>
          </>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        style={{
          backgroundColor: "#87CEEB",
          padding: 8,
          marginBottom: 30,
          borderRadius: 3,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Book Now
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default VenueInfoScreen;
