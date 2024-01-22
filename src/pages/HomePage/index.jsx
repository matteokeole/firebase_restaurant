import {Link} from "react-router-dom";

import Container from "/src/components/Container";
import styles from "/src/pages/HomePage/index.module.scss";

export default function HomePage() {
    return (
        <Container>
            <h1>
                Welcome!
            </h1>

            <p>
                Welcome to Firebase Restaurant, where culinary excellence meets a warm and inviting ambiance. Nestled in the heart of the city, Firebase takes pride in offering a unique dining experience that transcends traditional boundaries.<br />
                Our menu is a vibrant fusion of global flavors, meticulously curated to tantalize your taste buds and elevate your dining journey.<br />
                From sizzling starters to decadent desserts, each dish is crafted with precision using the finest, locally sourced ingredients.
            </p>

            <Link to="/cart" className={styles.cartLink}>
                Go to my cart
            </Link>
        </Container>
    );
}