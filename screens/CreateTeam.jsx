import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const CreateTeam = ({ navigation }) => {

    const navigation = useNavigation()
    const Move = () =>{
      navigation.navigate('Add')
        } 

  const [teamName, setTeamName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Jeny', image: 'url/to/jeny-image' },
    { id: 2, name: 'Mehrin', image: 'url/to/mehrin-image' },
    { id: 3, name: 'Avishek', image: 'url/to/avishek-image' },
    { id: 4, name: 'Jafor', image: 'url/to/jafor-image' },
  ]);
  const [selectedType, setSelectedType] = useState('Private');

  const pickImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (!response.didCancel && !response.error) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const renderTeamMember = (member) => (
    <View key={member.id} style={styles.teamMember}>
      <Image source={{ uri: member.image }} style={styles.memberImage} />
      <Text>{member.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Create Team</Text>
      <TouchableOpacity style={styles.logoContainer} onPress={pickImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.logo} />
        ) : (
          <Ionicons name="image" size={40} color="#ccc" />
        )}
      </TouchableOpacity>
      <Text style={styles.uploadText}>Upload logo file</Text>
      <Text style={styles.publishText}>Your logo will publish always</Text>
      <TextInput
        style={styles.input}
        placeholder="Team Name"
        value={teamName}
        onChangeText={setTeamName}
      />
      <View style={styles.teamMembersContainer}>
        {teamMembers.map(renderTeamMember)}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={40} color="#ccc" />
        </TouchableOpacity>
      </View>
      <View style={styles.typeContainer}>
        {['Private', 'Public', 'Secret'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.typeButton, selectedType === type && styles.selectedTypeButton]}
            onPress={() => setSelectedType(type)}
          >
            <Text style={styles.typeButtonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={Move} style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Team</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateTeam" component={CreateTeam} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  uploadText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  publishText: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  teamMembersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  teamMember: {
    alignItems: 'center',
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  typeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  selectedTypeButton: {
    backgroundColor: '#007bff',
  },
  typeButtonText: {
    color: '#007bff',
  },
  createButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
