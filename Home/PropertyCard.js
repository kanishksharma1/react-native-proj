import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PropertyCard = ({ image, title, location, details, price, onToggleFavorite, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.details}>{details}</Text>
        <Text style={styles.price}>Starting Price:</Text>
        <Text style={styles.priceValue}>{price}</Text>
      </View>
      <TouchableOpacity onPress={onToggleFavorite} style={styles.heartIcon}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "#000"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    position: 'relative', // Necessary for positioning the heart icon
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
    marginBottom: 5, // Added margin bottom to separate from title
  },
  priceValue: {
    color: 'rgb(10, 102, 194)',
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default PropertyCard;
