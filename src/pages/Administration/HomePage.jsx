import {useContext} from "react";

import AuthenticationContext from "/src/contexts/AuthenticationContext";
import LoginPage from "/src/pages/LoginPage";

export default function HomePage() {
    const {user} = useContext(AuthenticationContext);

    if (!user) {
        return (
            <Navigate to="/administration/login" />
        );
    }

    return (
        <>
            <h1>
                Admin Home
            </h1>
        </>
    );
}