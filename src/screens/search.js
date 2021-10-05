import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function search() {

    return(
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="search..."
          placeholderTextColor="grey"
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
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
    });
