import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD44kyaqaV_6NMeH0iI-rLgTgMJdqC6-P8",
    authDomain: "assignment-11-14b15.firebaseapp.com",
    projectId: "assignment-11-14b15",
    storageBucket: "assignment-11-14b15.appspot.com",
    messagingSenderId: "500198417238",
    appId: "1:500198417238:web:f58cb6c9b41f9e579e2cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;