import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import profilePic from '../../assets/profilePic.png'; 
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
          <View style={styles.top}>
            <Image
              style={{width: 135, height: 135, borderRadius: 400/ 2}} 
              source={profilePic}
            />
            <Text  > Full Name </Text>
          </View>
          <View>
              <Text> this is home { token }</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({

    top: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row"
    },

   

  });
  
  
