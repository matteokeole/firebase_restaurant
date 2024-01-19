import {Link} from "react-router-dom";

import styles from "/src/components/ContactMethods/ContactMethods.module.scss";

export default function ContactMethods() {
    return (
        <section className={styles.contactMethods}>
            <ContactMethod label="Email" value="contact@firebase-restaurant.net" url="mailto:contact@firebase-restaurant.net" />

            <ContactMethod label="Phone" value="+33 7 00 00 00 00" url="tel:+33700000000" />
        </section>
    );
}

/**
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.url
 * @param {String} props.value
 */
function ContactMethod({label, url, value}) {
    return (
        <Link to={url} target="_blank" className={styles.contactMethod}>
            <span className={styles.contactMethod__label}>
                {label}
            </span>

            <strong className={styles.contactMethod__value}>
                {value}
            </strong>
        </Link>
    );
}