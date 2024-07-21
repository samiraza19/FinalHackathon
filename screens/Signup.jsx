import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Signup = () => {
  const navigation = useNavigation()
  const GoToLogin = () =>{
    navigation.navigate('Login')
      } 
      const Move = () =>{
        navigation.navigate('Home')
          } 


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle the sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subHeader}>Please enter your information and create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Albert Ainstain"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp ,Move}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signupWith}>Signup With</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <Image source={require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylVBe6tCK567CLmouhW0BFgGsUQsv8QG4mw&s')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('https://cdn-icons-png.flaticon.com/256/2702/2702602.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={GoToLogin}>
      <Text style={styles.signInText}>
        Have an Account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupWith: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  signInText: {
    textAlign: 'center',
    color: '#888',
  },
  signInLink: {
    color: '#6C63FF',
  },
});

export default Signup;
