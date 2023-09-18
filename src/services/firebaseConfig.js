import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAW90HPPhRhhXXo4QR8W_LzyymNvFJnh_Q",
  authDomain: "compasssales-luizgustavo.firebaseapp.com",
  projectId: "compasssales-luizgustavo",
  storageBucket: "compasssales-luizgustavo.appspot.com",
  messagingSenderId: "1046216756855",
  appId: "1:1046216756855:web:64ee7cfccb6d398d4cc072"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);