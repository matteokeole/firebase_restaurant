import styles from "/src/components/Button/RemoveFromCartButton/index.module.scss";

/**
 * @param {Object} props
 * @param {Function} props.onClick
 */
export default function RemoveFromCartButton({onClick}) {
	return (
		<button title="Remove from cart" className={styles.removeFromCartButton} onClick={onClick}>
			&times;
		</button>
	);
}