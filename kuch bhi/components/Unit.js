import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Unit = ({ route }) => {
  const { unit } = route.params; // This retrieves the 'unit' data passed during navigation.

  return (
    <View style={styles.container}>
      <View style={styles.unitHeader}>
        <Text style={styles.title}>{unit.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {unit.content.map((paragraph, idx) => (
          <View key={idx} style={styles.contentBox}>
            <Text style={styles.subsectionTitle}>Section {unit.title}.{idx + 2}</Text>
            <Text style={styles.contentText}>{paragraph}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  unitHeader: {
    width: "100%",
    backgroundColor: "#ff6f61",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  contentBox: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6f61",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify",
  },
});

export default Unit;