import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBcEcukNAjdNPuqzYi2uZogVUp2d2iJhjI",
    authDomain: "barter-system-90acf.firebaseapp.com",
    projectId: "barter-system-90acf",
    storageBucket: "barter-system-90acf.appspot.com",
    messagingSenderId: "680958205413",
    appId: "1:680958205413:web:bb6852343b41b2af47630c"
  };

if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
} 

export default firebase.firestore()