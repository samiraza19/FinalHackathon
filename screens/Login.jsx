import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

const Login = () => {
  const navigation = useNavigation()
  const GoToSignUp = () =>{
    navigation.navigate('Signup')
      } 
      const Move = () =>{
        navigation.navigate('Home')
          } 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.instructionsText}>
          Please enter your email address and password for login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#C4C4C4"
          defaultValue="abc.xyz@gmail.com"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#C4C4C4"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Move} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.signInWithText}>Sign in with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylVBe6tCK567CLmouhW0BFgGsUQsv8QG4mw&s' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/256/2702/2702602.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={GoToSignUp}>
        <Text style={styles.signUpText}>
          Not Registered Yet? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  signInText: {
    fontSize: 24,
    color: '#9C27B0',
    textAlign: 'center',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  instructionsText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#C4C4C4',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#9C27B0',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  signInWithText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#C4C4C4',
    marginTop: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#C4C4C4',
    marginTop: 20,
  },
  signUpLink: {
    color: '#9C27B0',
    fontWeight: 'bold',
  },
});

export default Login;
