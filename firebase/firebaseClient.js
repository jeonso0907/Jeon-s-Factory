import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return { user, isLoading };
}

export async function login(email, password) {
    try {
        const auth = getAuth();
        email = 'gggg99991@gmail.com'
        password = 'L78952'
        await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        const auth = getAuth();
        await signOut(auth);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
