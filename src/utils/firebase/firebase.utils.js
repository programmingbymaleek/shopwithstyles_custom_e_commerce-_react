import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6pkHohXXrTwiPoUMoIyF0mH5B6QVOhKM",
  authDomain: "wilmatechshoes.firebaseapp.com",
  projectId: "wilmatechshoes",
  storageBucket: "wilmatechshoes.appspot.com",
  messagingSenderId: "741177282546",
  appId: "1:741177282546:web:4c43bada0bd11dea31256b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initializing provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//getting access to the database from fire store.. or initalizing database
export const db = getFirestore();

//creating user document from google Authentication
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformantion = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const usersnapshot = await getDoc(userDocRef);
  console.log(usersnapshot.exists());
  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformantion,
      });
    } catch (error) {
      alert("There was a problem creating the user", error.message());
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  confirmPassword
) => {
  if (!email || !password || password !== confirmPassword) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signUserInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
//

//
