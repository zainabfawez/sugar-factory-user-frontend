import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, View, TextInput, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchResults from "../components/searchResults";
import profilePic from '../../assets/profilePic.png'; 

const name = 'fullName';
const pic = profilePic;

export default function search( {navigation}) {

    return(

      <View style={ styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="search..."
              placeholderTextColor="grey"
              secureTextEntry={true}
              //onChangeText={(search) => setPassword(search)}
            />
          </View>
          <SearchResults fullName= {name} imgSource={pic} />
        
      </View>
    
   
      

      
    );
}
const styles = StyleSheet.create({

  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#fff",
   //alignItems: "center",
  },
 

  TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,            
  },

  inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      borderColor : "#FFC0CB",
      borderWidth : 1,
      width: "100%",
      height: 45,
      marginBottom: 20,
      marginTop: 20,
    
    },

    Btn: {
      width: "33%",
      borderRadius: 500/2,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFC0CB",
    },
  
    btnText: {
        color: "#fff"
    },

   
});


