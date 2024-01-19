import {signOut} from "firebase/auth";
import {useEffect} from "react";

import {auth} from "/firebase.config";

export default function LogoutPage() {
    useEffect(() => {
        const logout = async () => {
            try {
                await signOut(auth);
            } catch {
                console.error("Log out failed, please try again.");
            }
        };

        logout();
    }, []);

    return (
        <>
            Logging you out...
        </>
    );
}