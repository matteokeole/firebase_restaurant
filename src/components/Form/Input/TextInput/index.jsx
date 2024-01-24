import styles from "/src/components/Form/Input/TextInput/index.module.scss";
import tag from "/src/utils/tag";

/**
 * @param {Object} props
 * @param {Object} props.reference
 * @param {String} props.type
 * @param {String} props.placeholder
 * @param {?String} [props.value]
 * @param {Boolean} props.required
 * @param {?Number} props.maxLength
 * @param {?String} props.error
 * @param {?Function} [props.onChange]
 */
export default function TextInput({reference, type, placeholder, value, required, maxLength, error, onChange}) {
	return (
		<label className={styles.label}>
			<input
				ref={reference}
				type={type}
				placeholder={`${placeholder}${required ? " *" : ""}`}
				value={value ?? ""}
				required={required}
				maxLength={maxLength}
				className={tag`${styles.label__input} ${!!error && styles.label__input__invalid}`}
				onChange={onChange}
			/>

			{!!error && (
				<span className={styles.label__error}>
					{error}
				</span>
			)}
		</label>
	);
}