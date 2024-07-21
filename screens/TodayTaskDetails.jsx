import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

const TodayTaskDetails = () => {
  const tasks = [
    {
      time: '10am - 11am',
      title: 'Wareframe elements',
      emoji: '😅',
      avatars: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    },
    {
      time: '11:40am - 12:40pm',
      title: 'Mobile app Design',
      emoji: '😍',
      avatars: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    },
    {
      time: '01:20pm - 02:20pm',
      title: 'Design Team call',
      emoji: '😢',
      avatars: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>October 20</Text>
      <Text style={styles.tasksCount}>15 tasks today</Text>
      {tasks.map((task, index) => (
        <Card key={index} containerStyle={styles.card}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.time}>{task.time}</Text>
              <Text style={styles.title}>{task.title} {task.emoji}</Text>
            </View>
            <View style={styles.avatars}>
              {task.avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  rounded
                  size="medium"
                  source={{ uri: avatar }}
                  containerStyle={styles.avatar}
                />
              ))}
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tasksCount: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    marginLeft: -10,
  },
});

export default TodayTaskDetails;
