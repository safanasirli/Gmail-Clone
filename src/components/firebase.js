// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAiMh3e-sZLwbP8hlYQQaUkm8tGAITDojE",
  authDomain: "safanasirli-93c51.firebaseapp.com",
  projectId: "safanasirli-93c51",
  storageBucket: "safanasirli-93c51.appspot.com",
  messagingSenderId: "959874560394",
  appId: "1:959874560394:web:58ad340813c4e622515873",
  measurementId: "G-H1ETELYTB2"

};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore();
const Auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, Auth,provider};