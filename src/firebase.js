// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6bgmpYCjxJ7-GJnLJLW50RXxhQESYWCE",
  authDomain: "twitter-clone-f247f.firebaseapp.com",
  projectId: "twitter-clone-f247f",
  storageBucket: "twitter-clone-f247f.appspot.com",
  messagingSenderId: "755932647007",
  appId: "1:755932647007:web:36546647d5aa239f0515ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
