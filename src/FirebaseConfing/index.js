import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA5sbLTRRYfDsy5XiA_3Ea80_I59Bxlw8U",
    authDomain: "my-calendarapp.firebaseapp.com",
    databaseURL: "https://my-calendarapp.firebaseio.com",
    projectId: "my-calendarapp",
    storageBucket: "my-calendarapp.appspot.com",
    messagingSenderId: "373151518967",
    appId: "1:373151518967:web:02e08352bef69fe9f103f2"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
    db,
    googleAuthProvider,
    firebase
  }