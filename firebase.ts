import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaaNsK_1ptcIej_qXM1qWI9trU6GkndNQ",
  authDomain: "chatgpt-messenger-yt-db8b8.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-db8b8",
  storageBucket: "chatgpt-messenger-yt-db8b8.appspot.com",
  messagingSenderId: "1070020904027",
  appId: "1:1070020904027:web:077d3b0497626e75c2eb7e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };