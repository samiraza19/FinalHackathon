import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const chats = [
  {
    id: '1',
    name: 'Jenny Alxinder',
    status: 'Active now',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Team Align',
    status: 'Active 1h ago',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    id: '3',
    name: 'Alex Avishek',
    status: 'Active 1h ago',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    id: '4',
    name: 'Jafor Dicrose',
    status: 'Active 1h ago',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
];

const Chats = () => {
  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatStatus}>{item.status}</Text>
      </View>
      <TouchableOpacity style={styles.cameraIcon}>
        <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual camera icon */}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual home icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual folders icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButtonPlus}>
          <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual plus icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual messages icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} /> {/* Replace with actual user icon */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    paddingLeft: 15,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatStatus: {
    color: 'gray',
  },
  cameraIcon: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  footerButton: {
    padding: 10,
  },
  footerButtonPlus: {
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 25,
  },
});

export default Chats;
