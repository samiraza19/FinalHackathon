import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Onboard3 = () => {

const navigation = useNavigation()
  const Move = () =>{
navigation.navigate('Login')
  } 
  const SkipHandle = () =>{
    navigation.navigate('Login')
      } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: '../assets/Image4.jpg' }} style={styles.mainImage} />
          <View style={styles.chatBubble1}>
            {/* Replace with actual image or component for chat bubble 1 */}
          </View>
          <View style={styles.chatBubble2}>
            {/* Replace with actual image or component for chat bubble 2 */}
          </View>
        </View>
        <Text style={styles.taskManagementText}>Task Management</Text>
        <Text style={styles.descriptionText}>
          Manage your <Text style={styles.highlightedText}>Tasks</Text> quickly for Results✌️
        </Text>
        <View style={styles.pagination}>
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={Move} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={SkipHandle} style={styles.nextButton}>
            <Text style={styles.nextText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
  },
  chatBubble1: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  chatBubble2: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  taskManagementText: {
    fontSize: 20,
    color: '#9C27B0',
    textAlign: 'center',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  highlightedText: {
    color: '#9C27B0',
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C4C4C4',
    margin: 5,
  },
  paginationDotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9C27B0',
    margin: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    fontSize: 18,
    color: '#9C27B0',
  },
  nextButton: {
    backgroundColor: '#9C27B0',
    padding: 10,
    borderRadius: 50,
  },
  nextText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Onboard3;
