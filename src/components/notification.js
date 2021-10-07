import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";


export default function SearchResults(props) {

  const ignoreTo = (id)=>{
    {props.ignorebtn(id)};
  }
  const readNotification = (body)=>{
    {props.readNot(body)};
  }

    return(
      <View style={styles.container}>
         {props.data.map((item) => (
      <View  key={item.id}>
            <View  style={styles.row}>
              <Text style={styles.text}>     </Text>
            <View >
            <Text style={styles.text2}>{item.body}</Text>
            
                <TouchableOpacity style={styles.Btn2} onPress={()=> ignoreTo(item.id)}>
                      <Text style={styles.btnText}>Mark as read</Text>
                </TouchableOpacity>
            </View> 
            
            </View>
            <TouchableOpacity style={styles.Btn1} onPress={()=> readNotification(item.body)}>
                      <Text style={styles.btnText}>Read Notification</Text>
                </TouchableOpacity>
      </View >
         ))}
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
    searchResult: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent:'space-between',
      marginBottom: 15,
    },
    searchInfo:{
      flexDirection: "column",
      justifyContent:'space-between',
      display: "flex",
      marginTop: 10,
      marginBottom: 10,
    },
    text: {
      justifyContent: "space-between",
      padding: 10,
    },
    text2: {
      justifyContent: "space-between",
      padding: 10,
      width:200,
    },
  Btn1: {
    width: "35%",
    borderRadius: 200,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:175,
    marginRight:0,
    backgroundColor: "#FFC0CB",
    marginTop: 10,
  },
  Btn2: {
    width: "45%",
    borderRadius: 200,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginLeft: 120,
    marginRight:50,
    backgroundColor: "#FFC0CB",
  },
  btnText: {
      color: "#fff"
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "55%", 
    marginRight: 50,
    height: 45,
    marginBottom: 20,
    marginEnd:40,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
  },
});