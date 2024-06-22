import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


const SeeAllComponent = ({SampleText, SeeAll, navigation}) => {
    return (
        <View style={styles.texts}>
          <Text style={styles.leftText}>{SampleText}</Text>
          <Text style={styles.rightText} onPress={() => navigation.navigate("SecondHomePage")}>{SeeAll}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      texts: {
        flexDirection: 'row', // Arrange child elements horizontally
        justifyContent: 'space-between', // Distribute evenly with space in between
        padding:10
      },
      leftText: {
        flex: 1, // Allow left text to grow and fill available space
        textAlign: 'left',
        fontWeight:'bold',
        fontSize:16
      },
      rightText: {
        flex: 1, // Allow right text to grow and fill available space
        textAlign: 'right',
        color:'rgb(10, 102, 194)',
        fontWeight:'bold'
      },
    });
    
  export default SeeAllComponent;