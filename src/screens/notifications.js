import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_API_URL from '../services/api/BaseUrl';


export default function notifications() {

    return (
        <View>
            <Text> this is Notifications Screen </Text>
        </View>
    );
   

}