// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnCNApXx1ZBShvhbieAF44kstjtp25MY",
  authDomain: "mentalbusters.firebaseapp.com",
  projectId: "mentalbusters",
  storageBucket: "mentalbusters.appspot.com",
  messagingSenderId: "619134336367",
  appId: "1:619134336367:web:ba70aefb79b74cd8393c9a",
  measurementId: "G-S5VGTE5P6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  app,
  analytics,
};
