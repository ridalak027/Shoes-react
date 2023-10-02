// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3e9mHmLrGGIGSKzKYzCDP47gF2mAvLn4",
    authDomain: "greats-bf255.firebaseapp.com",
    projectId: "greats-bf255",
    storageBucket: "greats-bf255.appspot.com",
    messagingSenderId: "597213968502",
    appId: "1:597213968502:web:bbfeeb47905cb13c3d8757",
    measurementId: "G-KBSLD87V12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider();



