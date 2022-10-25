// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARGfeYcloYpyNPS2d8DfsDkypljBNLou0",
  authDomain: "diploma-enginnering.firebaseapp.com",
  projectId: "diploma-enginnering",
  storageBucket: "diploma-enginnering.appspot.com",
  messagingSenderId: "298856262283",
  appId: "1:298856262283:web:d16ed0d050d24dfed2028e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app