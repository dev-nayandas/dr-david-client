// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUxVuJoX79-2LL9wO1T-jgvbbEXg5quMU",
  authDomain: "dr-david-233a0.firebaseapp.com",
  projectId: "dr-david-233a0",
  storageBucket: "dr-david-233a0.appspot.com",
  messagingSenderId: "194871177100",
  appId: "1:194871177100:web:086bc63d5f14f6851ab0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;