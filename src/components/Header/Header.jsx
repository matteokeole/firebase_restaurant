import {NavLink} from "react-router-dom";

import styles from "/src/components/Header/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.header__logo}>
                <img src="#" alt="Logo" />
            </NavLink>

            <nav>
                <NavLink to="/presentation">
                    Presentation
                </NavLink>

                <NavLink to="/menu">
                    Our menu
                </NavLink>

                <NavLink to="/contact">
                    Contact us
                </NavLink>
            </nav>
        </header>
    );
}