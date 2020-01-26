import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSCHXdq3wzNzNgsTkIImAmblDtbyOzrYQ",
    authDomain: "crwn-db-e29d4.firebaseapp.com",
    databaseURL: "https://crwn-db-e29d4.firebaseio.com",
    projectId: "crwn-db-e29d4",
    storageBucket: "crwn-db-e29d4.appspot.com",
    messagingSenderId: "495151655362",
    appId: "1:495151655362:web:032b194c31e6a5953cce5b"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;