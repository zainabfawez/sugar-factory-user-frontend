import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
//import profilepic from '../../assets/profilepic.png'; 
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
          {/* <Image
            style = {{width: 300, height: 300}}
            source={main}
        /> */}

          <View>
              <Text> this is home { token }</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  
  
