import { logout } from "../firebase/firebaseClient";
import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter();

    async function onLogout() {
        await logout();
        await router.push("/");
    }

    return (
        <div>
            <button onClick={() => router.push("/")}>HOME</button>
            <button onClick={onLogout}>logout</button>
        </div>
    );
}
