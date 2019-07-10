// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCjnuUGUN-i1m6WTtKn8VAaAP6JpsCQHn0",
    authDomain: "flock-51279.firebaseapp.com",
    databaseURL: "https://flock-51279.firebaseio.com",
    projectId: "flock-51279",
    storageBucket: "flock-51279.appspot.com",
    messagingSenderId: "995218167487",
    appId: "1:995218167487:web:41add102cf3fa0bf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export const db = firebase.firestore();

  export const storage = firebase.storage();

  export const fb = {
      auth: firebase.auth()
  }