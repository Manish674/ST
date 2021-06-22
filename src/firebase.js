import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4OTYzIfUqZJpWgfHieFydGmjQZOlpK_g",
  authDomain: "chat-ef04f.firebaseapp.com",
  projectId: "chat-ef04f",
  storageBucket: "chat-ef04f.appspot.com",
  messagingSenderId: "147734511824",
  appId: "1:147734511824:web:693b450dd021de67925ed5",
  measurementId: "G-CP7S1J15C1",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
