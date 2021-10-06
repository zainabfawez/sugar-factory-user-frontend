import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilePic from '../../assets/profilePic.png'; 
//import profile from "../screens/profile";
export default function SearchResults(props) {
    return(
      <View>
         {props.data.map((item) => (
           <View style={styles.searchResult} key={item.id}>
           <Text style={styles.text}>{item.first_name} {item.last_name} </Text>
           <View style={styles.inputView}>
               <Text style={styles.text}>{item.body}</Text>
               <TouchableOpacity style={styles.Btn1} onPress={() => { navigation.navigate('profile'); } }>
                    <Text style={styles.btnText}>Reply </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Btn2} onPress={() => { navigation.navigate('profile'); } }>
                    <Text style={styles.btnText}>Ignore </Text>
               </TouchableOpacity>
           </View> 
          </View>
         ))}
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#fff",
       //alignItems: "center",
      },
    searchResult: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent:'space-between',
      marginBottom: 15,
    },
    searchInfo:{
      flexDirection: "column",
      justifyContent:'space-between',
      display: "flex",
      marginTop: 10,
      marginBottom: 10,
    },
    text: {
      justifyContent: "space-between",
      padding: 10
    },
  Btn1: {
    width: "30%",
    borderRadius: 200,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 10,
    marginRight:0,
    backgroundColor: "#FFC0CB",
  },
  Btn2: {
    width: "30%",
    borderRadius: 200,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 10,
    marginRight:0,
    backgroundColor: "skyblue",
  },
  btnText: {
      color: "#fff"
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "50%", 
    height: 45,
    marginBottom: 20,
    marginEnd:40,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});