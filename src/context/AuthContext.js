import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "../firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// ✅ Firestore imports
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Make sure this path is correct

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Firebase user object
  const [role, setRole] = useState(null); // 🔹 Store user role

  // Watch auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      // ✅ If logged in, fetch user role from Firestore
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setRole(userData.role || null); // Default to null if no role found
          } else {
            setRole(null); // No document found
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          setRole(null);
        }
      } else {
        setRole(null); // Logged out, clear role
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Auth functions
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const logout = () => {
    return signOut(auth);
  };

  // ✅ Provide role in context
  return (
    <AuthContext.Provider value={{ user, role, login, signup, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);

