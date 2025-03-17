import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf1EgqV9FCzJFK1eqQmjtN9lcia3I_Tkk",
  authDomain: "login-g-app.firebaseapp.com",
  projectId: "login-g-app",
  storageBucket: "login-g-app.firebasestorage.app",
  messagingSenderId: "434240938799",
  appId: "1:434240938799:web:593fb0d6b4df5eb534f7da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /music/{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
