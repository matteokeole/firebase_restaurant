import styles from "/src/components/CartItem/index.module.scss";

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.item
 */
export default function CartItem({item}) {
    return (
        <div className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItem__image} />

            <div className={styles.cartItem__content}>
                {item.name}
            </div>
        </div>
    );
}