// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADZ5uACEUUbV3K5dDJus2u3h8DVOy_dg8",
  authDomain: "amrmaps-8aea0.firebaseapp.com",
  projectId: "amrmaps-8aea0",
  storageBucket: "amrmaps-8aea0.appspot.com",
  messagingSenderId: "887308748583",
  appId: "1:887308748583:web:e67f2a81463bb55e558b02",
  measurementId: "G-6MBD6BSM57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);