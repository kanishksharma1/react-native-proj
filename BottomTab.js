import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home/Home';
import SecondHomePage from './SecondHomePage/SecondHomePage';
import DummyScreen from './DummyScreen'; // Import the dummy screen

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Heart':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Chat':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'SecondHomePage':
              iconName = focused ? 'business' : 'business-outline';
              break;
            default:
              iconName = 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#f8f8f8',
        },
      }}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="SecondHomePage" options={{ headerShown: false }} component={SecondHomePage} />
      <Tab.Screen name="Heart" component={DummyScreen}/>
      <Tab.Screen name="Chat" component={DummyScreen} />
      <Tab.Screen name="Profile" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
