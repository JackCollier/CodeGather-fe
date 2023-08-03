import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/welcome/Welcome";
import SignIn from "../screens/welcome/SignIn";
import SignUp from "../screens/welcome/SignUp";
import Home from "../screens/home/Home";
import SingleEventPage from "../screens/home/SingleEventPage";
import Profile from "../screens/profile/Profile";
import Location from "../screens/location/Location";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
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
