import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './app/screens/homeScreen'; // Import the HomeScreen component

// Your font imports and fontsLoaded logic here

export default function App() {
  // Your fontsLoaded check here

  return (
    <View style={styles.container}>
      <HomeScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change the background color if needed
  },
});