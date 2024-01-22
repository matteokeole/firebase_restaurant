import {Link} from "react-router-dom";

import styles from "/src/components/Link/BackLink/index.module.scss";

/**
 * @param {Object} props
 * @param {String} props.href
 * @param {React.ReactNode} props.children
 */
export default function BackLink({href, children}) {
    return (
        <Link to={href} className={styles.backLink}>
            &larr; {children}
        </Link>
    );
}