import firebase from "firebase/app";
import "firebase/database"; 

var firebaseConfig = {
  apiKey: "AIzaSyDgl6XkQ-jevm7hfEY-flGkxXLydvYW5t0",
  authDomain: "wattsapp-swap.firebaseapp.com",
  databaseURL: "https://wattsapp-swap-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wattsapp-swap",
  storageBucket: "wattsapp-swap.appspot.com",
  messagingSenderId: "281196754922",
  appId: "1:281196754922:web:86a457db25d35c090a2493"
};
// Initialize Firebase
const firebasedb = firebase.initializeApp(firebaseConfig);

export const  chatRef = firebasedb.database().ref("/chat");

export default firebasedb;