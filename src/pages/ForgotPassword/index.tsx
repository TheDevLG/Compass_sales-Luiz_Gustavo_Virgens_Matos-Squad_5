import React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Login from "../Login";

export default function SignUp() {

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
            style={styles.TextInput}/>
        </View>

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>
            SEND
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
