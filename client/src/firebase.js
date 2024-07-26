// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-19f8c.firebaseapp.com",
  projectId: "blog-app-19f8c",
  storageBucket: "blog-app-19f8c.appspot.com",
  messagingSenderId: "204212033990",
  appId: "1:204212033990:web:52b6e4266156b73a78fac7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);