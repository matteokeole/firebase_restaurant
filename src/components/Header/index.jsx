import {NavLink, useLocation} from "react-router-dom";

import styles from "/src/components/Header/index.module.scss";
import tag from "/src/utils/tag";

export default function Header() {
    const {pathname} = useLocation();
    const isHome = pathname === "/";

    return (
        <header className={tag`${styles.header} ${isHome && styles.header__home}`}>
            <NavLink to="/" className={styles.header__logo}></NavLink>

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

                <NavLink to="/cart" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Cart
                </NavLink>
            </nav>
        </header>
    );
}