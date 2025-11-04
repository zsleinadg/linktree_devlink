
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR7_o3tFht24DZteCgn6c9Iu0ulX9IrWE",
  authDomain: "devlink-479e0.firebaseapp.com",
  projectId: "devlink-479e0",
  storageBucket: "devlink-479e0.firebasestorage.app",
  messagingSenderId: "900963430249",
  appId: "1:900963430249:web:6867d51dad4db3fb6417f8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}