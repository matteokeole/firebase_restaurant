import {useContext} from "react";

import Container from "/src/components/Container";
import CartContext from "/src/contexts/CartContext";
import NotFoundPage from "/src/pages/NotFoundPage";

export default function ThanksPage() {
    const {hasOrdered} = useContext(CartContext);

    if (!hasOrdered) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <Container>
            <h1>
                Thanks!
            </h1>

            <p>
                Your payment was submitted successfully. You can now close this page.
            </p>
        </Container>
    );
}