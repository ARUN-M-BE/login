import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv7NsFeXN1bowBUCe_DchBqoJIAK9iMOg",
  authDomain: "react-login-b19d9.firebaseapp.com",
  projectId: "react-login-b19d9",
  storageBucket: "react-login-b19d9.firebasestorage.app",
  messagingSenderId: "883957391629",
  appId: "1:883957391629:web:22376c934277fd09361044"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
