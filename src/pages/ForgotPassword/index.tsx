import React from "react";
import { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";


export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const forgotPassword = () => {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("An email was sent to " +email)
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        
        if (errorCode === "auth/invalid-email") {
          alert("Invalid email address");
        }
          });
    }

    const navigation = useNavigation();

    return (
    <View style ={styles.container}>
      
      <View style={styles.form}>
        <Text style={styles.mainText}>
          Forgot Password
        </Text>

        <Text style={styles.forgotPasswordInstructionText}>
        Please, enter your email address. You will receive a link to create a new password via email.
        </Text>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Email"
            style={styles.TextInput}
            onChangeText={setEmail}
            />
        </View>

        <TouchableOpacity 
        style={styles.sendButton}
        onPress={forgotPassword}
        >
          <Text style={styles.sendButtonText}>
            SEND
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
