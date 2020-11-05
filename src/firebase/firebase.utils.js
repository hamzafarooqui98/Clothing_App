import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgd6gG84uanPuDduIfD9ANu6RCaaxD-UA",
    authDomain: "clothing-app-db-58bc7.firebaseapp.com",
    databaseURL: "https://clothing-app-db-58bc7.firebaseio.com",
    projectId: "clothing-app-db-58bc7",
    storageBucket: "clothing-app-db-58bc7.appspot.com",
    messagingSenderId: "786225269602",
    appId: "1:786225269602:web:7ab1a561015ad57b95fa3b",
    measurementId: "G-P4EE9YP9ER"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();  //this provides us GoogleAuth from Auth library
  provider.setCustomParameters({ prompt : 'select_account' });  //It will trigger google pop-up for authentication and Sign-in

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);  //This would make sure that the pop-up appears of google rather than any of other e.g microsoft etc

  export default firebase;  // Incase we want the whole library