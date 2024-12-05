import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current; // Correct: Create a ref for the Animated.Value

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        // Use Animated.timing for rotation animations
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.activityIndicator, { transform: [{ rotate: spin }] }]}
      >
        <View style={styles.innerCircle} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Or a subtle gradient
  },
  activityIndicator: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "#007bff", // Or your primary color
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007bff", // Match the border color
  },
});

export default LoadingScreen;
