import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

// Import your image (you can use a local image or a URL)
import backgroundImage from "../assets/back.png"; // Replace with your image path

const App = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxTitle}>About the Indian Constitution</Text>
          <Text style={styles.infoBoxText}>
            The Constitution of India is the supreme law and foundation of the
            country’s governance, adopted on November 26, 1949, and enforced on
            January 26, 1950. It is the longest written constitution in the
            world, originally consisting of 395 articles, 22 parts, and 8
            schedules, which have expanded over time. The Preamble declares
            India to be a Sovereign, Socialist, Secular, and Democratic
            Republic, ensuring justice, liberty, equality, and fraternity for
            all citizens. Fundamental Rights (Articles 12-35) guarantee basic
            freedoms, while Directive Principles of State Policy (Articles
            36-51) provide guidelines for socio-economic development.
            Fundamental Duties, added in 1976, outline the moral
            responsibilities of citizens. The Constitution establishes a
            parliamentary system with a division of powers between the Union and
            States, emphasizing federalism with a unitary bias during
            emergencies. Its independent judiciary upholds constitutional
            supremacy and safeguards citizens' rights. Emergency provisions
            (Articles 352, 356, and 360) enable the government to manage crises.
            The Constitution is amendable through Article 368, balancing
            flexibility and rigidity to adapt to changing needs. It remains a
            living document, fostering unity in diversity and guiding India's
            democratic journey.
          </Text>
        </View>
        <View style={styles.thickBorderBox}>
          <Text style={styles.thickBorderBoxTitle}>
            Dr. Bhimrao Ramji Ambedkar
          </Text>
          <Text style={styles.thickBorderBoxText}>
            Dr. Bhimrao Ramji Ambedkar, known as Baba Saheb Ambedkar, was a
            social reformer, jurist, and the principal architect of the Indian
            Constitution. Born on April 14, 1891, in Mhow, Madhya Pradesh, he
            rose from an oppressed background to become one of India's most
            influential leaders. A highly educated scholar, he earned degrees
            from Columbia University, the London School of Economics, and Gray’s
            Inn, specializing in law, economics, and political science. As
            Chairman of the Constitution Drafting Committee, Ambedkar played a
            pivotal role in shaping India’s democratic framework. He advocated
            for fundamental rights that ensured equality, liberty, and justice
            for all citizens, emphasizing the abolition of untouchability
            (Article 17). A champion for Dalit rights, Ambedkar worked
            tirelessly to eradicate caste-based discrimination. Honored with the
            Bharat Ratna in 1990, Ambedkar’s legacy continues to guide India as
            a beacon of social equality and justice.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    justifyContent: "center",
  },

  // contentContainer: {
  //   flex: 1,
  // },

  infoBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency for readability
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#06038D", // Orange (reflecting India's flag)
    marginBottom: 0,
    top: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  infoBoxTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#06038D", // Dark color for title
    fontFamily: "Indian Typewriter", // A font that reflects Indian heritage (if available)
  },

  infoBoxText: {
    fontSize: 16,
    color: "#06038D", // Lighter text color for better readability
    lineHeight: 22,
    fontFamily: "Garamond", // Elegant font
  },

  thickBorderBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#06038D", // Match the theme with the Indian flag colors
    marginBottom: 150,
    top: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  thickBorderBoxTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#06038D", // Darker title color
    textAlign: "center",
    fontFamily: "Indian Typewriter",
  },

  thickBorderBoxText: {
    fontSize: 16,
    color: "#06038D",
    lineHeight: 22,
    textAlign: "justify",
    fontFamily: "Garamond", // Consistent font for text content
  },
});

export default App;
