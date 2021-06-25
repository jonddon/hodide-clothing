// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCl6LtWEIYdQ8X4BAP7PeUwdB-fpUw8_vs",
    authDomain: "hodide-clothing.firebaseapp.com",
    projectId: "hodide-clothing",
    storageBucket: "hodide-clothing.appspot.com",
    messagingSenderId: "377514940467",
    appId: "1:377514940467:web:bd836d76206dbc3ee36b46",
    measurementId: "G-CEXPBCYSZX"
}

// Initialize Firebase
firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;