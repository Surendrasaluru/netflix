// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjyGpY3-r-JyQQSrHl838w94q4ouwlUqA",
  authDomain: "netflix-clone-16838.firebaseapp.com",
  projectId: "netflix-clone-16838",
  storageBucket: "netflix-clone-16838.appspot.com",
  messagingSenderId: "785602225040",
  appId: "1:785602225040:web:b24109671c22a448358915",
  measurementId: "G-W8VBQBGDN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
