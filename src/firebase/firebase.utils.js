import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA82LWRZlJZ44xDhFH-Z7iZWGIoYe8K6_Q',
  authDomain: 'crown-clothing-e7661.firebaseapp.com',
  projectId: 'crown-clothing-e7661',
  storageBucket: 'crown-clothing-e7661.appspot.com',
  messagingSenderId: '811105415470',
  appId: '1:811105415470:web:bd1248658a8563750e4abf',
  measurementId: 'G-WLM17ZK8DP',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log(snapShot);
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
