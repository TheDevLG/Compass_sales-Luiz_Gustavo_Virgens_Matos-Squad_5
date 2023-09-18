import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity} from "react-native";

import styles from "./styles";

import { auth } from "../../services/firebaseConfig";

import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuthentication = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate("Home");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      });
    }
  
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
            style={styles.TextInput}
            onChangeText={(text) => setEmail(text)}
            />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Password"
            style={styles.TextInput}
            secureTextEntry        
            onChangeText={(text) => setPassword(text)}
            />
        </View>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text 
          style={styles.forgotPasswordButtonText}
          onPress={ () => navigation.navigate("ForgotPassword")}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.loginButton}
        onPress={loginAuthentication}
        >
          <Text style={styles.loginButtonText}>
            LOGIN
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
