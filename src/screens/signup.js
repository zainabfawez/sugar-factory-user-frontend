import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import main from '../../assets/main.png'; 
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from "react-native";
 
export default function signup() {

  const [first_name, setFirstName] = useState({ value: '' })
  const [last_name, setLastName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})
  const [confirmPassword, setConfirmPassword] = useState({ value: ''})
 
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
    }}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
            style = {{width: 300, height: 300}}
            source={main}
          />
          <View style={styles.row}>
            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="grey"
                onChangeText={(first_name) => setFirstName(first_name)}
              />
            </View>

            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                placeholderTextColor="grey"
                onChangeText={(last_name) => setLastName(last_name)}
              />
            </View>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="grey"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(ConfirmPassword) => setConfirmPassword(confirmPassword)}
            />
          </View>
          
    
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>sign up</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  inputViewHalf: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "35%",
    height: 45,
    marginBottom: 20,
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
    backgroundColor: "skyblue",
  },

  
  row: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row"
  },

});