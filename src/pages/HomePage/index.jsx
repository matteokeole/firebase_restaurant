import {Link} from "react-router-dom";

import Container from "/src/components/Container/Container";
import styles from "/src/pages/HomePage/index.module.scss";

export default function HomePage() {
    return (
        <Container>
            <h1>
                Home
            </h1>

            <Link to="/cart" className={styles.cartLink}>
                Go to my cart
            </Link>
        </Container>
    );
}