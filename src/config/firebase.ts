import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARY4AiDSX248BygFFS-mMkHlk3HlZDe04",
  authDomain: "jobbox-68180.firebaseapp.com",
  projectId: "jobbox-68180",
  storageBucket: "jobbox-68180.firebasestorage.app",
  messagingSenderId: "23402354000",
  appId: "1:23402354000:web:e6bfa10ab8dc62484b4855",
  measurementId: "G-CKJNC55007"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
