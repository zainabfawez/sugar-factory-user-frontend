import React, { useState, useEffect } from "react";
import {StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text,Keyboard , TouchableWithoutFeedback, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from "../components/notification";
import axios from 'axios';
import BASE_API_URL from '../services/api/BaseUrl';
import * as Speech from 'expo-speech';

export default function notifications( {navigation}) {
    const [data, setData] = useState(null);
    const [emptydata, setEmptyData] = useState(null);

    useEffect( () => {
        displayNot();
    },[]);

    const displayNot = async () => {
        try {
        const res1 = await  axios.get(`${BASE_API_URL}/api/user/get-user-notifications`,
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
        }
    }

    const refresh = ()=>{
        displayNot();
    }
    const ignorebtn = async(id) =>{
        try {
        const res = await  axios.post(`${BASE_API_URL}/api/user/read-notification`,{
            "id" : id
        },
        {headers:{
            'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        console.log(res.data);
        } catch(err) {
        console.log(err);
        }
        displayNot();
    }

    const readNot = (body)=>{
        console.log(body);
        Speech.speak(body);
    }

    


    return(
        <View style={ styles.container}>
            {!emptydata && <Text style={styles.Header}> Your Notifications!</Text>}
        {emptydata && <TouchableOpacity style={styles.loginBtn} onPress={()=> refresh()}>
                <Text style={styles.loginText} >Refresh Page</Text>
            </TouchableOpacity>}
          

            {emptydata && <Text style={styles.nothingText}> Nothing to show.. Refresh to check for new notifications!</Text>}
            <ScrollView contentContainerStyle={styles.contentContainer}> 
            {data && <Notification data={data} ignorebtn={ignorebtn} readNot={readNot}  />}
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