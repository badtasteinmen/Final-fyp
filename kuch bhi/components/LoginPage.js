  import React, { useState } from "react";
  import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
  import { useAuth } from "../context/AuthContext"; // Import the context

  const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useAuth(); // Access login function and isLoading from context

    const handleLogin = async () => {
      if (!email || !password) {
        Alert.alert("Error", "Please fill in both fields");
        return;
      }

      const success = await login(email, password);

      if (success) {
        Alert.alert( "Login successful!");
        navigation.replace("MainApp"); // Navigate to the main app screen
      } else {
        Alert.alert( "Invalid credentials. Please try again.");
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title={isLoading ? "Logging in..." : "Login"} onPress={handleLogin} disabled={isLoading} />

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.signUpLink}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "pink",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      padding: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "black",
    },
    signUpLink: {
      marginTop: 20,
    },
    signUpText: {
      fontSize: 16,
      color: "blue",
      textDecorationLine: "underline",
    },
  });

  export default LoginPage;
