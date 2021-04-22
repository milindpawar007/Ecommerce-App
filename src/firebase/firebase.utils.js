import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVjSTHiSVs93Af6S1gqowwyXhQkE7j1HM",
    authDomain: "ecomerce-shop-db.firebaseapp.com",
    projectId: "ecomerce-shop-db",
    storageBucket: "ecomerce-shop-db.appspot.com",
    messagingSenderId: "360461045105",
    appId: "1:360461045105:web:f39690010d9a88ed227ad0",
    measurementId: "G-W33DSG5GW2"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export  const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
