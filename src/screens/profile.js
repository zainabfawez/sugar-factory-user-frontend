import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BASE_API_URL from '../services/api/BaseUrl';
// import girl4 from '../../assets/girl4.png';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontDisplay } from "expo-font";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';



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
               <View style={styles.row}>

                 <View>
                  {/* <Image style= {styles.imgStyle} source={girl4} /> */}
                  
                  {userData &&<Image
                    style={{width: 90, height: 90, borderRadius: 400/ 2}} 
                    source={{uri : `http://192.168.1.108:8000${userData.p_path}`}}
                  />}
                  <TouchableOpacity style={styles.Btn}  >
                      <Text style={styles.btnText} onPress={()=> onFav(userData.id)}>Favorite </Text>
                    </TouchableOpacity>
                 </View>
              
                <View >

                  {userData && <Text style={styles.coverName}>{userData.first_name} {userData.last_name}</Text>}
                  <MaterialCommunityIcons name="bio" size={35} color="black" />
                  <View style={{flexGrow: 1, flexDirection: 'row'}}>
                    {userData && <Text style={styles.bio}>{userData.bio}</Text>}  
                  </View>
                    
                </View>
                
              </View>

              <View style={{marginStart: 15}}>

                <View style={styles.row} >
                  <Entypo name="email" size={30} color="black" />
                  <Text>   </Text>
                  {userData && <Text style= {styles.text}>{userData.email}</Text>}
                </View>
              
                <View style={styles.row} >
                  <MaterialIcons name="attach-money" size={30} color="black" />
                  <Text>   </Text>
                  {userData && <Text style= {styles.text}>{userData.net_worth} {userData.currency}</Text>}
                </View>

                <View style={styles.row} >
                  <FontAwesome name="flag" size={30} color="black" />
                  <Text>    </Text>
                  {userData && <Text style= {styles.text}>{userData.nationality}</Text>}
                </View>

                <View style={styles.row} >
                  <MaterialCommunityIcons name="human-male-height" size={30} color="black" />
                  <Text>  </Text>
                  {userData && <Text style= {styles.text}>{userData.height}</Text>}
                  <Text style= {styles.text}>  m. </Text>
                  <Text>         </Text>
                  <FontAwesome5 name="weight" size={24} color="black" />
                  <Text>  </Text>
                  {userData && <Text style= {styles.text}>{userData.weight}</Text>}
                  <Text style= {styles.text}>  Kg. </Text>
                </View>

              </View>
          </View>

    );
 
}

const styles = StyleSheet.create({

    searchResult: {
     
      flex : 1,
      flexDirection: "column",
      backgroundColor: "#fff",
      paddingRight: 15,
      display: "flex",
      //flexDirection: "row",
      //justifyContent:'space-between',
      marginBottom: 15,
      paddingRight: 40,

    },

  
    imgStyle:{
      height: 150,
      width: 150,
      borderRadius: 250,
      margin: "5%",
    },

  
    searchInfo:{
      flexDirection: "column",
      display: "flex",
      marginTop: 10,

    },

    text: {
      fontSize: 20,
      // fontFamily: 'sans-serif',
    
    },
      
  Btn: {
   
    width: "100%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#FFC0CB",
    marginStart: 15,
  },

  btnText: {
      color: "#fff",
      fontSize: 25,
  },
  coverName: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    // fontFamily: 'serif'
  },

  row: {
    flexDirection: "row",
    margin: 10,
  },

  bio: {
    flex: 1, 
    width: 1,
    fontSize: 15,
    fontStyle: 'italic',
    //margin: 15,

  }

  
});

