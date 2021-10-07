import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard } from "react-native";
import sf from '../../assets/sf.png'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
import BASE_API_URL from '../services/api/BaseUrl';


export default function home({ navigation }) {
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [image, setImage] = useState(null);

  

  const getData = async () => {
    try {
      setName( await AsyncStorage.getItem('@Name'));
      setBio( await AsyncStorage.getItem('@bio'));
      setImage( await AsyncStorage.getItem('@image'));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect( () => {
    getData();
    }, [navigation]);


    return (
        <TouchableWithoutFeedback onPress={()=> {
          Keyboard.dismiss();
        }}>
        <View>
          <StatusBar style="auto" />
                <View style={styles.top}
                    onPress = {()=>getData()}
                    >
                  {image && <Image
                    style={{width: 135, height: 135, borderRadius: 400/ 2}} 
                    source={{uri : `${BASE_API_URL}${image}`}}
                  />}
                {name && <Text style={styles.coverName}> {name} </Text>}
              </View >
            <Text style={styles.hr}></Text>
            
            {bio && <Text style={styles.bio}>{bio}</Text>}
            <Image
                    style={styles.logoimage} 
                    source={{uri : `${BASE_API_URL}/image/sf.png`}}
                  />
                   <TouchableOpacity style={styles.up} onPress = {getData} >
          <Text style={styles.up} >Upload Image</Text>
        </TouchableOpacity>
            <View style={styles.hr} /></View>

           

      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({

    top: {
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      flexDirection: "row"
      
    },
    coverName: {
      color: '#f48fb1',
      fontSize: 28,
      fontWeight: 'bold',
      paddingBottom: 2,
      marginLeft: 15,
      fontStyle: 'italic',
    },
    bio:{
      color: 'black',
      textAlign:"center",
      color: "#FFC0CB",
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 2,
      marginLeft: 15,
      fontStyle: 'italic',
    },
    hr:{
      borderBottomColor: '#c48b9f',
      borderBottomWidth: 1,
      marginTop:10,
      marginLeft: 50,
      marginRight: 50,
    },
    logoimage:{
      marginTop:50,
      marginBottom:50,
      marginLeft:70,
      alignContent:"center",
      alignItems: "center",

      width: 250, 
      height: 250, 
      borderRadius: 200/ 2,
    },
    up:{
      color: "#fff",
    }

   

  });
  
  
