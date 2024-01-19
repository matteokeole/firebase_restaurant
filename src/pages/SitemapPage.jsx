import {Link} from "react-router-dom";

import Container from "/src/components/Container/Container";

export default function SitemapPage() {
    return (
        <Container>
            <h1>
                Sitemap
            </h1>

            <nav>
                <Link to="/">
                    Home
                </Link>

                <Link to="/presentation">
                    Presentation
                </Link>

                <Link to="/menus">
                    Our Menus
                </Link>

                <Link to="/contact">
                    Contact Us
                </Link>
            </nav>
        </Container>
    );
}