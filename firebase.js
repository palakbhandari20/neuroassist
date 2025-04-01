// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD0QQp8di3BukGG7YciQ8Y-KN1DP6sStzQ",
    authDomain: "neuroassist-e93f2.firebaseapp.com",
    projectId: "neuroassist-e93f2",
    storageBucket: "neuroassist-e93f2.appspot.com",
    messagingSenderId: "725369998127",
    appId: "1:725369998127:web:0ba4e86c7bd61d4a716fda"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
