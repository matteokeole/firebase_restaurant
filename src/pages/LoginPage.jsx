import {useContext} from "react";
import {Navigate} from "react-router-dom";

import Login from "/src/components/Login/Login";
import Container from "/src/components/Container/Container";
import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function LoginPage() {
    const {user} = useContext(AuthenticationContext);

    if (!!user) {
        return (
            <Navigate to="/administration" />
        );
    }

    return (
        <Container>
            <h1>
                Login
            </h1>

            <Login />
        </Container>
    );
}