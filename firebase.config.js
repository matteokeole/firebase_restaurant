import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const config = {
    apiKey: "AIzaSyAwBvunKxlgXqpghETo0-MpxjRqfkONUnE",
    authDomain: "fir-restaurant-44a50.firebaseapp.com",
    projectId: "fir-restaurant-44a50",
    storageBucket: "fir-restaurant-44a50.appspot.com",
    messagingSenderId: "375337021001",
    appId: "1:375337021001:web:afb2da6461b0af76b89998",
    measurementId: "G-3TQQFWHE7V",
};

const app = initializeApp(config);

export const auth = getAuth(app);