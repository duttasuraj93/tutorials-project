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


// const email = "suraj@dutta.com";
// const password = "surajdutta";
const auth = firebase.auth();

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then(function(result) {
//       console.log("before more result");
//       console.log(result);
//   }).catch(function(error) {
//       console.log("signin error");
//       console.log(error);
// });

export const LoggedIn = React.createContext(false);

export const MyContext = React.createContext();

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log("before user");
//         console.log(user);
        
//       // User is signed in.
//     } else {
//         console.log('not signed in');
//       // No user is signed in.
//     }
// });



class FirebaseAuth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false
        }
    }

    // const email = "suraj@dutta.com";
    // const password = "surajdutta";
    componentDidMount() {
        console.log("calling here");
        // firebase.auth().signInWithEmailAndPassword("suraj@dutta.com", "surajdutta")
        // .then(function(result) {
        //     // this.setState({
        //     //     isLoggedIn: true,
        //     // })
        //     console.log("before more result");
        //     console.log(result);
        // }).catch(function(error) {
        //     console.log("signin error");
        //     console.log(error);
        // });

        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         console.log("before user");
        //         console.log(user);
        //         // return user;
        //         this.setState({
        //             isLoggedIn: true
        //         })
        //         // return <MyContext.Provider value={true}></MyContext.Provider>
                
        //     // User is signed in.
        //     } else {
        //         console.log('not signed in');
        //     // No user is signed in.
        //     }
        // });

    }

    // auth.signInWithEmailAndPassword("suraj@dutta.com", "surajdutta")
    // .then(function(result) {
    //     console.log("before more result");
    //     console.log(result);
    // }).catch(function(error) {
    //     console.log("signin error");
    //     console.log(error);
    // });

    // export const MyContext = React.createContext();

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         console.log("before user");
    //         console.log(user);
            
    //     // User is signed in.
    //     } else {
    //         console.log('not signed in');
    //     // No user is signed in.
    //     }
    // });


    render() { 
        // console.log(this.context);
        // console.log("hell");
        // return console.log("fuck off");
        // if(!this.state.isLoggedIn) {
        //     return (
        //         <MyContext.Provider value={this.state.isLoggedIn}>
        //             {this.props.children}
        //         </MyContext.Provider>
        //     )
        // } else {
        //     return (
        //         <MyContext.Provider value={this.state.isLoggedIn}>
        //             {this.props.children}
        //         </MyContext.Provider>
        //     )
        // }
        return (
            <LoggedIn.Provider value={this.state.isLoggedIn}>
            {/* <LoggedIn.Provider value="hello there"> */}
                {this.props.children}
            </LoggedIn.Provider>
        )

    }
}
 
export default FirebaseAuth;