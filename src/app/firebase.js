// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOSmChyQpCnUYwBmabYoq2eEgbPqPsms",
  authDomain: "fir-app-auth-3cd42.firebaseapp.com",
  projectId: "fir-app-auth-3cd42",
  storageBucket: "fir-app-auth-3cd42.appspot.com",
  messagingSenderId: "130752319187",
  appId: "1:130752319187:web:89ae2aca91d93b0a2a8e26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
