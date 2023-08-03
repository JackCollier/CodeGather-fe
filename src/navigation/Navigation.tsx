import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import Welcome from "../screens/welcome/Welcome";
import SignIn from "../screens/welcome/SignIn";
import SignUp from "../screens/welcome/SignUp";
import Home from "../screens/home/Home";
import SingleEventPage from "../screens/home/SingleEventPage";
import Profile from "../screens/profile/Profile";
import Location from "../screens/location/Location";
import HostEvents from "../screens/host_events/HostEvents";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Tab() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === "HostEvents") {
            return (
              <MaterialIcons name="event-available" size={32} color="#3c8eba" />
            );
          } else if (route.name === "Home") {
            return <FontAwesome name="home" size={32} color="#3c8eba" />;
          } else if (route.name === "Host Event") {
            return <MaterialIcons name="event" size={32} color="#3c8eba" />;
          } else if (route.name === "Profile") {
            return <FontAwesome name="user-circle" size={32} color="#3c8eba" />;
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          ...stackScreenStyles.tab_style,
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="HostEvents"
        component={HostEvents}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={Tab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingleEventPage"
          component={SingleEventPage}
          options={{
            title: "Event",
          }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            title: "Event",
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ title: "Sign in" }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ title: "Sign up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stackScreenStyles = StyleSheet.create({
  tab_style: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    height: 60,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
