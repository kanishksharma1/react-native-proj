import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VerticalPropertyCard = ({ image, price, address, details, status, onToggleFavorite, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.details}>{details}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusIndicator} />
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onToggleFavorite} style={styles.heartIcon}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "#000"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#555',
    marginBottom: 5,
  },
  details: {
    color: '#555',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
  status: {
    color: 'green',
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default VerticalPropertyCard;
