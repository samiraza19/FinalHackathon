import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', title: 'Unity Dashboard', emoji: '😌', category: 'Design', progress: 10, total: 20, users: [require('./user1.png'), require('./user2.png')] },
  { id: '2', title: 'Instagram Shots', emoji: '✍️', category: 'Marketing', progress: 10, total: 20, users: [require('./user1.png'), require('./user2.png')] },
  { id: '3', title: 'Cubbles', emoji: '😌', category: 'Design', progress: 10, total: 20, users: [require('./user1.png'), require('./user2.png')] },
  { id: '4', title: 'Ui8 Platform', emoji: '👑', category: 'Design', progress: 10, total: 20, users: [require('./user1.png'), require('./user2.png')] },
];

const ProjectItem = ({ title, emoji, category, progress, total, users }) => (
  <View style={styles.projectItem}>
    <View style={styles.projectHeader}>
      <Text style={styles.projectTitle}>{title} {emoji}</Text>
      <Text style={styles.projectProgress}>{progress}/{total}</Text>
    </View>
    <Text style={styles.projectCategory}>{category}</Text>
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${(progress / total) * 100}%` }]} />
    </View>
    <View style={styles.userContainer}>
      {users.map((user, index) => (
        <Image key={index} source={user} style={styles.userImage} />
      ))}
    </View>
  </View>
);

const Projects = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text style={styles.headerTitle}>Projects</Text>
      <TouchableOpacity>
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
    <TextInput style={styles.searchInput} placeholder="Search" />
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton}>
        <Text style={styles.tabText}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Text style={styles.tabText}>Recents</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Text style={styles.tabText}>All</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      data={data}
      renderItem={({ item }) => <ProjectItem {...item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.projectList}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectList: {
    paddingBottom: 100,
  },
  projectItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectProgress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default Projects;
