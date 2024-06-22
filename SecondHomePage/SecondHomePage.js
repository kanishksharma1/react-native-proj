import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import VerticalPropertyCard from '../SecondHomePage/VerticalPropertyCard';
import SeeAllComponent from '../Home/SeeAllComponent';
import CustomHeader from '../Home/CustomHeader';

const properties = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$567,900',
    address: '16523 Choke Cherry Dr, Victorville, CA 8728',
    details: '3 bds | 5 baths | 1,767 sqft',
    status: 'House for Sale',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '3',
    image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  {
    id: '10',
    image: 'https://plus.unsplash.com/premium_photo-1661901419930-5c28fd9e54ee?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200',
    price: '$489,000',
    address: '456 Another St, Somecity, TX 7890',
    details: '4 bds | 3 baths | 2,100 sqft',
    status: 'House for Sale',
  },
  // Add more property objects here
];

const SecondHomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
   <CustomHeader name="John Smith" />
    <SeeAllComponent style={StyleSheet.create({})}  SampleText="Properties Near You" SeeAll="SEE ALL" />
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VerticalPropertyCard
            image={item.image}
            price={item.price}
            address={item.address}
            details={item.details}
            status={item.status}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
//   listContainer: {
//     paddingVertical: 10,
//   },
});

export default SecondHomePage;
