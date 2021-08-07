import firebase from "firebase/app";
import "firebase/database"; 

var firebaseConfig = add your firebase config by creating firebase account and then add app then copy the config given to this file

// Initialize Firebase
const firebasedb = firebase.initializeApp(firebaseConfig);

export const  chatRef = firebasedb.database().ref("/chat");

export default firebasedb;
