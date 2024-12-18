import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xW5yJcw3ZRVD0-bAI2Hxz-0mN0TgJLc",
  authDomain: "login-arun.firebaseapp.com",
  projectId: "login-arun",
  storageBucket: "login-arun.firebasestorage.app",
  messagingSenderId: "851950029612",
  appId: "1:851950029612:web:82670d67a1e28dc6d17a89"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;