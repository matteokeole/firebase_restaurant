import {NavLink} from "react-router-dom";

import Container from "/src/components/Container/Container";
import styles from "/src/components/Footer/Footer.module.scss";
import tag from "/src/utils/tag";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <nav className={styles.footer__nav}>
                    <NavLink to="/" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Home
                    </NavLink>

                    <NavLink to="/presentation" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Presentation
                    </NavLink>

                    <NavLink to="/menus" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Our Menus
                    </NavLink>

                    <NavLink to="/contact" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Contact Us
                    </NavLink>

                    <NavLink to="/sitemap" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Sitemap
                    </NavLink>

                    <NavLink to="/administration" className={({isActive}) => tag`${styles.footer__nav__link} ${isActive && styles.footer__nav__link__active}`}>
                        Administration
                    </NavLink>
                </nav>
            </Container>
        </footer>
    );
}