import {NavLink} from "react-router-dom";

import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <NavLink to="/administration">
                    Administration
                </NavLink>
            </nav>
        </footer>
    );
}