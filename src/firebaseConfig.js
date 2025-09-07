import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeJ2W7NwLv9mUr6eBMOutNZYEoxe_mX_M",
  authDomain: "utsavmitra-5d6ee.firebaseapp.com",
  projectId: "utsavmitra-5d6ee",
  storageBucket: "utsavmitra-5d6ee.appspot.com", // 🔧 corrected this line
  messagingSenderId: "238663593186",
  appId: "1:238663593186:web:05088c0c41ac6ece4542bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth, provider, and firestore instance
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

console.log("Firebase Auth loaded:", auth); // ✅ You will see this in browser console
