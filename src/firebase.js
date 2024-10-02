// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4QRb2YlDzJWJ7vlRDYNiKBraYP4giroU",
  authDomain: "agri-farm-map-monitoring-eva.firebaseapp.com",
  projectId: "agri-farm-map-monitoring-eva",
  storageBucket: "agri-farm-map-monitoring-eva.appspot.com",
  messagingSenderId: "939798671539",
  appId: "1:939798671539:web:455ee6058eb1a44d1dc0c6",
  measurementId: "G-1N90HV4QR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);