import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import StarMap from './Screens/StarMap';
import DialyPic from './Screens/DailyPic';
import SpaceCrafts from './Screens/SpaceCrafts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : true}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Star Map" component = {StarMap}/>
        <Stack.Screen name = "Dialy Pictures" component = {DialyPic}/>
        <Stack.Screen name = "Space Crafts" component = {SpaceCrafts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
