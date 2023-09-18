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
          Sign Up
        </Text>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Name"
            style={styles.TextInput}/>
        </View>

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

        <TouchableOpacity 
        style={styles.haveAnAccountButton}
        onPress={ () => navigation.navigate("Login")}
        >
          <Text style={styles.haveAnAccountButtonText}>
            Already have an account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>
            SIGN UP
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
