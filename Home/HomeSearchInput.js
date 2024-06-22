import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBox from '../Signup-Page/InputBox';

const HomeSearchInput = () => {
  return (
    <View style={styles.wrapper}>
      <Image  style={styles.searchIcon} source={require('../assets/glass.png')}/>
      <InputBox label="" placeholder="Find Rent, Sale & Buy Home" />
      <Image style={styles.filterIcon} source={require('../assets/setting.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    position: 'absolute',
    left: 25,
    bottom:28,
    zIndex: 1,
    width:20,
    height:20
  },
  inputBox: {
    flex: 1, // Optional for better alignment (consider if using flexbox)
    padding: 16, // Increased padding to create space between icon and text
  },
  filterIcon: {
    position: 'absolute',
    right: 25,
    bottom:30,
    zIndex: 1,
    width:20,
    height:20
  },
});

export default HomeSearchInput;
