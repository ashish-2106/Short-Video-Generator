// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "video-generator-37e2e.firebaseapp.com",
    projectId: "video-generator-37e2e",
    storageBucket: "video-generator-37e2e.firebasestorage.app",
    messagingSenderId: "29558052754",
    appId: "1:29558052754:web:f34d1acb1bec9b2e82134b",
    measurementId: "G-GQ6PKVTJRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);