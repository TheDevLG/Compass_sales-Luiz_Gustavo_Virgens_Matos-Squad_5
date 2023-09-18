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
      setEmail("");
      setPassword("");
      setName("");
      navigation.navigate("Login");
    
  })
  .catch((error) => {
    const errorCode = error.code;

    if (errorCode === "auth/invalid-email") {
      alert("Invalid email address");
    } else if (errorCode === "auth/invalid-password") {
      alert("Weak password, minimum of 6 characters");
    } else if (errorCode === "auth/email-already-in-use") {
      alert("An account already exists with the email address provided");
    }

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
            secureTextEntry
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
