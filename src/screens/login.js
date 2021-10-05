import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, Alert } from "react-native";
import main from '../../assets/main.png'; 
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login( { navigation } ) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [bad_credentials, setidBadCredentials] = useState(null);

  const pressLogin = async () => {
    try {
      const res = await  axios.post('http://192.168.1.106:8000/api/login', {
        "email" : email,
        "password":password
      });
      await AsyncStorage.setItem('@storage_Key', res.data['access_token']);
      setidBadCredentials(null);
      navigation.navigate('BottomTab');
    } catch(err) {
      setidBadCredentials(1);
      console.log(err);
  }
  };

  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      
 
      <StatusBar style="auto" />
      <Image
        style = {{width: 300, height: 300}}
        source={main}
      />
        <Text>{bad_credentials && "Bad Credentials"}</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress = {pressLogin} >
        <Text style={styles.loginText}>login</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text>New to sugar factory?</Text>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Signup')}}>
          <Text style={styles.registerLink}> Register now!</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
    </TouchableWithoutFeedback>
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  register: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row"
  },
  registerLink: {
    color: "blue",
    fontStyle: 'italic',
  }
});