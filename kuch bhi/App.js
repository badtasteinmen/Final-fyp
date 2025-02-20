
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Index from "./components/Index";
import Theory from "./components/Theory";
import Unit from "./components/Unit";
import LoginPage from "./components/LoginPage"; // Import the LoginPage
import SignIn from "./components/SignIn";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Theory
const TheoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TheoryMain" component={Theory} />
      <Stack.Screen name="Unit" component={Unit} />
    </Stack.Navigator>
  );
};

const SignInStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator> 
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainApp">
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: "#f8f8f8", height: 60 },
                tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                tabBarActiveTintColor: "#6200ee",
                tabBarInactiveTintColor: "gray",
                tabBarIcon: ({ color, size }) => {
                  let iconName;
                  if (route.name === "Home") iconName = "home-outline";
                  else if (route.name === "About") iconName = "information-circle-outline";
                  else if (route.name === "Theory") iconName = "book-outline";
                  else if (route.name === "Quiz") iconName = "help-circle-outline";
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="About" component={Index} />
              <Tab.Screen name="Theory" component={TheoryStack} />
              <Tab.Screen name="Quiz" component={Quiz} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
s