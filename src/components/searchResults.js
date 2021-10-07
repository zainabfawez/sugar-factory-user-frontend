import React from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import BASE_API_URL from '../services/api/BaseUrl';


//import profile from "../screens/profile";


export default function SearchResults(props) {


  const goTo = (id)=>{
    {props.goToUser(id)};
  }

    return(

      <View>
         {props.data.map((item) => (
          <View style={styles.searchResult}  key={item.id}>
            <Image
              style={{width: 90, height: 90, borderRadius: 400/ 2}} 
              source={{uri : `${BASE_API_URL}${item.p_path}`}}
            />
            <View style={styles.searchInfo}>
              <Text style={styles.text}> {item.first_name} {item.last_name} </Text>
              <Text style={styles.text}>Has: {item.net_worth}  {item.currency} </Text>
            </View>
            <TouchableOpacity style={styles.Btn}  onPress={()=> goTo(item.id)}>
                <Text style={styles.btnText}>check profile </Text>
            </TouchableOpacity>
         
          </View>
         ))}
      </View>
      
    );
}
const styles = StyleSheet.create({

    searchResult: {
      alignItems: "center",
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
    alignItems: "center",
    borderRadius: 500/2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    
    marginBottom: 2,
    backgroundColor: "#FFC0CB",
  },

  btnText: {
      color: "#fff"
  },
  
});


