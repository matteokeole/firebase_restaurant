import styles from "/src/components/Form/TextInput/index.module.scss";
import tag from "/src/utils/tag";

/**
 * @param {Object} props
 * @param {Object} props.reference
 * @param {String} props.type
 * @param {String} props.placeholder
 * @param {Boolean} props.required
 * @param {?String} props.error
 */
export default function TextInput({reference, type, placeholder, required, error}) {
    return (
        <label className={styles.label}>
            <input
                ref={reference}
                type={type}
                placeholder={placeholder}
                required={required}
                className={tag`${styles.label__input} ${!!error && styles.label__input__invalid}`}
            />

            {!!error && (
                <span className={styles.label__error}>
                    {error}
                </span>
            )}
        </label>
    );
}