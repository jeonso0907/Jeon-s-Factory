import styles from './Sidebar.module.css'
import {logout, useAuth} from "../firebase/firebaseClient";
import { useState, useEffect } from "react";
import {useRouter} from "next/router";

export default function Sidebar() {
    const {user, isLoading} = useAuth();
    const [displayName, setDisplayName] = useState("Login");
    const router = useRouter();

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName);
        } else {
            setDisplayName("Login");
        }
    }, [user]);

    function loggedStatus() {
        if (!isLoading) {
            if (user) {
                return (
                    <a href="/profile">
                        <span>
                          <i className="material-icons">account_circle</i>
                          <span id="userText" className="icon-text">{displayName}</span>
                        </span>
                    </a>
                )
            } else {
                return (
                    <a href="/login">
                        <span>
                          <i className="material-icons">account_circle</i>
                          <span id="userText" className="icon-text">Login</span>
                        </span>
                    </a>
                )
            }
        }
    }

    function loggedOutStatus() {
        if (!isLoading && user) {
            return (
                <a href="/" onClick={onLogout}>
                    <span>
                        <i className="material-icons">logout</i>
                        <span id="userText" className="icon-text">Logout</span>
                    </span>
                </a>
            )
        }
    }

    async function onLogout() {
        await logout();
        await router.push("/");
    }

    return (
        <div id="mySidebar" className={styles.sidebar}>
            {loggedStatus()}
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
            {loggedOutStatus()}
        </div>
    )
}
