import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

// Import your image (use a local image or a URL)
import backgroundImage from "../assets/back.png"; // Local image

const Home = () => {
  return (
    <ScrollView>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Text style={styles.title}>!!Welcome!!</Text>

        <View style={styles.welcomeSection}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeTitle}>To The Constitution Learning App</Text>
            <Text style={styles.welcomeDescription}>
              Explore the fundamental principles and laws that govern our nation. Learn about the constitution in an interactive and engaging way.
            </Text>
          </View>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Text style={styles.featureIcon}>📚</Text>
            </View>
            <Text style={styles.featureTitle}>Interactive Lessons</Text>
            <Text style={styles.featureDescription}>
              Engage with interactive lessons that make learning about the constitution fun and easy.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Text style={styles.featureIcon}>📖</Text>
            </View>
            <Text style={styles.featureTitle}>Detailed Articles</Text>
            <Text style={styles.featureDescription}>
              Read detailed articles that explain various aspects of the constitution in simple terms.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Text style={styles.featureIcon}>✍️</Text>
            </View>
            <Text style={styles.featureTitle}>Quizzes and Tests</Text>
            <Text style={styles.featureDescription}>
              Test your knowledge with quizzes and tests designed to reinforce your understanding.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    minHeight: '100%',
  },
  title: {
    fontSize: 50,
    color: "#06038D",
    marginBottom: 30,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: "Bookman Old Style",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  welcomeSection: {
    marginHorizontal: 10,
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#06038D",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Bookman Old Style",
  },
  descriptionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000080",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  welcomeDescription: {
    fontSize: 18,
    color: "#000080",
    textAlign: "center",
    lineHeight: 26,
    fontFamily: "Bookman Old Style",
  },
  featuresContainer: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  featureCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: "#000080",
  },
  featureIconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  featureIcon: {
    fontSize: 40,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#06038D",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Indian Typewriter",
  },
  featureDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Bookman Old Style",
  },
});

export default Home;

