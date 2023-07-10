import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA47lkV_Wyjah47zGnDIKnuLmYJ-mmOv_0",
  authDomain: "next-app-b627f.firebaseapp.com",
  projectId: "next-app-b627f",
  storageBucket: "next-app-b627f.appspot.com",
  messagingSenderId: "686257749859",
  appId: "1:686257749859:web:150459ff11b5241d999d56",
  measurementId: "G-MN6DS0KKWQ"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}