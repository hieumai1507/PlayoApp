import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";
import { useNavigation } from "expo-router";

// Định nghĩa kiểu dữ liệu cho User
interface User {
  image: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
}

// Định nghĩa kiểu dữ liệu cho Coordinates
interface Coordinates {
  latitude: number;
  longitude: number;
}

const StartScreen: React.FC = () => {
  const mapView = useRef<MapView | null>(null);
  const [coordinates] = useState<Coordinates[]>([
    { latitude: 12.9716, longitude: 77.5946 },
    { latitude: 13.0451, longitude: 77.6269 },
  ]);

  const users: User[] = [
    {
      image:
        "https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "1",
      latitude: "13.1295",
      longitude: "79.5977",
      name: "sujan",
      description: "Hey!",
    },
    {
      image:
        "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "2",
      latitude: "13.155",
      longitude: "77.6070",
      name: "suhas",
      description: "let's play",
    },
    {
      image:
        "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "3",
      latitude: "13.0977",
      longitude: "77.5839",
      name: "ashish",
      description: "I'm always",
    },
    {
      image:
        "https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "4",
      latitude: "13.0490",
      longitude: "77.5936",
      name: "abhi",
      description: "At 8pm?",
    },
    {
      image:
        "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "5",
      latitude: "13.0623",
      longitude: "77.5871",
      name: "akash",
      description: "Hey!",
    },
    {
      image:
        "https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=800",
      id: "6",
      latitude: "13.0354",
      longitude: "77.5988",
      name: "Preetham",
      description: "What up?",
    },
  ];

  useEffect(() => {
    if (mapView.current) {
      mapView.current.fitToCoordinates(circularPoints, {
        edgePadding: { top: 70, bottom: 70, left: 70, right: 70 },
      });
    }
  }, []);

  const BANGALORE_COORDS: Coordinates = {
    latitude: 12.0016987,
    longitude: 77.5945627,
  };

  const navigation = useNavigation();

  // Hàm tạo các điểm theo hình tròn
  const generateCircularPoints = (
    center: Coordinates,
    radius: number,
    numPoints: number
  ): Coordinates[] => {
    const points: Coordinates[] = [];
    const angleStep = (2 * Math.PI) / numPoints;

    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep;
      const latitude = center.latitude + (radius / 111) * Math.cos(angle);
      const longitude =
        center.longitude +
        (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle);
      points.push({ latitude, longitude });
    }
    return points;
  };

  const numPoints = 6;
  const radius = 5;
  const circularPoints = generateCircularPoints(
    BANGALORE_COORDS,
    radius,
    numPoints
  );
  console.log("Points", JSON.stringify(circularPoints, null, 2)); // Log outside the return

  return (
    <SafeAreaView>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: 400 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {circularPoints.map((point, index) => {
          const user = users[index % users.length]; // cycle through user if more points than the users
          return (
            <Marker key={index} coordinate={point}>
              <View
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: "cover",
                    borderRadius: 35,
                  }}
                  source={{ uri: user.image }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "500",
                  }}
                >
                  {user.description}
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>

      <View
        style={{
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            width: "50%",
            textAlign: "center",
          }}
        >
          Find Player in your neighbourhood
        </Text>
        <Text style={{ marginTop: 20, color: "gray", fontSize: 15 }}>
          Just like you did as a Kid!
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "gray" }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Image
          style={{ width: 110, height: 60, resizeMode: "contain" }}
          source={{
            uri: "https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50",
          }}
        />
      </View>

      <View
        style={{ padding: 10, backgroundColor: "white", marginTop: "auto" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            marginTop: "auto",
            backgroundColor: "#87CEEB",
            padding: 12,
            borderRadius: 7,
            marginBottom: 20,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "500", color: "white" }}
          >
            READY, SET, GO
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
