import React from "react";
import { StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';


export default function InputBox ({label, placeholder}) {
    return (
      <View>
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
      </View>

      );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
      //   alignItems: 'flex-start',
      //   justifyContent: 'center',
    //   marginBottom:0,
      padding:10
      },
    input: {
        height: 60,
        width: '100%',
        borderWidth: 1.5,
        padding: 10,
        borderRadius:30,
        borderColor:'rgb(10, 102, 194)',
      },
      label:{
        fontWeight: 'bold',
        marginBottom:4
      }
  });