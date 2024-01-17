// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8jkaGs-dFl1qabgpnhai3zxPAqiJ_8bk",
    authDomain: "amezon-example.firebaseapp.com",
    projectId: "amezon-example",
    storageBucket: "amezon-example.appspot.com",
    messagingSenderId: "770152337350",
    appId: "1:770152337350:web:82f4694fb11fa8dd4f2cc7",
    measurementId: "G-6LH0M9T2C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);