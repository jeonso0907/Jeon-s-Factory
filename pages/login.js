import * as authService from "../firebase/firebaseClient";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();

    async function onLogin() {
        await authService.login();
        await router.push("/profile");
    }

    return (
        <div>
            <button onClick={onLogin}>login</button>
        </div>
    );
}
