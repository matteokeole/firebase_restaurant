import {Link} from "react-router-dom";

import Card from "/src/components/Card";
import Container from "/src/components/Container/Container";
import styles from "/src/pages/SitemapPage/index.module.scss";

export default function SitemapPage() {
    return (
        <Container>
            <h1>
                Sitemap
            </h1>

            <nav className={styles.sitemap}>
                <Link to="/">
                    <Card>
                        Home
                    </Card>
                </Link>

                <Link to="/presentation">
                    <Card>
                        Presentation
                    </Card>
                </Link>

                <Link to="/menus">
                    <Card>
                        Our Menus
                    </Card>
                </Link>

                <Link to="/contact">
                    <Card>
                        Contact Us
                    </Card>
                </Link>
            </nav>
        </Container>
    );
}