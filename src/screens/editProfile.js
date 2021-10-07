import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Button, Image, Platform } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import BASE_API_URL from '../services/api/BaseUrl';


export default function editProfile({ navigation }) {
  const [image, setImage] = useState(null);
  const [str, setStr] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      base64: true
    });
    if (!result.cancelled) {
      setStr(result.base64);
      setImage(result.uri); 
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  const pressLogin = async () => {
    try {
      const res = await  axios.post(`${BASE_API_URL}/api/user/add-picture`, {
          "image" :str
        },
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
          }}
      );
      await AsyncStorage.setItem('@image', res.data['p_path']);
      navigation.navigate('Home');
    } catch(err) {
      console.log(err); 
    }
  }
    return (
      <View>
        <StatusBar style="auto" />
        <View style={styles.text}>
            <Text>Edit Profile Pic</Text>
        </View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image}/>}
        <TouchableOpacity style={styles.loginBtn} onPress = {pressLogin} >
          <Text style={styles.loginText}>Upload Image</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      marginLeft: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFC0CB",
    },
    register: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row"
    },
    registerLink: {
      color: "blue",
      fontStyle: 'italic',
    },
    text:{
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    image:{
      width: 200, 
      height: 200,
      marginTop: 30,
      marginLeft:"25%",
      alignItems: "center",

    }
  });