import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home() {
  const [token, setToken] = useState('');

  const getData = async () => {
    try {
      setToken( await AsyncStorage.getItem('@storage_Key'));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect( () => {
    getData();
    }, []);


    return (
        <TouchableWithoutFeedback onPress={()=> {
          Keyboard.dismiss();
        }}>
        <View>
          <StatusBar style="auto" />
          <View>
              <Text> this is home { token }</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  
  
