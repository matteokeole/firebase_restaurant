import styles from "/src/components/Button/SortByNameButton/index.module.scss";

/**
 * @param {Object} props
 * @param {Number} props.order
 * @param {Function} props.onClick
 */
export default function SortByNameButton({order, onClick}) {
    return (
        <button className={styles.sortButton} onClick={onClick}>
            Name

            {order !== 0 && (
                <span className={styles.sortButton__icon}>
                    {order > 0 ? (
                        <>
                            &#11206;
                        </>
                    ) : (
                        <>
                            &#11205;
                        </>
                    )}
                </span>
            )}
        </button>
    );
}