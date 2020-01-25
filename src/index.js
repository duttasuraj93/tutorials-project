import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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

const email = "suraj2@dutta.com";
const password = "surajdutta";
firebase.auth().displayName = "Suraj Dutta";

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(res => {
    console.log("before create res");
    console.log(res);
})
.catch(function(error) {
    // Handle Errors here.
    console.log(error);
});

firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(result) {
      console.log("before more result");
      console.log(result);
      console.log(firebase.userInfo());
      firebase.userInfo().updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        // Profile updated successfully!
        // "Jane Q. User"
        // var displayName = user.displayName;
        // "https://example.com/jane-q-user/profile.jpg"
        // var photoURL = user.photoURL;
      }, function(error) {
        // An error happened.
      });
    // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
  }).catch(function(error) {
      console.log("signin error");
      console.log(error);
    // Handle error.
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





ReactDOM.render(<App />, document.getElementById('root'));
