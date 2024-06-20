import React from "react";
import { StyleSheet, SafeAreaView, TextInput, Text, View, TouchableOpacity } from 'react-native';


export default function SignupButton () {
    return (
        <View style={styles.container}>
        {/* <button style={styles.button}> <Text>Sign Up Now</Text> </button> */}
        <TouchableOpacity style={styles.button} onPress={() => { /* handle press */ }}>
        <Text style={styles.buttonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
      //   alignItems: 'flex-start',
      //   justifyContent: 'center',
    //   marginBottom:0,
    //   padding:10
    padding:10
      },
      button:{
        backgroundColor:'rgb(10, 102, 194)',
        fontWeight: 'bold',
        color:'white',
        width:'100%',
        padding:20,
        borderRadius:30,
      },
      buttonText:{
        textAlign: 'center',
        fontSize:15,
        fontWeight: 'bold',
        color:'white'
      }



  });