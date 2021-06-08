import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1DUQ61C_SPJwidrhK2uL9HK6XQno_6vA",
    authDomain: "linkedin-clone-1eb48.firebaseapp.com",
    projectId: "linkedin-clone-1eb48",
    storageBucket: "linkedin-clone-1eb48.appspot.com",
    messagingSenderId: "1084592720898",
    appId: "1:1084592720898:web:aa82b35f70c9a7cad06b1b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
