import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0eehunsjto6F8taESWNbPJ-7S8eqqtdY",
  authDomain: "pro-denti.firebaseapp.com",
  projectId: "pro-denti",
  storageBucket: "pro-denti.appspot.com",
  messagingSenderId: "309284201413",
  appId: "1:309284201413:web:78beb03919a8ba68f161ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;