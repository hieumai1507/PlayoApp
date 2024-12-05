import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SelectTimeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Select Suitable Time",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
      },
    });
  }, []);
  const [time, setTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const times = [
    {
      id: "0",
      type: "morning",
      timings: "12 am - 9 am",
      icon: <Ionicons name="partly-sunny-outline" size={24} color="black" />,
    },
    {
      id: "1",
      type: "Day",
      timings: "9 am - 4 pm",
      icon: <Feather name="sun" size={24} color="black" />,
    },
    {
      id: "2",
      type: "evening",
      timings: "4pm - 9 pm",
      icon: <Feather name="sunset" size={24} color="black" />,
    },
    {
      id: "3",
      type: "night",
      timings: "9pm am - 11 pm",
      icon: <Ionicons name="cloudy-night-outline" size={24} color="black" />,
    },
  ];

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };
  const handleConfirmTime = (time: any) => {
    setStartTime(time);
    hideStartTimePicker();
  };
  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };
  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };
  const handleConfirmEndTime = (time: any) => {
    setEndTime(time);
    hideEndTimePicker();
    if (startTime) {
      const formattedStartTime = formatTime(startTime);
      const formattedEndTime = formatTime(time);
      const timeInterval = `${formattedStartTime} - ${formattedEndTime}`;
      navigation.navigate("Create", { timeInterval });
    }
  };
  const selectTime = (item: any) => {
    setTime(item);
    navigation.goBack();
  };
  const formatTime = (time: any) => {
    if (!time) return "Select Time";
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours} : ${formattedMinutes} : ${ampm}`;
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {times?.map((item, index) => (
          <TouchableOpacity
            onPress={() => selectTime(item.type)}
            key={index}
            style={{
              backgroundColor: "white",
              margin: 20,
              width: 160,
              height: 120,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              gap: 15,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            {item?.icon}
            <Text>{item?.type}</Text>
            <Text>{item?.timings}</Text>
          </TouchableOpacity>
        ))}
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.label}>Start Time: </Text>
          <Button title={formatTime(startTime)} onPress={showStartTimePicker} />
          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideStartTimePicker}
            is24Hour={false}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.label}>End Time: </Text>
          <Button title={formatTime(endTime)} onPress={showEndTimePicker} />
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmEndTime}
            onCancel={hideEndTimePicker}
            is24Hour={false}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectTimeScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  timeContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  summaryContainer: {
    marginTop: 32,
    alignItems: "center",
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
