import {useContext} from "react";

import RemoveFromCartButton from "/src/components/Button/RemoveFromCartButton";
import styles from "/src/components/CartItem/index.module.scss";
import CartContext from "/src/contexts/CartContext";

const quantities = Array.from({length: 10}, (_, i) => i + 1);

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.item
 */
export default function CartItem({item}) {
	const {toggleItem} = useContext(CartContext);

	return (
		<div className={styles.cartItem}>
			<img src={item.image} alt={item.name} className={styles.cartItem__image} />

			<div className={styles.cartItem__content}>
				<strong className={styles.cartItem__content__title}>
					{item.name}
				</strong>

				<span className={styles.cartItem__content__details}>
					{item.prepTimeMinutes + item.cookTimeMinutes} min • {item.difficulty}
				</span>

				<div className={styles.cartItem__content__quantity}>
					Quantity:

					<select className={styles.cartItem__content__quantity__select}>
						{quantities.map(quantity => (
							<option key={quantity}>
								{quantity}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className={styles.cartItem__toolbar}>
				<RemoveFromCartButton onClick={() => toggleItem(item)} />
			</div>
		</div>
	);
}