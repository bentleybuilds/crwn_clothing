import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSCHXdq3wzNzNgsTkIImAmblDtbyOzrYQ",
    authDomain: "crwn-db-e29d4.firebaseapp.com",
    databaseURL: "https://crwn-db-e29d4.firebaseio.com",
    projectId: "crwn-db-e29d4",
    storageBucket: "crwn-db-e29d4.appspot.com",
    messagingSenderId: "495151655362",
    appId: "1:495151655362:web:032b194c31e6a5953cce5b"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  }

  const app = initializeApp(config);

  export const auth = getAuth();
  export const firestore = getFirestore(app);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => signInWithPopup(provider);
  export const signInWithEmail = (email,password) => {
   return( signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error)=>{
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode,errorMessage)
    }))
  }

  export default app;