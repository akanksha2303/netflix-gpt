// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJK7o17dyP6BqWEJBqThAZrUocARpjLEM",
  authDomain: "netflixgpt-bdd98.firebaseapp.com",
  projectId: "netflixgpt-bdd98",
  storageBucket: "netflixgpt-bdd98.appspot.com",
  messagingSenderId: "771287223524",
  appId: "1:771287223524:web:7e9bed026554c1721c70f1",
  measurementId: "G-E48XZ84CCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();