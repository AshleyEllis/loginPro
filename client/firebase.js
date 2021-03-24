import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBMxgfcoNvEKgru2ngb_JNtOX2LMpWDKWg",
    authDomain: "login-756f3.firebaseapp.com",
    projectId: "login-756f3",
    storageBucket: "login-756f3.appspot.com",
    messagingSenderId: "420987727740",
    appId: "1:420987727740:web:640222cc676a0e7f2c7ef9"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 

  export default firebase;