import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Onboard2 = ({ navigation }) => {
  const navigation = useNavigation()
  const Move = () =>{
    navigation.navigate('Onboard3')
      } 
      const SkipHandle = () =>{
        navigation.navigate('Login')
          }  

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          {/* Add status icons if needed */}
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Image4.jpg')} style={styles.image} />
        </View>
        <Text style={styles.taskManagementText}>Task Management</Text>
        <Text style={styles.workText}>Work more <Text style={styles.boldText}>Structured</Text> and Organized <Text style={styles.emoji}>👌</Text></Text>
      </View>
      
      <View style={styles.navigation}>
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <TouchableOpacity onPress={Move}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SkipHandle}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  taskManagementText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#6C63FF',
  },
  workText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 20,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6C63FF',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  skip: {
    fontSize: 16,
    color: '#6C63FF',
  },
});

export default Onboard2;
