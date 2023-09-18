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
    containerInput:{
       borderRadius: 4,
       backgroundColor: "#FFF",
       marginLeft: 16,
       marginRight: 16,
       marginBottom: 8,
       marginTop: 8,
       paddingVertical: 20,
       
        
    },
    TextInput: {
        paddingLeft: 15
    },
    loginButton:{
        backgroundColor: '#DB3022',
        borderRadius: 25,
        paddingVertical: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButtonText:{
        color: "#FFF",
        fontWeight: "bold"
    },
    forgotPasswordButton:{
        marginTop: 16,
        marginRight: 44
    },
    forgotPasswordButtonText:{
        fontWeight: "bold",
        textAlign: "right"
    }

})

export default styles;