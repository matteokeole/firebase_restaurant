import {signOut} from "firebase/auth";
import {useEffect} from "react";

import {auth} from "/firebase.config";
import Container from "/src/components/Container";

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
        <Container>
            Logging out...
        </Container>
    );
}