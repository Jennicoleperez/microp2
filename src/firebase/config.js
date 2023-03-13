
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAlkPl899ONK3l6L0ItZ73i3ljqtrKsfao",
  authDomain: "cartelera-caracas-5816f.firebaseapp.com",
  projectId: "cartelera-caracas-5816f",
  storageBucket: "cartelera-caracas-5816f.appspot.com",
  messagingSenderId: "30797167364",
  appId: "1:30797167364:web:656f373843da8fe97cee51",
  measurementId: "G-8JRHBHVQVF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const store = getStorage(app)

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:"select_account"});