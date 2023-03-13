import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {auth, db} from "./firebaseConfig";

// Firebase Authentication
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

    return {user, isLoading};
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

// Firebase Cloud
export function useData() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return {user, isLoading};
}
export async function getData(collectionName) {
    const db = getFirestore();
    const querySnapshot  = await getDocs(collection(db, collectionName));
    const documentMap = new Map();
    try {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            documentMap.set(doc.id, doc.data());
        });
        const documentValues = Array.from(documentMap.values());
        return documentValues;
    } catch(error) {
        console.log(error);
        return false
    }
}