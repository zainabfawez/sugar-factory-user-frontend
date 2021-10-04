import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, Alert } from "react-native";
import main from '../../assets/main.png'; 
import axios from 'axios';

export default function login( { navigation } ) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // useEffect(() =>{
  //   console.log("component")
  //   return console.log("met")
  //  })
  
  const handleLoggin = async () => {
    await axios.post("api", {password : {password}, email :email})
      .then((response) =>  (console.log(response.data)
        //if radetle token -> navifate to bottomtab
        //else alert wrong credentials)) 
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
 
      <TouchableOpacity style={styles.loginBtn} onPress = {handleLoggin} >
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