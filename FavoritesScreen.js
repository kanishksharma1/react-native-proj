import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropertyCard from './Home/PropertyCard'; // Make sure the path is correct

const FavoritesScreen = ({ route }) => {
  const { favoriteProperties } = route.params || { favoriteProperties: [] }; // Provide a default value

  return (
    <FlatList
      data={favoriteProperties}
      renderItem={({ item }) => (
        <PropertyCard
          image={item.image}
          title={item.title}
          location={item.location}
          details={item.details}
          price={item.price}
          isFavorite={true}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default FavoritesScreen;
