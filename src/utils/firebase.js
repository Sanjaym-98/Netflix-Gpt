// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC43oxlbY25C2GjyHKBw5Qv4hzXjs07jwI",
  authDomain: "netflix-gpt-83b7d.firebaseapp.com",
  projectId: "netflix-gpt-83b7d",
  storageBucket: "netflix-gpt-83b7d.firebasestorage.app",
  messagingSenderId: "211627508798",
  appId: "1:211627508798:web:464be6c9b407618136bd6f",
  measurementId: "G-GSJN1PED4R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);

export default auth