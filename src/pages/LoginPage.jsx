import {useContext} from "react";
import {Navigate} from "react-router-dom";

import Login from "/src/components/Administration/Login/Login";
import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function LoginPage() {
    const {user} = useContext(AuthenticationContext);

    if (!!user) {
        return (
            <Navigate to="/administration" />
        );
    }

    return (
        <>
            <h1>
                Login
            </h1>

            <Login />
        </>
    );
}