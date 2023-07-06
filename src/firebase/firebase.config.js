// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXeWhsHX_7zgfyYs_xzXBl4DEQZmiM1Fw",
//   authDomain: "recepie-app-cac2c.firebaseapp.com",
//   projectId: "recepie-app-cac2c",
//   storageBucket: "recepie-app-cac2c.appspot.com",
//   messagingSenderId: "1044838982866",
//   appId: "1:1044838982866:web:512a4b6df803fff68cb90b",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
