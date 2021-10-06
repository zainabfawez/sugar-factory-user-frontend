import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text,Keyboard , TouchableWithoutFeedback, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Message from "../components/message";
import profilePic from '../../assets/profilePic.png'; 
import axios from 'axios';
import BASE_API_URL from '../services/api/BaseUrl';

const pic = profilePic;
export default function search( {navigation}) {
  const [name, setName] = useState(null);
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);
  const [emptydata, setEmptyData] = useState(null);
  const [reply, setReply] = useState(null);
  const getData = async () => {
    try {
    } catch(e) {
      console.log(e);
    }
  }
  useEffect( () => {
    getData();
    displayMsg();
    },[]);
  const displayMsg = async () => {
      // console.log(token);
      try {
        const res = await  axios.get(`${BASE_API_URL}/api/user/get-messages`,
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
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

    const refresh = ()=>{
      getData();
      displayMsg();
    }

    return(
      <View style={ styles.container}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> refresh()}>
              <Text style={styles.loginText} >Refresh Page</Text>
            </TouchableOpacity>
          {reply &&  <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter text"
                placeholderTextColor="grey"             
              />
        <TouchableOpacity style={styles.loginBtn2} onPress={()=> refresh()}>
              <Text  >Send</Text>
            </TouchableOpacity>

            </View>}

          {emptydata && <Text style={styles.nothingText}> Nothing to show </Text>}
         <ScrollView contentContainerStyle={styles.contentContainer}> 
          {data && <Message data={data} />}
          </ScrollView >
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
   //alignItems: "center",
  },
  TextInput: {
      height: 50,
      width: 100,
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
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "50%",
    height: 45,
    marginBottom: 20,
    marginLeft:35,
  },
  sebdBtn:{
    color: "#fff",
    borderRadius: 100,
      height: 45,
      width: "50%",
      backgroundColor: "#FFC0CB",
      marginLeft:150,
      color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  inputViewHalf: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "50%",
    height: 45,
    marginBottom: 20,
    flexDirection:"row",
    marginLeft:35,
  },
  loginBtn2: {
    width: "50%",
    borderRadius: 25,
    color: "#FFC0CB",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:75,
    backgroundColor: "#FFC0CB",
    marginBottom:15,
},
});