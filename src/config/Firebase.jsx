// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY5Q0bgEj1hbP6nxz76_S1X2Uo9ShX9c0",
  authDomain: "myjira-46915.firebaseapp.com",
  projectId: "myjira-46915",
  storageBucket: "myjira-46915.appspot.com",
  messagingSenderId: "122768766712",
  appId: "1:122768766712:web:752956bfd3d460bb846d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth,firestore}