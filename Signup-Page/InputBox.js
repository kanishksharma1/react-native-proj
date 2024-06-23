import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons

export default function InputBox ({label, placeholder, secureTextEntry = false, filter = false, style}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword} // Conditionally apply secureTextEntry based on props and showPassword state
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer}>
            <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
          </TouchableOpacity>
        )}
        {filter && (
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="filter-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
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
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
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
