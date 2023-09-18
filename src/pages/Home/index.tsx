import React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services/firebaseConfig";


export default function Home() {

    function logOut(){
    
    navigation.navigate("Login");
    }

    const navigation = useNavigation();

    return (
    <View style ={styles.container}>
      
      <View style={styles.form}>
        <Text style={styles.mainText}>
          Hello
        </Text>

        <Text style={styles.messageText}>
        There's not much to see here yet
        </Text>

        <TouchableOpacity 
        style={styles.logOutButton}
        onPress={logOut}
        >
          <Text style={styles.logOutButtonText}>
            Log Out
          </Text>
        </TouchableOpacity>

      </View>


    </View>
    );
  }
