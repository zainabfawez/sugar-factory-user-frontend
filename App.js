import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Navigator from './routes/loginStack';


 
export default function App() {
 
  return (
    <Navigator />
  );
}

