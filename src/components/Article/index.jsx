import styles from "/src/components/Article/index.module.scss";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Article({children}) {
	return (
		<article className={styles.article}>
			{children}
		</article>
	);
}