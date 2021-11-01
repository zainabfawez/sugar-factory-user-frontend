import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text,Keyboard , TouchableWithoutFeedback, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchResults from "../components/searchResults";
import axios from 'axios';
import BASE_API_URL from '../services/api/BaseUrl';





export default function search( { navigation}) {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);
  const [emptydata, setEmptyData] = useState(null);
  const [fav, setFav] = useState(null);
 
   
  const goToUser = (id) => {
      {navigation.navigate('Profile', { userId: id })}
  }

  const pressSearch = async () => {
    if(name){
      setFav(null);
      try {
        const res = await  axios.post(`${BASE_API_URL}/api/user/search`, 
        {
          "name" : name
        },
        {headers:{
          'Authorization' : `Bearer ${ await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        if(res.data.hasOwnProperty('status')){
          setEmptyData("No results found");
          setData(null);
        }else{
            setData(res.data);
          setEmptyData(null);
        }
      } catch(err) {
        console.log(err);
      }
      
    }
      
    }

    return(
     

      <View style={ styles.container}>
         
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="search..."
              placeholderTextColor="grey"
              onChangeText={(name) => setName(name)}
            />
            
          </View>
          <TouchableWithoutFeedback onPress={()=> {
        Keyboard.dismiss();
      }}>
          <TouchableOpacity style={styles.loginBtn} onPress = {pressSearch} >
            <Text style={styles.loginText}>Search</Text>
            </TouchableOpacity>
            </TouchableWithoutFeedback>
          {emptydata && <Text style={styles.nothingText}> Nothing to show </Text>}
         <ScrollView contentContainerStyle={styles.contentContainer}> 
          {data && <SearchResults data={data} goToUser={goToUser}/>}
          </ScrollView >
        
      </View>
    
   
      
      
    );
}
const styles = StyleSheet.create({

  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
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
      width: "100%",
      height: 45,
      marginBottom: 0,
      marginTop: 20,
    },
    Btn: {
      width: "33%",
      borderRadius: 500/2,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFC0CB",
    },
    btnText: {
        color: "#fff"
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginLeft:35,
      backgroundColor: "#FFC0CB",
      marginBottom:15,
  },
  loginText:{
    color: "#fff",

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
  },
  nothingText:{
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contentContainer: {
    paddingVertical: 20
  },
    

  

   
});


