import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA4MNF5begqs5blJSiKuCJlqAQ6Ul6Lw9Y",
  authDomain: "ecommerce-coderhouse-8f6b1.firebaseapp.com",
  projectId: "ecommerce-coderhouse-8f6b1",
  storageBucket: "ecommerce-coderhouse-8f6b1.firebasestorage.app",
  messagingSenderId: "772177858577",
  appId: "1:772177858577:web:fc92c22b8f617c5bad21b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);