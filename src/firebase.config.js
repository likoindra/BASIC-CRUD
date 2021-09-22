import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAFdlFOPzaaxW3EAVJ5P-WHbMuedtE3hyg",
    authDomain: "todoapp-b93de.firebaseapp.com",
    projectId: "todoapp-b93de",
    storageBucket: "todoapp-b93de.appspot.com",
    messagingSenderId: "276248003218",
    appId: "1:276248003218:web:42007d78af0fd63636dc4b"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};