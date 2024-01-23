import styles from "/src/components/Container/index.module.scss";
import tag from "/src/utils/tag";

/**
 * @param {Object} props
 * @param {?String} props.className
 * @param {React.ReactNode} props.children
 */
export default function Container({className, children}) {
    return (
        <div className={tag`${styles.container} ${className}`}>
            {children}
        </div>
    );
}