// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Add other Firebase services you want to use here

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLynBf7NG78MFZ6dWcv_ZTnqwUczUpY0Q",
    authDomain: "wordstore-cbd01.firebaseapp.com",
    projectId: "wordstore-cbd01",
    storageBucket: "wordstore-cbd01.appspot.com",
    messagingSenderId: "382923224593",
    appId: "1:382923224593:web:978a5502872c8fbc97a3b0",
    measurementId: "G-9TGWT6YEZB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
