import styles from "/src/components/Container/Container.module.scss";

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