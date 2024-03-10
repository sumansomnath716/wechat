// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdewM455uPAprwMEQ0dK8mldyq8Tr7Buc",
  authDomain: "wechat-33651.firebaseapp.com",
  projectId: "wechat-33651",
  storageBucket: "wechat-33651.appspot.com",
  messagingSenderId: "653222137135",
  appId: "1:653222137135:web:5a480f1999803ca35ca5da",
  measurementId: "G-ELJRN46MGP"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;