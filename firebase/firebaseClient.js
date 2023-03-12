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
        await signInWithEmailAndPassword(auth, 'gggg99991@gmail.com', 'L78952');
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
