// Onboard1.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Onboard1 = ({ navigation }) => {
  const navigation = useNavigation()
  const Move = () =>{
navigation.navigate('Onboard2')
  } 
  const SkipHandle = () =>{
    navigation.navigate('Login')
      } 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={(SkipHandle) => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <Image source={{ uri: 'https://media.istockphoto.com/id/1426312063/photo/business-girl-with-phone-typing-during-work-break-replying-to-email-sms-message-or-networking.jpg?s=612x612&w=0&k=20&c=yJ5zJ4IV2YT_WxpXQZklX_0T7n6xvwANNfhR_FigHuM=' }} style={styles.profileImage} />
          <View style={styles.messageBubble} />
        </View>
        <View style={styles.messageContainer}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCORRKCrlqVlwoqxvURoEAuHHOImId_QyaA&s' }} style={styles.profileImage} />
          <View style={styles.messageBubble} />
        </View>
        <View style={styles.messageContainer}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVgJOMGwQ2l_Ij_nlontfVpTTfQjxzOqgDw&s' }} style={styles.profileImage} />
          <View style={styles.messageBubble} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Task Management</Text>
        <Text style={styles.subtitle}>Let's create a <Text style={styles.highlight}>space</Text> for your workflows.</Text>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={(Move) => navigation.navigate('Onboard2')}>
          <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  skip: {
    fontSize: 16,
    color: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  messageBubble: {
    width: 150,
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#6C63FF',
    textAlign: 'center',
    marginVertical: 16,
  },
  highlight: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6C63FF',
  },
  nextButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default Onboard1;
