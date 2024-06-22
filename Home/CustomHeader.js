import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from "../Signup-Page/Icon";

const CustomHeader = ({ name }) => {
    return (
      <View style={styles.container}>
        {/* Container for icon and text */}
        <View style={styles.headerContent}>
          <Image
            source={require('../assets/menu.png')} // Replace with your icon source
            style={styles.icon}
          />
          <Text style={styles.text}>Hello, {name}</Text>
          <View style={styles.pairIcon}>
          <Image
            source={require('../assets/location.png')} // Replace with your icon source
            style={
                StyleSheet.create({width: 30,
      height: 30,})
            }
          />
           <Image
            source={require('../assets/bell.png')} // Replace with your icon source
            style={
                StyleSheet.create({width: 30,
      height: 30, marginLeft:20})
            }
          />
          </View>

        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff', // Set background color
      padding: 14,
      elevation: 4, // Add elevation for shadow (optional)
      shadowColor: 'grey', // Set shadow color (optional)
      shadowOffset: { width: 0, height: 4 }, // Adjust shadow offset (optional)
      shadowOpacity: 0.6, // Set shadow opacity (optional)
      shadowRadius: 4,
      marginTop:30
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      paddingLeft:20
    },
    icon: {
      width: 30,
      height: 30,
      paddingleft: 20, // Add margin for spacing
    },
    pairIcon:{
        flexDirection:'row',
        paddingLeft:50
    },
    headerContent: {
      flexDirection: 'row', // Arrange elements horizontally
    },
  });
  
  
  export default CustomHeader;
  