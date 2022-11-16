
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhGxsW8g5dj-qGRmiyNHfweC5zRXGn4vM",
    authDomain: "movieapp-6eb94.firebaseapp.com",
    projectId: "movieapp-6eb94",
    storageBucket: "movieapp-6eb94.appspot.com",
    messagingSenderId: "631801304893",
    appId: "1:631801304893:web:315ab13d7572a839dcd754",
    measurementId: "G-32FFYRFP42"
  };

  

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);