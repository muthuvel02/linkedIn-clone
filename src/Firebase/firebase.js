import  firebase from 'firebase/compat/app';
import'firebase/compat/firestore';
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBZ4h52EFrsKZXGuy_fTTZS4EKjrE5GsyA",
  authDomain: "linkedin-clone-d334c.firebaseapp.com",
  projectId: "linkedin-clone-d334c",
  storageBucket: "linkedin-clone-d334c.appspot.com",
  messagingSenderId: "643745716080",
  appId: "1:643745716080:web:534999b14fb52f0783e1b5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
