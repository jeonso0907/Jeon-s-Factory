import { useState } from "react";
import * as authService from "../firebase/firebaseClient";
import { useRouter } from "next/router";
import styles from "@styles/Login.module.css";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onLogin() {
        await authService.login(email, password);
        await router.push("/profile");
    }

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}
