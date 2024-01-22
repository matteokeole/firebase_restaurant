import styles from "/src/components/Card/index.module.scss";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Card({children}) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}