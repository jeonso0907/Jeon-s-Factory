import styles from './Sidebar.module.css'
import {getCurrAuth, isUserLogin, newAuth} from "@components/firebaseAuth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {auth} from './firebaseConfig'
import {useEffect, useState} from "react";
// import("./firebaseAuth").then((a)=>{
//
//     console.log(a.getCurrAuth())
//
// }

export default function Sidebar() {
    let userText = "login"
    const [currUser, setCurrUser] = useState({loggedIn: false})

    useEffect(() => {
        const unsubscribe = newAuth()
        return () => {
            unsubscribe()
        }
    }, [])

    if (!currUser.loggedIn) {
        userText = "login"
    } else {
        userText = "TEST COMPLETE"
    }

    console.log("SIDEBAR loaded")

    let mini = true


    function test() {
        document.getElementById("userText").textContent = getCurrAuth()
    }

    function toggleSidebar() {
        if (mini) {
            document.getElementById("mySidebar").style.width = "280px"
            mini = false
        } else {
            document.getElementById("mySidebar").style.width = "85px"
            mini = true
        }
        test()
    }

    function loggedStatus() {
        if (isUserLogin()) {
            return (
                <a href="/profile">
                    <span>
                        <i className="material-icons">account_circle</i>
                        <span id="userText" className="icon-text">{userText}</span>
                    </span>
                </a>
            )
        } else {
            return (
                <a href="/login">
                    <span>
                        <i className="material-icons">account_circle</i>
                        <span id="userText" className="icon-text">{userText}</span>
                    </span>
                </a>
            )
        }
    }

    return (
        <div id="mySidebar" className={styles.sidebar} onMouseOver={toggleSidebar} onMouseOut={toggleSidebar}>
            {loggedStatus()}
            {/*<a href="/login">*/}
            {/*        <span>*/}
            {/*            <i className="material-icons">account_circle</i>*/}
            {/*            <span id="userText" className="icon-text">{userText}</span>*/}
            {/*        </span>*/}
            {/*</a>*/}
            <a href="/">
                <span>
                    <i className="material-icons">home</i>
                    <span id="iconText" className="icon-text">Jeon's Factory</span>
                </span>
            </a>
            <a href="/game">
                <span>
                    <i className="material-icons">sports_esports</i>
                    <span id="iconText" className="icon-text">Game Directory</span>
                </span>
            </a>
            <a href="/music">
                <span>
                    <i className="material-icons">headphones</i>
                    <span id="iconText" className="icon-text">Music Library</span>
                </span>
            </a>
        </div>
    )
}
