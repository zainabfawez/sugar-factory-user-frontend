import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './src/tabs/bottomTab';
import login from './src/screens/login'
import signup from './src/screens/signup';
import profile from './src/screens/profile';
import home from './src/screens/home';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
  },
};
 

export default function App() {
  const Stack = createStackNavigator();
	return(
    <NavigationContainer theme={MyTheme}>
			
    <Stack.Navigator initialRouteName = "Login">
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Signup" component={signup} />
      <Stack.Screen name="Profile" component={profile} /> {/*might be useless*/}
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="BottomTab" 
          component={BottomTab}
          options={{
            title:""
          }}/>

    </Stack.Navigator>
    </NavigationContainer>
	)}