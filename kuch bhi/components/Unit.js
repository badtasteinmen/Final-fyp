import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const backgroundImage = require("../assets/back1.png");
const windowWidth = Dimensions.get('window').width;

const ArticleModal = ({ visible, article, onClose }) => {
  const formatDescription = (text) => {
    if (!text) return '';
    let inFlowchart = false;
    
    return text.split('\n').map((line, index) => {
      // Start flowchart section when we see "Start"
      if (line.includes('Start')) {
        inFlowchart = true;
      }
      // End flowchart section when we see "End"
      if (line.includes('End')) {
        inFlowchart = false;
      }
      
      return (
        <Text key={index} style={[
          styles.modalDescription,
          line.includes('↓') && styles.arrow,
          line.includes('Start') && styles.startEnd,
          line.includes('End') && styles.startEnd,
          inFlowchart && 
          !line.includes('↓') && 
          !line.includes('Start') && 
          !line.includes('End') && 
          line.trim() !== '' && 
          styles.contentBox,
          !inFlowchart && line.trim() !== '' && !line.includes(':') && styles.theoryText
        ]}>
          {line}
        </Text>
      );
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#000080" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{article?.title}</Text>
          <ScrollView style={styles.modalScrollView}>
            <View style={styles.modalTextContainer}>
              {formatDescription(article?.description)}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const Unit = ({ route, navigation }) => {
  const { unit } = route.params;
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showArticleModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <ScrollView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>{unit.title}</Text>
        <View style={styles.articlesContainer}>
          {unit.content.map((article, index) => (
            <TouchableOpacity
              key={index}
              style={styles.articleButton}
              onPress={() => showArticleModal(article)}
            >
              <Text style={styles.articleButtonText}>{article.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ArticleModal
        visible={modalVisible}
        article={selectedArticle}
        onClose={() => setModalVisible(false)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
  },
  backButtonText: {
    color: '#000080',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000080',
    textAlign: 'center',
  },
  articlesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 12,
    marginVertical: 12,
    borderWidth: 3,
    borderColor: '#000080',
  },
  articleButton: {
    backgroundColor: '#E8E8FF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#000080',
    elevation: 2,
  },
  articleButtonText: {
    fontSize: 16,
    color: '#000080',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: windowWidth * 0.95,
    maxHeight: '80%',
    borderWidth: 5,
    borderColor: '#000080',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 1,
    padding: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000066',
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  modalScrollView: {
    marginTop: 10,
  },
  modalTextContainer: {
    paddingHorizontal: 10,
    width: '100%',
  },
  modalDescription: {
    fontSize: 14,
    color: '#1a1a1a',
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.2,
    marginBottom: 6,
  },
  arrow: {
    fontSize: 18,
    color: '#000080',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 3,
    width: '100%',
  },
  startEnd: {
    fontSize: 16,
    color: '#000080',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#E8E8FF',
    padding: 8,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    alignSelf: 'center',
  },
  flowLine: {
    fontSize: 14,
    color: '#000080',
    backgroundColor: '#F0F8FF',
    padding: 10,
    borderRadius: 8,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: '#000080',
    textAlign: 'center',
  },
  contentBox: {
    fontSize: 14,
    color: '#000080',
    backgroundColor: '#F0F8FF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#000080',
    textAlign: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  theoryText: {
    fontSize: 14,
    color: '#1a1a1a',
    lineHeight: 24,
    marginVertical: 4,
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default Unit;