import {Link} from "react-router-dom";

import Card from "/src/components/Card/Card";
import Container from "/src/components/Container/Container";
import styles from "/src/pages/Administration/HomePage/index.module.scss";

export default function HomePage() {
    return (
        <Container>
            <h1>
                Administration
            </h1>

            <section className={styles.cards}>
                <Link to="/administration/recipes">
                    <Card>
                        Recipes
                    </Card>
                </Link>

                <Link to="/administration/recipes/new">
                    <Card>
                        New recipe
                    </Card>
                </Link>
            </section>

            <div className={styles.toolbar}>
                <Link to="/administration/logout" className={styles.toolbar__link}>
                    Log out
                </Link>
            </div>
        </Container>
    );
}