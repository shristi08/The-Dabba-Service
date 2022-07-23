import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    window.location.href="about.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


import { getAuth, onAuthStateChanged } from "firebase/auth";

auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

import { getAuth, updatePassword } from "firebase/auth";

auth = getAuth();

const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  alert("wrong password")
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtkF6gZ8qi4N7Ope3Pcq0EC0umZCena9E",
  authDomain: "food-3ee5b.firebaseapp.com",
  projectId: "food-3ee5b",
  storageBucket: "food-3ee5b.appspot.com",
  messagingSenderId: "636663216222",
  appId: "1:636663216222:web:303eb5cef659e5a0fb1ccf",
  measurementId: "G-V6V1E3TB9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

