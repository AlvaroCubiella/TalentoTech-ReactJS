// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB789ABOg0SPewWxuqNIhxAN2fyONoYpok",
  authDomain: "flowtech-c2f28.firebaseapp.com",
  projectId: "flowtech-c2f28",
  storageBucket: "flowtech-c2f28.firebasestorage.app",
  messagingSenderId: "1075707865892",
  appId: "1:1075707865892:web:593a45e0ac4910737821b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Se agrega la exportacion de la base de datos ocmo "db" para no tener 
// que hacer el getFirestore cada vez que se necesita
const db = getFirestore(app);
export{db};