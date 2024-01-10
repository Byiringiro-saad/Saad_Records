// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9oUHriw93-ISsle4fYoseWqpIbaOnNq0",
  authDomain: "umuganda-records.firebaseapp.com",
  projectId: "umuganda-records",
  storageBucket: "umuganda-records.appspot.com",
  messagingSenderId: "127790073686",
  appId: "1:127790073686:web:b9fe4aebc53cac8ee478f7",
  measurementId: "G-L1WKWZC1YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
