import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

// Import your image (use a local image or a URL)
import backgroundImage from "../assets/back.png"; // Local image

const Home = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.title}>Welcome!!!!!!</Text>
      <View style={styles.preambleContainer}>
        <Text style={styles.preambleTitle}>Preamble of India:</Text>
        <Text style={styles.preambleText}>
          WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India
          into a SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC, REPUBLIC and to
          secure to all its citizens: JUSTICE, social, economic, and political;
          LIBERTY of thought, expression, belief, faith, and worship; EQUALITY
          of status and of opportunity; and to promote among them all FRATERNITY
          assuring the dignity of the individual and the unity and integrity of
          the Nation; IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of
          November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS
          CONSTITUTION.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15, // Added padding for better layout
    justifyContent: "center", // Center the content vertically
  },
  title: {
    fontSize: 28,
    color: "#06038D", // Darker color for better visibility
    marginBottom: 150,
    fontWeight: "bold",
    textAlign: "center",
    top: 0,
    fontFamily: "Indian Typewriter", // Custom Indian font (if available)
    textShadowColor: "#fff", // Adding a subtle shadow for better readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  title1: {
    fontSize: 28,
    color: "#2c3e50",
    fontWeight: "bold",
    textAlign: "center",
    top: -60,
    paddingLeft: 10,
    fontFamily: "Indian Typewriter", // Matching font style with title
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
    maxWidth: "80%",
    lineHeight: 24,
    fontFamily: "Garamond", // Elegant font for the description
  },
  preambleContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent white background
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    top: -80,
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#d35400", // A hint of orange to match the flag's theme
  },
  preambleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#06038D",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Indian Typewriter",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  preambleText: {
    fontSize: 14,
    color: "#06038D",
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "Garamond", // Ensuring consistent font family for text
  },
});

export default Home;
