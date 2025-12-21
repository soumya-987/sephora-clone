// firebase.jsx
// Notice we use "https://..." instead of just "firebase/app"
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD23aVDKMZB9va6VPyG-b9L8li7Z68L-c4",
  authDomain: "login-sephora-234.firebaseapp.com",
  projectId: "login-sephora-234",
  storageBucket: "login-sephora-234.firebasestorage.app",
  messagingSenderId: "130944139026",
  appId: "1:130944139026:web:c46ddf7a94e7f171bafdcb",
  measurementId: "G-5ETQCG8M5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth and Provider so you can use them in your Login page
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();