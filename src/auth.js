import React, { Component, createContext } from 'react';
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

firebase.initializeApp(firebaseConfig);


const email = "suraj@dutta.com";
const password = "surajdutta";

firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(result) {
      console.log("before more result");
      console.log(result);
  }).catch(function(error) {
      console.log("signin error");
      console.log(error);
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("before user");
        console.log(user);
      // User is signed in.
    } else {
        console.log('not signed in');
      // No user is signed in.
    }
});

const UserDetails = createContext();

class firebaseAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return console.log("fuck off");
    }
}
 
export default firebaseAuth;