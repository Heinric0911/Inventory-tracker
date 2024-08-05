// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhqJbFiLkIpju7RWlNCg5ABz35EWYwyno",
  authDomain: "inventory-tracker-26349.firebaseapp.com",
  projectId: "inventory-tracker-26349",
  storageBucket: "inventory-tracker-26349.appspot.com",
  messagingSenderId: "201064973686",
  appId: "1:201064973686:web:4d78b8fff5de761d93e657",
  measurementId: "G-9227XT6JT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); 

export {firestore}