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
  };

   //Below function allows us to take the user auth object that we got from the auth library, to store inside our db
  export const createUserProfileDocument = async (userAuth, additionalData) => {  //async is used as it is an API request. userAuth is the object we get from the authentication. 2nd argument is other additional data that we might need in future(for Sign-up)
     
    if( !userAuth ) return;  // means if there is no user signed-in
     
     const  userRef = firestore.doc(`users/${userAuth.uid}`);  //It gives the path to which u r wanting to search from
     
     const snapShot = await userRef.get();  //It will get that object u r searching for in the specific reference . Remember that CRUD operations are always done on DocumentReference. The snapshot is only used to represent the data!
     
     if( !snapShot.exists ){
       const { displayName, email } = userAuth;  //user Auth always have this displayName, email from the authentication
       const createdAt = new Date();
       
       try{
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
       }
       catch (error){
         console.log('error catching user', error.message);
       }
      }
      
      return userRef;  //because we wanted to check that whether the database has been updated at that reference
    }

  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();  //this provides us GoogleAuth from Auth library
  provider.setCustomParameters({ prompt : 'select_account' });  //It will trigger google pop-up for authentication and Sign-in

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);  //This would make sure that the pop-up appears of google rather than any of other e.g microsoft etc

  export default firebase;  // Incase we want the whole library