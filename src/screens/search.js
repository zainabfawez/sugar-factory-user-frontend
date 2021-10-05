import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilePic from '../../assets/profilePic.png'; 

export default function search() {

    return(

      <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="search..."
              placeholderTextColor="grey"
              secureTextEntry={true}
              //onChangeText={(search) => setPassword(search)}
            />
          </View>

          <View style={styles.searchResult}>
            <Image
              style={{width: 135, height: 135, borderRadius: 400/ 2}} 
              source={profilePic}
            />
            <Text  > Full Name </Text>
            <Text  > Wealth + currency </Text>
            <TouchableOpacity style={styles.loginBtn} >
              <Text style={styles.loginText}>check</Text>
            </TouchableOpacity>
          </View>
      </View>
    
   
      

      
    );
}
const styles = StyleSheet.create({
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
        width: "50%",
        height: 45,
        marginBottom: 20,
        marginTop: 20,
      
      },

      searchResult: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row"
      },

        
    loginBtn: {
      width: "15%",
      borderRadius: 500/2,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "red",
    },
});


