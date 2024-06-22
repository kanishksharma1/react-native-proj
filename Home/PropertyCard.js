import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PropertyCard = ({ image, title, location, details, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.details}>{details}</Text>
        <Text style={styles.price}>Starting Price: {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height:250,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 120,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    color: '#555',
    marginBottom: 5,
  },
  details: {
    color: '#555',
    marginBottom: 5,
  },
  price: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PropertyCard;
