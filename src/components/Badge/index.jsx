import styles from "/src/components/Badge/index.module.scss";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Badge({children}) {
    return (
        <div className={styles.badge}>
            {children}
        </div>
    );
}