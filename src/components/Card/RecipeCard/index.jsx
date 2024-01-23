import {useContext} from "react";

import Badge from "/src/components/Badge";
import AddToCartButton from "/src/components/Button/AddToCartButton";
import styles from "/src/components/Card/RecipeCard/index.module.scss";
import CartContext from "/src/contexts/CartContext";

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.recipe
 */
export default function RecipeCard({recipe}) {
    const {isItemInCart, toggleItem} = useContext(CartContext);

    return (
        <div className={styles.recipeCard}>
            <img src={recipe.image} alt={recipe.name} className={styles.recipeCard__image} />

            <div className={styles.recipeCard__content}>
                <div className={styles.recipeCard__content__header}>
                    <div className={styles.recipeCard__content__header__presentation}>
                        <strong className={styles.recipeCard__content__header__presentation__title}>
                            {recipe.name}
                        </strong>

                        <span className={styles.recipeCard__content__header__presentation__details}>
                            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min • {recipe.difficulty}
                        </span>
                    </div>

                    <div className={styles.recipeCard__content__header__toolbar}>
                        <AddToCartButton isChecked={isItemInCart(recipe)} onClick={() => toggleItem(recipe)} />
                    </div>
                </div>

                <div className={styles.recipeCard__content__ingredients}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <Badge key={index}>
                            {ingredient}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}