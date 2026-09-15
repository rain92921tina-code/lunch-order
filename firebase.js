// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "你的FirebaseAPIKey",
  authDomain: "rain929-95b12.firebaseapp.com",
  projectId: "rain929-95b12",
  storageBucket: "rain929-95b12.firebasestorage.app",
  messagingSenderId: "36960863166",
  appId: "1:36960863166:web:56f2a3fe465ddb5f6aafef",
  measurementId: "G-TP3TV0E5JP"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
