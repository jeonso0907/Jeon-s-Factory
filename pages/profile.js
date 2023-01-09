import {auth, getCurrAuth, login, logout} from '@components/firebaseAuth'
import {signInWithEmailAndPassword} from "firebase/auth";

export default function Profile() {

    console.log("PROFLE LOADED")
    function test() {
        getCurrAuth()
    }

    return (
        <div>
            <button onClick={login}>PROFILE</button>
            <button onClick={logout}>logout</button>
            <button onClick={test}>test</button>
        </div>
    )
}