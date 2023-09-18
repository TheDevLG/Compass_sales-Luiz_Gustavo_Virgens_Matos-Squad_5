import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Login from "../Login";

import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpAuthentication = () => {
     createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     
      const user = userCredential.user;
      navigation.navigate("Login");
    
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
          Sign Up
        </Text>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Name"
            style={styles.TextInput}
            onChangeText={(text) => setName(text)}
            />
        </View>

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
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity 
        style={styles.haveAnAccountButton}
        onPress={ () => navigation.navigate("Login")}
        >
          <Text style={styles.haveAnAccountButtonText}>
            Already have an account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.signUpButton}
        onPress={signUpAuthentication}
        >
          <Text style={styles.signUpButtonText}>
            SIGN UP
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
