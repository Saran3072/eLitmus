import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdB-SjtFWozJGoRzRRD5INp65Rhqe4v5M",
  authDomain: "mystery-quest-4a78c.firebaseapp.com",
  projectId: "mystery-quest-4a78c",
  storageBucket: "mystery-quest-4a78c.appspot.com",
  messagingSenderId: "395537806976",
  appId: "1:395537806976:web:d2dfff9afb29b36cfbd865"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { db, app, auth };