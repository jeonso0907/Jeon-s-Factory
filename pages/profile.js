import styles from "/styles/Profile.module.css"
import { logout } from "../firebase/firebaseClient";
import { useRouter } from "next/router";

export default function Profile() {

    return (
        <div className={styles.container}>
            <div className={styles.leftBox}></div>
            <div className={styles.rightBoxContainer}>
                <div className={styles.rightBox}></div>
                <div className={styles.rightBox}></div>
            </div>
        </div>
    );
}
