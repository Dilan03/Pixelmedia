import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyC7stLMZSFxWZpkdfLirpSbuEK1LK9NRhk",
   authDomain: "pixelmedia-1bd0b.firebaseapp.com",
   projectId: "pixelmedia-1bd0b",
   storageBucket: "pixelmedia-1bd0b.appspot.com",
   messagingSenderId: "551887474864",
   appId: "1:551887474864:web:2455bcd7e6d29517cf6b75",
   measurementId: "G-LR5DKWZQR3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };