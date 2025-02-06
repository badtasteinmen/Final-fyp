import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Unit = ({ route }) => {
  const { unit } = route.params;

  if (!unit) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{unit.title || "Untitled Unit"}</Text>
      {(unit.content || []).map((item, index) => {
        if (item.type === "text") {
          return (
            <Text key={index} style={styles.text}>
              {item.value}
            </Text>
          );
        } else if (item.type === "image") {
          return (
            <Image
              key={index}
              source={
                typeof item.value === "string"
                  ? { uri: item.value }
                  : item.value
              }
              style={styles.image}
              resizeMode="contain"
            />
          );
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 },
  image: { width: "100%", height: 200, marginVertical: 10 },
  loading: { fontSize: 18, textAlign: "center", marginTop: 20 },
});

export default Unit;
