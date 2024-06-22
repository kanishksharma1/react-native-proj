import React from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from "./Signup-Page/Signup";
import Home from "./Home/Home";
import SecondHomePage from "./SecondHomePage/SecondHomePage";

const Stack = createNativeStackNavigator();

export default function App() {

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  
  return (
    // <Signup/>
    <NavigationContainer theme={navTheme} >
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F0F0F0" translucent = {true}/>
      <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen 
        name="Signup" 
        component={Signup}
        options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondHomePage"
          component={SecondHomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

