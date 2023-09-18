import React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity} from "react-native";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation();

    return (
    <View style ={styles.container}>
      
      <View style={styles.form}>
        <Text style={styles.mainText}>
          Login
        </Text>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Email"
            style={styles.TextInput}/>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Password"
            style={styles.TextInput}/>
        </View>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text 
          style={styles.forgotPasswordButtonText}
          onPress={ () => navigation.navigate("ForgotPassword")}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            LOGIN
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
