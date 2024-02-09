// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQn0hnOYkX8-VUpuNg1bKK-LtocfjtKY",
  authDomain: "dm-netflix-gpt.firebaseapp.com",
  projectId: "dm-netflix-gpt",
  storageBucket: "dm-netflix-gpt.appspot.com",
  messagingSenderId: "211636417741",
  appId: "1:211636417741:web:8097aa545dee39a0de6584",
  measurementId: "G-T357NNWX2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
