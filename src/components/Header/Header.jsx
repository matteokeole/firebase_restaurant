import {NavLink} from "react-router-dom";

import styles from "/src/components/Header/Header.module.scss";
import tag from "/src/utils/tag";

export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.header__logo}>
                <img src="#" alt="Logo" />
            </NavLink>

            <nav className={styles.header__nav}>
                <NavLink to="/presentation" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Presentation
                </NavLink>

                <NavLink to="/menus" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Our Menus
                </NavLink>

                <NavLink to="/contact" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Contact Us
                </NavLink>
            </nav>
        </header>
    );
}