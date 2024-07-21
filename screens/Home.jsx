import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation()
  const Move = () =>{
    navigation.navigate('TodayTaskDetails')
      } 
      const MoveToStatus = () =>{
        navigation.navigate('TasksStatus')
          } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="ios-menu" size={30} color="#000" />
        <Text style={styles.dateText}>Friday, 26</Text>
        <TouchableOpacity onPress={MoveToStatus}>
        <Icon name="ios-notifications-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Let's make a habits together 👏</Text>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Application Design</Text>
            <Text style={styles.cardSubtitle}>UI Design Kit</Text>
            <View style={styles.avatars}>
              <Image source={{ uri: 'https://media.gettyimages.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=gi&k=20&c=VZxqbEt_xq1_sAkA1dJzVWamCSZ8xl6yu71LTKC8B9A=' }} style={styles.avatar} />
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv_YKbzgmWGKqS1oJn9olIAe4rSjzex8gOQ&s' }} style={styles.avatar} />
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCPc8fRMZT8qUe3vAMaAFD2el3u0GthwSgQ&s' }} style={styles.avatar} />
            </View>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>Progress</Text>
            <Text style={styles.progressValue}>50/80</Text>
            <ProgressBar progress={0.625} color="#fff" style={styles.progressBar} />
          </View>
        </View>
        <Text style={styles.sectionTitle}>In Progress</Text>
        <View style={styles.task}>
         <TouchableOpacity onPress={Move}>
         <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Productivity Mobile App</Text>
            <Text style={styles.taskSubtitle}>Create Detail Booking</Text>
            <Text style={styles.taskTime}>2 min ago</Text>
          </View>
          <View style={styles.taskProgress}>
            <ProgressBar progress={0.6} color="#4CAF50" style={styles.taskProgressBar} />
            <Text style={styles.taskProgressText}>60%</Text>
          </View>
         </TouchableOpacity>
        </View>
       <TouchableOpacity onPress={Move}>
       <View style={styles.task}>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Banking Mobile App</Text>
            <Text style={styles.taskSubtitle}>Revision Home Page</Text>
            <Text style={styles.taskTime}>5 min ago</Text>
          </View>
          <View style={styles.taskProgress}>
            <ProgressBar progress={0.7} color="#FFC107" style={styles.taskProgressBar} />
            <Text style={styles.taskProgressText}>70%</Text>
          </View>
        </View>
       </TouchableOpacity>
        <TouchableOpacity onPress={Move}>
        <View style={styles.task}>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Online Course</Text>
            <Text style={styles.taskSubtitle}>Working On Landing Page</Text>
            <Text style={styles.taskTime}>7 min ago</Text>
          </View>
          <View style={styles.taskProgress}>
            <ProgressBar progress={0.8} color="#2196F3" style={styles.taskProgressBar} />
            <Text style={styles.taskProgressText}>80%</Text>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Icon name="ios-home" size={30} color="#000" />
        <Icon name="ios-document-text-outline" size={30} color="#000" />
        <View style={styles.addButton}>
          <Icon name="ios-add" size={30} color="#fff" />
        </View>
        <Icon name="ios-chatbubbles-outline" size={30} color="#000" />
        <Icon name="ios-person-outline" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#6200EE',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#EDE7F6',
    marginBottom: 10,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
  },
  progressValue: {
    color: '#fff',
  },
  progressBar: {
    width: '60%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskDetails: {},
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  taskTime: {
    fontSize: 12,
    color: '#aaa',
  },
  taskProgress: {
    alignItems: 'center',
  },
  taskProgressBar: {
    width: 50,
    height: 6,
    borderRadius: 3,
    marginBottom: 5,
  },
  taskProgressText: {
    fontSize: 12,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
});

export default Home;
