import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilePic from '../../assets/profilePic.png'; 

//import profile from "../screens/profile";


export default function SearchResults({imgSource}, {fullName}) {



    return(

      <View>
         
          <View style={styles.searchResult}>
            <Image
              style={{width: 90, height: 90, borderRadius: 400/ 2}} 
              source={imgSource}
            />
            <View style={styles.searchInfo}>
              <Text style={styles.text}> {fullName} </Text>
              <Text style={styles.text}> Wealth + currency </Text>
            </View>
            <TouchableOpacity style={styles.Btn}  onPress={()=>{navigation.navigate('profile')}}>
                <Text style={styles.btnText}>check profile </Text>
            </TouchableOpacity>
         
          </View>
      </View>
      
    );
}
const styles = StyleSheet.create({

    searchResult: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent:'space-between',

    },

    searchInfo:{
      flexDirection: "column",
      display: "flex",
      marginTop: 10,

    },

    text: {
      justifyContent: "center",
      padding: 10
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


