import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzchGKHMB-bj975Kw0gsW-n97-ZTB6NQg",
  authDomain: "mygoals-cb0ab.firebaseapp.com",
  projectId: "mygoals-cb0ab",
  storageBucket: "mygoals-cb0ab.firebasestorage.app",
  messagingSenderId: "118347694579",
  appId: "1:118347694579:web:9314aa8367c9a9e7b09286"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)