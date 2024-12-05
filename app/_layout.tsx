import React, { useContext } from "react";
import { useFonts } from "expo-font";
import fonts from "@/config/fonts";
import { ToastProvider } from "react-native-toast-notifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "./(tabs)/_layout";
import VenueInfo from "./(routes)/VenueInfo/Index";
import Start from "./(routes)/Start/Index";
import Login from "./(routes)/Login/Index";
import Register from "./(routes)/Register/Index";
import Password from "./(routes)/Password/Index";
import Name from "./(routes)/Name/Index";
import SelectImage from "./(routes)/SelectImage/Index";
import PreFinal from "./(routes)/Prefinal/Index";
import { AuthContext, AuthProvider } from "@/context/AuthContext";
import Loading from "./(routes)/Loading/Index";
import { NavigationContainer } from "@react-navigation/native";
import CreateActivity from "./(routes)/CreateActivity";
import TagVenue from "./(routes)/TagVenue";
import { ModalPortal } from "react-native-modals";
import SelectTime from "./(routes)/SelectTime";
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent /> {/* Wrap the content with AuthProvider */}
      <ModalPortal />
    </AuthProvider>
  );
}

function AppContent() {
  // Separate component to access context
  const [fontsLoaded] = useFonts(fonts);
  const { isLoading, token } = useContext(AuthContext);

  if (!fontsLoaded) {
    // Handle font loading
    return null;
  }

  if (isLoading) {
    // Check isLoading *after* context is available
    return <Loading />;
  }

  function RootLayoutNav() {
    return (
      <ToastProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={TabLayout} />
          <Stack.Screen name="Venue" component={VenueInfo} />
          <Stack.Screen name="Create" component={CreateActivity} />
          <Stack.Screen name="TagVenue" component={TagVenue} />
          <Stack.Screen
            name="Time"
            component={SelectTime}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </ToastProvider>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Image" component={SelectImage} />
        <Stack.Screen name="PreFinal" component={PreFinal} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    );
  };

  return (
    <>{token === null || token === "" ? <AuthStack /> : <RootLayoutNav />}</>
  );
}
