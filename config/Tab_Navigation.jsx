import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Home from '../screens/Home';
import Folder from '../screens/Projects';
import Add from '../screens/Add';
import Chats from '../screens/Chats';
import Profile from '../screens/Profile';

const Tab_Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#787CFC',
        tabBarActiveBackgroundColor: '#787CFC',
        tabBarInactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => {
            return <AntDesign color={color} name="home" size={30} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => {
            return <AntDesign color={color} name="folder1" size={30} />;
          },
        }}
        name="Projects"
        component={Folder}
      />
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => {
            return (
              <MaterialIcons
                color={color}
                name="add-circle-outline"
                size={30}
              />
            );
          },
        }}
        name="Add"
        component={Add}
      />
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => {
            return (
              <Fontisto
                color={color}
                name="hipchat"
                size={30}
              />
            );
          },
        }}
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => {
            return (
              <AntDesign
                color={color}
                name="user"
                size={30}
              />
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tab_Navigation;
