// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR85Z-xu35cVeZuRYT2t3iRTKrcjrjekA",
  authDomain: "ai-travel-planner-app-9358b.firebaseapp.com",
  projectId: "ai-travel-planner-app-9358b",
  storageBucket: "ai-travel-planner-app-9358b.appspot.com",
  messagingSenderId: "376937739492",
  appId: "1:376937739492:web:7a25ead5b74b846a4f68f1",
  measurementId: "G-PCGHG2D3CK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);