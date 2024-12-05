import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { data } from "@/data";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View>
          <Text>Demacia</Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginRight: 15,
          }}
        >
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
          <TouchableOpacity>
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
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F8F8F8",
      }}
    >
      {/* top content */}
      <View
        style={{
          padding: 13,
          backgroundColor: "white",
          margin: 15,
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
        }}
      >
        <View>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/785/785116.png",
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text>Set Your Weekly Fit Goal</Text>
            <Image
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/426/426833.png",
              }}
            />
          </View>

          <Text style={{ marginTop: 8, color: "gray" }}>KEEP YOURSELF FIT</Text>
        </View>
      </View>
      {/* middle content */}
      <View
        style={{
          padding: 13,
          backgroundColor: "white",
          marginVertical: 6,
          marginHorizontal: 13,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 4,
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            width: 200,
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: "#484848",
              fontSize: 13,
            }}
          >
            GEAR UP YOUR GAME
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Badminton Activity
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 7,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              width: 80,
            }}
          >
            <Text style={{ textAlign: "center" }}>VIEW</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 4,
            color: "gray",
          }}
        >
          You have no Games Today
        </Text>

        <TouchableOpacity
          style={{
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            View My Calendar
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 13,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                width: 180,
                height: 120,
                borderRadius: 10,
              }}
              source={{
                uri: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Play
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  marginTop: 7,
                }}
              >
                Find Players and join their activities
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                width: 180,
                height: 120,
                borderRadius: 10,
              }}
              source={{
                uri: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Book
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  marginTop: 7,
                }}
              >
                Book your slots in venues nearby
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 13 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            gap: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#E0FFFF",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="addusergroup" size={24} color="#87CEEB" />
          </View>

          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Groups
            </Text>

            <Text
              style={{
                marginTop: 10,
                color: "gray",
              }}
            >
              Connect, Compete and Duscuss
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            gap: 10,
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#FFA500",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="tennisball-outline" size={24} color="gray" />
          </View>

          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Game Time Activities
            </Text>

            <Text
              style={{
                marginTop: 10,
                color: "gray",
              }}
            >
              365 Playo hosted games
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 13,
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            SpotLight
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.map((item, index) => (
              <ImageBackground
                key={item.id}
                imageStyle={{
                  borderRadius: 10,
                }}
                style={{
                  width: 220,
                  height: 280,
                  marginRight: 10,
                  marginVertical: 15,
                }}
                source={{ uri: item?.image }}
                resizeMode="contain"
              ></ImageBackground>
            ))}
          </ScrollView>
        </View>
      </View>
      <View>
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Image
            style={{ width: 120, height: 70, resizeMode: "contain" }}
            source={{
              uri: "https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50",
            }}
          />
        </View>
        <Text
          style={{
            color: "gray",
            textAlign: "center",
          }}
        >
          Your Sports community app
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
