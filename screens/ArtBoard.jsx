// src/screens/TaskeyScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ArtBoard = () => {
    const navigation = useNavigation()
  const Onboard1 = () =>{
navigation.navigate('Onboard1')
  } 
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image 
          source={{uri: '../assets/Image1.jpg'}} 
          style={styles.image} 
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Taskey</Text>
        <Text style={styles.subtitle}>Building Better Workplaces</Text>
        <Text style={styles.description}>
          Create a unique emotional story that describes better than words
        </Text>
        <TouchableOpacity onPress={Onboard1} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Adjust background color to match the design
  },
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5A55CA',
  },
  subtitle: {
    fontSize: 24,
    color: '#5A55CA',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5A55CA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ArtBoard;
