// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyD0WqknCrcgb3n7voBFwayVDaUWXZuFQ-8",
    authDomain: "lms-linkoping.firebaseapp.com",
    projectId: "lms-linkoping",
    storageBucket: "lms-linkoping.appspot.com",
    messagingSenderId: "596589885969",
    appId: "1:596589885969:web:6f42736d5da78c8a638fb0",
    measurementId: "G-Z0XPFNB1YP"
  };


const firebaseApp = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
export const authentification = getAuth(firebaseApp);