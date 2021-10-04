import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function home() {
    return (
      <TouchableWithoutFeedback onPress={()=> {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <text> this is home</text>
        </View>
   
      </View>
    </TouchableWithoutFeedback>
    );
  }
  
  
  
