import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBWEAvCQg1Euxmzmy4q0ktLA6K0fo1AAiI",
  authDomain: "coder-projects.firebaseapp.com",
  projectId: "coder-projects",
  storageBucket: "coder-projects.appspot.com",
  messagingSenderId: "766654926972",
  appId: "1:766654926972:web:420405e01e4e489f7539f9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);