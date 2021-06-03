// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGwYBPF5NzlQnG0JGEo9vrXQ1tJTQN3yE",
  authDomain: "safanasirli-469dc.firebaseapp.com",
  projectId: "safanasirli-469dc",
  storageBucket: "safanasirli-469dc.appspot.com",
  messagingSenderId: "818943577507",
  appId: "1:818943577507:web:3bbf700ea8d780f511de16",
  measurementId: "G-X4ZEE9EPPC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore();
const Auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, Auth,provider};