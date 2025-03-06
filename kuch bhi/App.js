import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Index from "./components/Index";
import Theory from "./components/Theory";
import Unit from "./components/Unit";
import LoginPage from "./components/LoginPage"; // Import the LoginPage
import SignUpPage from "./components/SignupPage";
import ProfileScreen from "./components/ProfileScreen"; // Import ProfileScreen
import { AuthProvider, useAuth } from "./context/AuthContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Quiz wrapper component
const QuizWrapper = () => {
  const { user } = useAuth();
  return <Quiz username={user ? user.username : 'Guest'} />;
};

// Stack Navigator for Theory
const TheoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TheoryMain" component={Theory} />
      <Stack.Screen name="Unit" component={Unit} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainApp"
            options={{ 
              headerShown: true,
              title: "Essence of Constitution",
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarStyle: { backgroundColor: "#f8f8f8", height: 60 },
                  tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
                  tabBarActiveTintColor: "#6200ee",
                  tabBarInactiveTintColor: "gray",
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Theory') {
                      iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Quiz') {
                      iconName = focused ? 'help-circle' : 'help-circle-outline';
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'About') {
                      iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                })}
              >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={Index} />
                <Tab.Screen name="Theory" component={TheoryStack} />
                <Tab.Screen 
                  name="Quiz" 
                  component={QuizWrapper}
                  options={{ unmountOnBlur: true }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
