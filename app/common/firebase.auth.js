// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBxzYknnUFjaZkM3IS6-3gsFMhy_Dl8tdE",
//   authDomain: "eris-c2442.firebaseapp.com",
//   projectId: "eris-c2442",
//   storageBucket: "eris-c2442.appspot.com",
//   messagingSenderId: "619188569192",
//   appId: "1:619188569192:web:47a98ad653d0bc5388e7dd",
//   measurementId: "G-DKN3GPFJRM"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4GS7U9P-skEGmBu9dRhDBOejjNsnyeY",
  authDomain: "my-app-47a6f.firebaseapp.com",
  databaseURL: "https://my-app-47a6f-default-rtdb.firebaseio.com",
  projectId: "my-app-47a6f",
  storageBucket: "my-app-47a6f.appspot.com",
  messagingSenderId: "115531048903",
  appId: "1:115531048903:web:1f67e3d30ac6e3c2679be2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);