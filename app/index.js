import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/homeScreen'; // Import the HomeScreen component
import UserDashboard from './screens/userDashboard';
// Your font imports and fontsLoaded logic here

export default function Page() {
  // Your fontsLoaded check here

  return (
    <View style={styles.container}>
      <UserDashboard /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change the background color if needed
  },
});