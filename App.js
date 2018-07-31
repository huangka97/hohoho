import React from "react";
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 TouchableOpacity
} from "react-native";

import { Constants } from "expo"

class Login extends React.Component {
  constructor(){
    super();
    state:{
      username:"";
      password:""
    }
  }
 render() {
   return (
     <View style={styles.container}>

     <TextInput style={{height: 40}}
     placeholder = "Enter your username"
     onChangeText = {
       (text) => this.setState({
         username: text})
       }
       />

       <TextInput style={{height: 40}}
       placeholder = "Enter your password"
       onChangeText = {
         (text) => this.setState({
           password: text})
         }
         />

         <TouchableOpacity onPress={()=>this.register}>
         <Text>Login</Text>
         </TouchableOpacity>
         </View>
       );
     }
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       paddingTop: Constants.statusBarHeight,
       backgroundColor: "#ecf0f1",
     },
     paragraph: {
       margin: 24,
       fontSize: 18,
       fontWeight: "bold",
       textAlign: "center",
       color: "#34495e",
     },
   });



   export default Login
