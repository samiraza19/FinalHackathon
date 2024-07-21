// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard1 from '../screens/Onboard1';
import ArtBoard from '../screens/ArtBoard';
import Onboard2 from '../screens/Onboard2';
import Onboard3 from '../screens/Onboard3';
import Home from '../screens/Home';
import TodayTaskDetails from '../screens/TodayTaskDetails';
import MonthlyTasks from '../screens/MonthlyTask';
import Add from '../screens/Add';
import AddTasks from '../screens/AddTasks';
import Chats from '../screens/Chats';
import TasksStatus from '../screens/TasksStatus';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard1">
      <Stack.Screen name="ArtBoard" component={ArtBoard} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard1" component={Onboard1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard2" component={Onboard2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard3" component={Onboard3} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Navigator initialRouteName="TodayTaskDetails">
        <Stack.Screen name="TodayTaskDetails" component={TodayTaskDetails} />
        <Stack.Screen name="MonthlyTasks" component={MonthlyTasks} />
      </Stack.Navigator>
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="AddTasks" component={AddTasks} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="TasksStatus" component={TasksStatus} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
