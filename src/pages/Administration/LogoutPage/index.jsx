import {signOut} from "firebase/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {auth} from "/firebase.config";
import Container from "/src/components/Container";

export default function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                await signOut(auth);
            } catch {
                console.error("Log out failed, please try again.");
            }

            navigate("/");
        };

        logout();
    }, []);

    return (
        <>
            Logging out...
        </>
    );
}