import {auth, getCurrAuth, login, logout} from '@components/firebaseAuth'
import {signInWithEmailAndPassword} from "firebase/auth";
import {log} from "debug";
import * as authService from "@components/firebaseAuth";

export default function Login() {

    function onLogin() {
        authService.login()
    }

    return (
        <div>
            <button onClick={onLogin}>login</button>
            <a href="./profile">prof</a>
        </div>
    )
}