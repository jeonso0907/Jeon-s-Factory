import {initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAMjMHn25wAhP7mhEe8YIR0lJ0BGVKxz84",
    authDomain: "jeon-s-factory.firebaseapp.com",
    projectId: "jeon-s-factory",
    storageBucket: "jeon-s-factory.appspot.com",
    messagingSenderId: "246990228550",
    appId: "1:246990228550:web:6f2149d040a6d537338e47",
    measurementId: "G-L2M3GVW8QQ"
}
export const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}
export const auth = getAuth(app)

