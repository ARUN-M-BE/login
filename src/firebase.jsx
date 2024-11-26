import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1xW5yJcw3ZRVD0-bAI2Hxz-0mN0TgJLc",
  authDomain: "login-arun.firebaseapp.com",
  projectId: "login-arun",
  storageBucket: "login-arun.firebasestorage.app",
  messagingSenderId: "851950029612",
  appId: "1:851950029612:web:82670d67a1e28dc6d17a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
