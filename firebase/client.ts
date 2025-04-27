import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnNgSvSlMMWd4IoIsut6JDzdxIu34OvaA",
  authDomain: "prepwise-fa790.firebaseapp.com",
  projectId: "prepwise-fa790",
  storageBucket: "prepwise-fa790.firebasestorage.app",
  messagingSenderId: "94313529144",
  appId: "1:94313529144:web:ff10bbbf6be8cf95a98bcd",
  measurementId: "G-ZXF3W03729"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)