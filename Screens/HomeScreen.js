import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{
   render(){
    return(
      <View style = {styles.container}>
       <Text style = {styles.text}>HomeScreen Screen</Text>
      </View>
    );
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'white'
    },
    titlebar: {
      flex : 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    button: {
      flex : 0.2,
      marginLeft : 120,
      marginRight : 120,
      marginTop : 150,
      borderRadius : 100,
      backgroundColor : "white",
    },
    text: {
      fontSize : 18,
      fontWeight : 'bold',
      color : "black",
      alignItems: 'center',
      justifyContent: 'center',
      padding : 25
    },
    number: {
      position : 'absolute',
      fontWeight : 'bold',
      color : 'red',
    },
    background: {
      flex : 1,
      resizeMode : 'cover',
    },
    iconImage: {
      height : 50,
      width : 50,
      resizeMode : 'contain',
      position : 'absolute',
    }
  });
  