import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Icon = ({socialMedia, source}) => {
  return (
    

    
    <View style={styles.container}>
      <Image
        source={source} // Replace with your icon source
        style={styles.icon}
      />
      <Text style={styles.text}>{socialMedia}</Text>
    </View>


  );
};

const styles = StyleSheet.create({
    outerContainer:{
        padding:10,
        
    },
  container: {
    backgroundColor: '#ccc',
    borderRadius: 35, // Adjust border radius as desired
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding:10, // Add padding for better spacing
  //  width:'140px',
  textAlign:'center',
  paddingLeft:'auto',
  marginBottom:'20px'
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10, // Add margin for spacing
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Icon;
