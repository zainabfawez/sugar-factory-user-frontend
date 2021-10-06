import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import main from '../../assets/main.png';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Image, 
  Button,
  Platform,
  ScrollView } from "react-native";


export default function signup() {

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedInterest, setSelectedInterest] = useState("Male");
  const [selectedGender, setSelectedGender] = useState("Female");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };




  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
    }}>
      <ScrollView>
        
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
            style = {{width: 300, height: 300}}
            source={main}
          />

          <View style={styles.row}>
            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="grey"             
              />
            </View>

            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                placeholderTextColor="grey"           
              />
            </View>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="grey"      
            />
          </View>
    
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}            
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
            />
          </View>

          <View>
            <View>
            </View>
            {/* {show && (
              <DateTimePicker style={styles.data}
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display="date"
                onChange={onChange}
              />
            )} */}
          </View>
      
       
          <View style={styles.row}>
            <Text style={styles.textDrop}> Gender:        </Text>

            <View style={styles.inputViewHalfDropC}>
              <Picker style={styles.inputgen}
                  selectedValue={selectedGender}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                  }>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
              </Picker>
              </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.textDrop}> Interested in: </Text>

            <View style={styles.inputViewHalfDropC}>
              <Picker
                  selectedValue={selectedInterest}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedInterest(itemValue)
                  }>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
              </Picker>
              </View>
          </View>
        
        
    

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nationality"
              placeholderTextColor="grey"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="height"
                placeholderTextColor="grey"             
              />
            </View>

            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="weight"
                placeholderTextColor="grey"           
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputViewHalf}>
              <TextInput
                style={styles.TextInput}
                placeholder="wealth"
                placeholderTextColor="grey"             
              />
            </View>

            <View style={styles.inputViewHalfDropC}>
            <Picker
                selectedValue={selectedCurrency}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCurrency(itemValue)
                }>
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="LBP" value="LBP" />
            </Picker>
            </View>
          </View>

          
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
    padding: 5
    
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "86%",
    height: 45,
    marginBottom: 20,
  },

  inputViewHalf: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "43%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "92%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  },

  
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  loginText: {
    color: '#fff',
    fontSize: 20,
  },

  textDrop:{
      color: "grey",
      margin: 10,
      marginRight: 40,
      flex: 0.7,
     
  },

  
  inputViewHalfDropC: {
    paddingBottom: 180,

    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "43%",
    height: 45,
    marginBottom: 20,
  },
  inputgene: {
    paddingBottom: 100,
    paddingLeft: 100,
    alignItems: "center",

    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor : "#FFC0CB",
    borderWidth : 1,
    width: "43%",
    height: 45,
    marginBottom: 20,
  },
  data:{
    width: 100,
    height: 40,
  }

});