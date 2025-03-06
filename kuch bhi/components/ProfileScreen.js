import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  ScrollView,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const API_URL = "http://192.168.18.40:3000";

const profile_picture = require("../assets/profile.png");
const account = require("../assets/icons/account.png");
const help = require("../assets/icons/help.png");
const logout = require("../assets/icons/logout.png");
const notification = require("../assets/icons/notifications.png");
const scoresIcon = require("../assets/icons/scores.png");
const backgroundImage = require("../assets/back1.png");

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, logout: authLogout } = useAuth();
  const [accountModalVisible, setAccountModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [scoresModalVisible, setScoresModalVisible] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [userScores, setUserScores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/scores/user/${user?.username || 'Guest'}`);
      if (!response.ok) {
        throw new Error('Failed to fetch scores');
      }
      const data = await response.json();
      setUserScores(data);
    } catch (error) {
      console.error('Error fetching scores:', error);
      Alert.alert('Error', 'Failed to load scores');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authLogout();
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to logout");
    }
  };

  const handleAccountPress = () => {
    setAccountModalVisible(true);
  };

  const handleNotificationsPress = () => {
    setNotificationModalVisible(true);
  };

  const handleHelpPress = () => {
    setHelpModalVisible(true);
  };

  const handleScoresPress = () => {
    setScoresModalVisible(true);
  };

  const toggleNotifications = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <View style={styles.topSection}>
            <View style={styles.propicArea}>
              <Image source={profile_picture} style={styles.propic} />
            </View>
            <Text style={styles.name}>{user ? user.username : "Loading..."}</Text>
            <Text style={styles.email}>{user ? user.email : ""}</Text>
          </View>

          <View style={styles.buttonList}>
            {[
              { icon: account, label: "Account", action: handleAccountPress },
              { icon: notification, label: "Notifications", action: handleNotificationsPress },
              { icon: scoresIcon, label: `Quiz Scores (${userScores.length})`, action: handleScoresPress },
              { icon: help, label: "Help", action: handleHelpPress },
              { icon: logout, label: "Logout", action: handleLogout }
            ].map((item, index, array) => (
              <TouchableOpacity 
                key={index} 
                style={styles.buttonSection} 
                activeOpacity={0.9} 
                onPress={item.action}
              >
                <View style={styles.buttonArea}>
                  <View style={styles.iconContainer}>
                    <Image source={item.icon} style={styles.iconStyle} resizeMode="contain" />
                  </View>
                  <Text style={styles.buttonName}>{item.label}</Text>
                </View>
                {index !== array.length - 1 && <View style={styles.sp}></View>}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Scores Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={scoresModalVisible}
        onRequestClose={() => setScoresModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quiz Scores</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : userScores.length > 0 ? (
              <ScrollView 
                style={styles.scoresList}
                contentContainerStyle={styles.scoresListContent}
                showsVerticalScrollIndicator={true}
                bounces={true}
              >
                <View style={styles.scoresGrid}>
                  {userScores.map((score, index) => (
                    <View key={index} style={styles.scoreBox}>
                      <Text style={styles.scoreValue}>{score.score}/{score.totalQuestions}</Text>
                      <Text style={styles.scoreUnit} numberOfLines={1} ellipsizeMode="tail">{score.unit}</Text>
                      {score.subUnit && (
                        <Text style={styles.scoreSubUnit} numberOfLines={1} ellipsizeMode="tail">{score.subUnit}</Text>
                      )}
                      <Text style={styles.scoreDateText}>{formatDate(score.completedAt)}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            ) : (
              <Text style={styles.noScoresText}>No quiz scores yet</Text>
            )}
            <TouchableOpacity 
              onPress={() => setScoresModalVisible(false)} 
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Other existing modals... */}
      {/* Account Info Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={accountModalVisible}
        onRequestClose={() => setAccountModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>User Information</Text>
            {user ? (
              <View>
                <Text style={styles.modalText}>Username: {user.username}</Text>
                <Text style={styles.modalText}>Email: {user.email}</Text>
              </View>
            ) : (
              <Text style={styles.modalText}>Loading...</Text>
            )}
            <TouchableOpacity onPress={() => setAccountModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={notificationModalVisible}
        onRequestClose={() => setNotificationModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Notification Settings</Text>
            <Text style={styles.modalText}>
              Notifications are currently {notificationEnabled ? "Enabled" : "Disabled"}.
            </Text>
            <TouchableOpacity onPress={toggleNotifications} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                {notificationEnabled ? "Turn Off" : "Turn On"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNotificationModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Help Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={helpModalVisible}
        onRequestClose={() => setHelpModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Help & Support</Text>
            <Text style={styles.modalText}>For support, contact us at:</Text>
            <Text style={styles.modalText}>📧 support@example.com</Text>
            <Text style={styles.modalText}>📞 +123-456-7890</Text>
            <TouchableOpacity onPress={() => setHelpModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  topSection: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
  },
  propicArea: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 4,
    borderColor: "#FFBB3B",
    overflow: "hidden",
    backgroundColor: 'white',
  },
  propic: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: 20,
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  email: {
    marginTop: 5,
    color: "black",
    fontSize: 18,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonList: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  buttonSection: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  buttonName: {
    width: 300,
    fontSize: 20,
    color: "black",
    marginLeft: 20,
  },
  sp: {
    width: "100%",
    marginTop: 10,
    height: 1,
    backgroundColor: "#00000045",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  toggleButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  toggleButtonText: {
    color: "white",
    fontSize: 16,
  },
  scoresList: {
    width: '100%',
    maxHeight: 400,
    marginVertical: 10,
  },
  scoresListContent: {
    paddingVertical: 5,
  },
  scoresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  scoreBox: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFBB3B',
    textAlign: 'center',
    marginBottom: 5,
  },
  scoreUnit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  scoreSubUnit: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
  scoreDateText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  scoreIconText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  scoreTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  subUnitText: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  dateText: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
    fontStyle: 'italic',
  },
  noScoresText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ProfileScreen;
