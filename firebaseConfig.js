// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiQaqmqIsMYNMbfArOyH0rVrdsgxaoaPg",
  authDomain: "todo-f253b.firebaseapp.com",
  projectId: "todo-f253b",
  storageBucket: "todo-f253b.appspot.com",
  messagingSenderId: "431013273020",
  appId: "1:431013273020:web:2dfe1ea32560d063b59fb9",
  measurementId: "G-V2EZHT54H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);