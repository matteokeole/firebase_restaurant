import styles from "/src/components/Container/index.module.scss";

/**
 * @param {React.ReactNode} children
 */
export default function Container({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}