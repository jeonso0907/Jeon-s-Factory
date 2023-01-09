import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "@components/firebaseConfig";
import React, {useContext} from "react";

class AuthService {
    constructor() {
        this.auth = getAuth();
    }
    login() {
        const auth = getAuth()
        return signInWithEmailAndPassword(this.auth, "gggg99991@gmail.com", "L78952")
    }
}
export default  AuthService


let currUser ="FAIL TO GET USER"

const AuthContext = React.createContext(undefined, undefined)

export function useAuth(){
    return useContext(AuthContext)
}

export function newAuth() {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            currUser = user.displayName
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

export function login() {
    const auth = getAuth();
    let res = false
    console.log("IN LOG IN")
    signInWithEmailAndPassword(auth, "gggg99991@gmail.com", "L78952")
        .then((userCredential) => {
            console.log("LOG IN GOOD")
            const user = userCredential.user;
            currUser = auth.currentUser
            res = true
            //document.getElementById("userText").textContent = user.displayName
            // ...
        })
        .catch((error) => {
            console.log("LOG IN FAIL")
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return res
}

export async function logout() {
    console.log("LOG OUT THIS USER: " + auth.currentUser.displayName)
    await signOut(auth);
    return;
}

export function getCurrAuth() {
    let userStatus = "Login"
    if (auth.currentUser !== null) {
        console.log("CURR USER: " + auth.currentUser.displayName)
        return auth.currentUser.displayName
    }
    return userStatus
}

export function isUserLogin() {
    if (auth.currentUser !== null) {
        return true
    }
    return false
}