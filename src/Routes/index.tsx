import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";

const stack = createNativeStackNavigator();

export default function Routes(){
    
    return(

        <stack.Navigator>
            <stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
            />

            <stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />

            <stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
            />
            <stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />

            
        </stack.Navigator>




    )
}