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
  const [text, setText] = useState(null);
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);
  const [emptydata, setEmptyData] = useState(null);
  const [reply, setReply] = useState(null);
  useEffect( () => {
    displayMsg();
    },[]);

  const displayMsg = async () => {
      try {
        const res1 = await  axios.get(`${BASE_API_URL}/api/user/get-messages`,
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        if(res1.data.length==0){
          setEmptyData("1");
          setData(null);
        }else{
            setData(res1.data);
            setEmptyData(null);
        }
      } catch(err) {
        // console.log(err);
      }
    }

    const refresh = ()=>{
      displayMsg();
    }

    const ignorebtn = async(id) =>{
      try {
        const res = await  axios.post(`${BASE_API_URL}/api/user/set-message-as-read`,{
          "message_id" : id
        },
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        console.log(res.data);
      } catch(err) {
        console.log(err);
      }
      displayMsg();
    }

    const replybtn = (id) =>{
      setReply(id);
      console.log(reply);
    }

    const send = async () =>{
      if(text){
        try {
          const res = await  axios.post(`${BASE_API_URL}/api/user/send-message`,{
            "receiver_id" : reply,
            "body": text
          },
          {headers:{
            'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
          }}
          );
          console.log(res.data);
          setReply(null);
        ignorebtn(reply);

        } catch(err) {
          console.log(err);

        }
        console.log(text);
      }
    }

    return(
      <View style={ styles.container}>
          {!emptydata && <Text style={styles.Header}> Your Messages!</Text>}
        {emptydata && <TouchableOpacity style={styles.loginBtn} onPress={()=> refresh()}>
              <Text style={styles.loginText} >Refresh Page</Text>
            </TouchableOpacity>}
          {reply &&  <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter text"
                placeholderTextColor="grey"     
                onChangeText={(text) => setText(text)}        
              />
        <TouchableOpacity style={styles.loginBtn2} onPress={()=> send()}>
              <Text  >Send</Text>
            </TouchableOpacity>

            </View>}

          {emptydata && <Text style={styles.nothingText}> Nothing to show.. Refresh to check for new messages!</Text>}
         <ScrollView contentContainerStyle={styles.contentContainer}> 
          {data && <Message data={data} ignorebtn={ignorebtn}  replybtn={replybtn}/>}
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
    marginTop:50,
    marginBottom:-20,
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
Header:{
  fontWeight: 'bold',
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: 30,
  marginBottom:-10,
}
});