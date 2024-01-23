import {useContext} from "react";
import {NavLink, useLocation} from "react-router-dom";

import styles from "/src/components/Header/index.module.scss";
import AuthenticationContext from "/src/contexts/AuthenticationContext";
import tag from "/src/utils/tag";

export default function Header() {
    const {pathname} = useLocation();
    const {user} = useContext(AuthenticationContext);
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

                <NavLink to="/cart" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Cart
                </NavLink>

                <NavLink to="/contact" className={({isActive}) => tag`${styles.header__nav__link} ${isActive && styles.header__nav__link__active}`}>
                    Contact Us
                </NavLink>

                {!!user && (
                    <div className={styles.header__nav__administrationContainer}>
                        <NavLink to="/administration/recipes" className={styles.header__nav__link}>
                            Recipes
                        </NavLink>

                        <NavLink to="/administration/recipes/new" className={styles.header__nav__link}>
                            New recipe
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
}