// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmPjBP-Wu4F0Bo5kL31OQFR7VVYLKf-eQ",
  authDomain: "netflix-gpt-2156c.firebaseapp.com",
  projectId: "netflix-gpt-2156c",
  storageBucket: "netflix-gpt-2156c.appspot.com",
  messagingSenderId: "95747856989",
  appId: "1:95747856989:web:5db620b56bbb7783778bb4",
  measurementId: "G-1VR9F5218R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
