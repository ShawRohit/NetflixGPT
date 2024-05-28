// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCunetmMTJ4kNOLFHl1eYvjikmNZjgV6DE",
  authDomain: "netfilxgpt-8c944.firebaseapp.com",
  projectId: "netfilxgpt-8c944",
  storageBucket: "netfilxgpt-8c944.appspot.com",
  messagingSenderId: "331413879307",
  appId: "1:331413879307:web:7b3557dcdef8c3097b650e",
  measurementId: "G-QDLFJPWT1K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
