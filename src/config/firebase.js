import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyChzR_fjaYDNn4O9bDEGWPK6zuHbQuaRhA",
    authDomain: "suraj-s-personal-project.firebaseapp.com",
    databaseURL: "https://suraj-s-personal-project.firebaseio.com",
    projectId: "suraj-s-personal-project",
    storageBucket: "suraj-s-personal-project.appspot.com",
    messagingSenderId: "191240362357",
    appId: "1:191240362357:web:6678d50c7dfb872b841b3c",
    measurementId: "G-7Y7MPTMS40"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;