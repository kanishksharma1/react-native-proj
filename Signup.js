import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView  } from 'react-native';
import InputBox from "./InputBox";
import SignupButton from "./SignupButton";
import Icon from "./Icon";


export default function Signup () {
    return (
      <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>SIGN UP</Text>
          <Text style={styles.p}>Sign Up Now and Get The Best Deals </Text>
          <View style={styles.line}></View>
          <InputBox label="Username" placeholder="Enter Your Username " />
          <InputBox label="Email" placeholder="Enter Email Address " />
          <InputBox label="Password" placeholder="Enter Password" />  
          <SignupButton />
          <Text style={styles.text}>or Continue With</Text>
          <View  style={styles.socialMediaMain}>
          <View style={styles.facebook}>
          <Icon  socialMedia="FACEBOOK" source={require('./facebook.png')} />
          </View>
        <View style={styles.google}>
        <Icon socialMedia="GOOGLE" source={require('./google.png')} />
        </View>
          </View>
          <Text style={StyleSheet.create({textAlign:'center', fontWeight:'bold'})}>Already have an Account? Sign In</Text>
        </View>
        
        </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    paddingTop: 80, // Adjust top inset as desired (in pixels)
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft:10,
      elevation: 5,
      
    }, 
    h1:{
        fontSize: 28,
        fontWeight: 'bold',
        padding:10, 
        paddingBottom:0
    },
    p:{
        fontSize: 14,
        fontWeight: '400',
        padding:10,
        paddingTop:0
    },
    line:{
        height:5,
        width:80,
        backgroundColor:'rgb(10, 102, 194)',
        borderRadius:10,
        marginLeft:11,
        marginBottom:30
    },
    text:{
      color:'grey',
      fontSize: 14,
      textAlign: 'center',
      padding:15
    },
    facebook:{
      marginBottom:10,
      width:160
    },
    google:{
      marginLeft:'auto',
      width:160
    },
    socialMediaMain:{
      flex: 1,
      flexDirection: 'row',
  
      padding:10
    }
  });
  