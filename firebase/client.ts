// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlDYoXx5cbL210f3aSCX8gKSORuQaYsZk",
  authDomain: "interviewprep-c9294.firebaseapp.com",
  projectId: "interviewprep-c9294",
  storageBucket: "interviewprep-c9294.firebasestorage.app",
  messagingSenderId: "804707257166",
  appId: "1:804707257166:web:827bea5269ced4a9a12c1f",
  measurementId: "G-BB0L7GFEB5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

/************************* IMAGE PRESENT FOR FIREBASE AUTHENTICATION*************************/