import {useContext} from "react";
import {Navigate} from "react-router-dom";

import Container from "/src/components/Container/Container";
import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function HomePage() {
    const {user} = useContext(AuthenticationContext);

    if (!user) {
        return (
            <Navigate to="/administration/login" />
        );
    }

    return (
        <Container>
            <h1>
                Administration
            </h1>
        </Container>
    );
}