import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAfcKPJBor-SiEAQ3LmPKgxdbDxnxmL-lg",
  authDomain: "next-12783.firebaseapp.com",
  projectId: "next-12783",
  storageBucket: "next-12783.appspot.com",
  messagingSenderId: "979951276015",
  appId: "1:979951276015:web:43d81d3f93fc912229301a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
