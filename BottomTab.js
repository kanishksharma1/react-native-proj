import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home/Home';
import SecondHomePage from './SecondHomePage/SecondHomePage';
import DummyScreen from './DummyScreen'; // Import the dummy screen
import FavoritesScreen from './FavoritesScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const [properties, setProperties] = useState([
    {
      id: '1',
      image: 'https://plus.unsplash.com/premium_photo-1661901419930-5c28fd9e54ee?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: 'Station,Hampton,GA 23423',
      details: '3 bds | 5 baths | 1536 sqft',
      price: '$335,900',
      isFavorite: false,
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 2563 sqft',
      price: '$289,700',
      isFavorite: false,
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1524082983062-21c24967d6c9?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1869 sqft',
      price: '$456, 879',
      isFavorite: false,
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$563,985',
      isFavorite: false,
    },
    {
      id: '5',
      image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$833,850',
      isFavorite: false,
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$456,774',
      isFavorite: false,
    },
    {
      id: '7',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$558,825',
      isFavorite: false,
    },
    {
      id: '8',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$835,563',
      isFavorite: false,
    },
    {
      id: '9',
      image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$563,562',
      isFavorite: false,
    },
    {
      id: '10',
      image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
      title: 'HOME FOR SALE',
      location: '129 Hoper Ln,Folsom,CA',
      details: '3 bds | 5 baths | 1750 sqft',
      price: '$885,888',
      isFavorite: false,
    },
  ]);

  const favoriteProperties = properties.filter(property => property.isFavorite);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'FavoritesScreen':
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
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="Chat" component={DummyScreen} />
      <Tab.Screen name="Profile" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
