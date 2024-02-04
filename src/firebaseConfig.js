// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyC7stLMZSFxWZpkdfLirpSbuEK1LK9NRhk",
   authDomain: "pixelmedia-1bd0b.firebaseapp.com",
   projectId: "pixelmedia-1bd0b",
   storageBucket: "pixelmedia-1bd0b.appspot.com",
   messagingSenderId: "551887474864",
   appId: "1:551887474864:web:2455bcd7e6d29517cf6b75",
   measurementId: "G-LR5DKWZQR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};