import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { RadioButton } from 'react-native-paper';
import BASE_API_URL from '../services/api/BaseUrl';



export default function profile({route, navigation }) {

    const { userId } = route.params;
    const [userData, setUserData] = useState(null);
    

    const getData = async () => {
      try {
        const res = await  axios.post(`${BASE_API_URL}/api/user/get-user`, 
        {
          "id" : userId
        },
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        setUserData(res.data);
      } catch(e) {
        console.log(e);
      }

    }

    const onFav = async (id) =>{
      // navigation.navigate('Home');
      try {
        const rest = await  axios.post(`${BASE_API_URL}/api/user/add-favorite`, 
        {
          "user_id" : id
        },
        {headers:{
          'Authorization' : `Bearer ${await AsyncStorage.getItem('@storage_Key')}`
        }}
        );
        if(rest.data.hasOwnProperty('status')){
          navigation.navigate('Home');
        }
      } catch(e) {
        console.log(e);
        console.log("e");

      }


    }

    useEffect(() => {
        getData();
        }, [])
    
    return(
             <View style={styles.searchResult}  >
            {userData &&<Image
              style={{width: 90, height: 90, borderRadius: 400/ 2}} 
              source={{uri : `http://192.168.1.108:8000${userData.p_path}`}}
            />}
            <View style={styles.searchInfo}>
              {userData && <Text style={styles.coverName}>{userData.first_name} {userData.last_name}</Text>}
              {userData &&<Text style={styles.text}>Has: {userData.net_worth}  {userData.currency} </Text>}
            </View>
            <TouchableOpacity style={styles.Btn}  >
                <Text style={styles.btnText} onPress={()=> onFav(userData.id)}>Favorite </Text>
            </TouchableOpacity>

         
          </View>

    );
 
}

const styles = StyleSheet.create({

    searchResult: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent:'space-between',
      marginBottom: 15,

    },

    searchInfo:{
      flexDirection: "column",
      display: "flex",
      marginTop: 10,

    },

    text: {
      justifyContent: "center",
      padding: 10
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
  coverName: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  
});

