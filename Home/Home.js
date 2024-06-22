import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import CustomHeader  from "./CustomHeader";
import HomeSearchInput from "./HomeSearchInput";
import SeeAllComponent from "./SeeAllComponent";
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: '1',
    image: 'https://plus.unsplash.com/premium_photo-1661901419930-5c28fd9e54ee?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: 'Station,Hampton,GA 23423',
    details: '3 bds | 5 baths | 1536 sqft',
    price: '$335,900',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 2563 sqft',
    price: '$289,700',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1524082983062-21c24967d6c9?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1869 sqft',
    price: '$456, 879',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$563,985',
  },
  {
    id: '5',
    image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$833,850',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$456,774',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$558,825',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$835,563',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$563,562',
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    title: 'HOME FOR SALE',
    location: '129 Hoper Ln,Folsom,CA',
    details: '3 bds | 5 baths | 1750 sqft',
    price: '$885,888',
  },
  // Add more property objects here
];


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader name="John Smith" />
        <HomeSearchInput />
        <SeeAllComponent SampleText="Latest Projects" SeeAll="SEE ALL" navigation={navigation} />
        <FlatList
        data={properties}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyCard
            image={item.image}
            title={item.title}
            location={item.location}
            details={item.details}
            price={item.price}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the screen
  },

});
export default Home;