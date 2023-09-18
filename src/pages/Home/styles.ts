import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        backgroundColor: '#F9F9F9',
        flex: 1
    },
    form:{
        flex:1
    },
    mainText:{
        fontWeight: "bold",
        marginLeft: 14,
        marginTop: 104,
        marginBottom:56,
        fontSize: 34
    },
    messageText: {
        marginLeft: 14,
        width: 343,
        fontSize: 20,
        fontWeight: "bold"
    },
    containerInput:{
       borderRadius: 4,
       backgroundColor: "#FFF",
       marginLeft: 16,
       marginRight: 16,
       marginBottom: 8,
       marginTop: 8,
       paddingVertical: 20,
    },
    logOutButton:{
        backgroundColor: '#DB3022',
        borderRadius: 25,
        paddingVertical: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    logOutButtonText:{
        color: "#FFF",
        fontWeight: "bold"
    },
  


})

export default styles;