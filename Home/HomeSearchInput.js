import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBox from '../Signup-Page/InputBox';

const HomeSearchInput = ({label, placeholder, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image  style={styles.searchIcon} source={require('../assets/glass.png')}/>
      <View >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder= "Find Rend, Sale & Buy Home"
         
        />
      </View>
    </View>
      <Image style={styles.filterIcon} source={require('../assets/setting.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    position: 'absolute',
    left: 22,
    bottom:18,
    zIndex: 1,
    width:20,
    height:22
  },
  filterIcon: {
    position: 'absolute',
    right: 25,
    bottom:20,
    zIndex: 1,
    width:20,
    height:22
  },
  inputPadding:{
    padding:0,
    marginBottom:0
  },

  container: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight:10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgb(10, 102, 194)',
  },
  input: {
    height: 60,
    flex: 1, // Take up remaining space in the inputContainer
    paddingLeft:40
  },
  iconContainer: {
    paddingRight: 15,
    paddingLeft: 10,
  },
  filterContainer:{
    paddingRight: 15,
    paddingLeft: 10,
  }
});

export default HomeSearchInput;
