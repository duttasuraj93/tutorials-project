import React, { useState, useEffect, useContext, createContext } from "react";
import toast from './config/toast';

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


const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}


// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = (email, password) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
            setUser(response.user);
            toast.success('Login successful. Welcome');
            return response.user;
        }).catch(error => {
            toast.error(error.message);
        });
    };

    const signup = (email, password) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
            setUser(response.user);
            toast.success('Registration successfull');
            return response.user;
        });
    };

    const signout = () => {
        return firebase
        .auth()
        .signOut()
        .then(() => {
            setUser(false);
        });
    };

    const sendPasswordResetEmail = email => {
        return firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            return true;
        });
    };

    const confirmPasswordReset = (code, password) => {
        return firebase
        .auth()
        .confirmPasswordReset(code, password)
        .then(() => {
            return true;
        });
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setUser(user);
        } else {
            setUser(false);
        }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Return the user object and auth methods
    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}