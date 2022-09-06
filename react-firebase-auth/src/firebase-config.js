import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfq5h1LEszjN5f5qKknelSoyKXRDM1TYw", //dont publish this on github, hide this somehow
    authDomain: "zzchess-firebase.firebaseapp.com",
    projectId: "zzchess-firebase",
    storageBucket: "zzchess-firebase.appspot.com",
    messagingSenderId: "346663013929",
    appId: "1:346663013929:web:a35b98ff3e70d81af4d638",
    measurementId: "G-VG62SY2JSY"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);