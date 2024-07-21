import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const EditProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your image URL
          style={styles.profileImage}
        />
        <Icon name="camera-alt" size={24} color="#000" containerStyle={styles.cameraIcon} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} defaultValue="Alvart Ainstain" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} defaultValue="albart.ainstain@gmail.com" keyboardType="email-address" />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} defaultValue="@albart.ainstain" />

        <Text style={styles.label}>Number</Text>
        <TextInput style={styles.input} defaultValue="+010 2120 112312" keyboardType="phone-pad" />
      </View>

      <Button title="Save" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});

export default EditProfile;
