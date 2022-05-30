// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_uoceErFB-hmQJVQMoXnKJGxAj6EAvhM",
  authDomain: "sortabl.firebaseapp.com",
  projectId: "sortabl",
  storageBucket: "sortabl.appspot.com",
  messagingSenderId: "323833030175",
  appId: "1:323833030175:web:d176971e0a8905ec1ed72a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
