import {useContext, useState} from "react";

import Badge from "/src/components/Badge";
import SortByNameButton from "/src/components/Button/SortByNameButton";
import styles from "/src/components/RecipeTable/index.module.scss";
import RecipeContext from "/src/contexts/RecipeContext";

export default function RecipeTable() {
    const {recipes, sortByName} = useContext(RecipeContext);
    const [order, setOrder] = useState(0);

    const handleSortByName = () => {
        const newOrder = order === 0 ? 1 : -order;

        sortByName(newOrder);
        setOrder(newOrder);
    };

    return (
        <table className={styles.recipeTable}>
            <thead className={styles.recipeTable__head}>
                <tr className={styles.recipeTable__head__row}>
                    <th className={styles.recipeTable__head__row__cell}>
                        <SortByNameButton order={order} onClick={handleSortByName} />
                    </th>

                    <th className={styles.recipeTable__head__row__cell}>
                        Cuisine
                    </th>

                    <th className={styles.recipeTable__head__row__cell}>
                        Categories
                    </th>
                </tr>
            </thead>

            <tbody className={styles.recipeTable__body}>
                {recipes.map(recipe => (
                    <RecipeRow key={recipe.id} recipe={recipe} />
                ))}
            </tbody>
        </table>
    );
}

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.recipe
 */
function RecipeRow({recipe}) {
    return (
        <tr className={styles.recipeRow}>
            <td className={styles.recipeRow__cell}>
                {recipe.name}
            </td>

            <td className={styles.recipeRow__cell}>
                {recipe.cuisine}
            </td>

            <td className={styles.recipeRow__cell}>
                <div className={styles.recipeCategories}>
                    {recipe.mealType.map((category, index) => (
                        <Badge key={index}>
                            {category}
                        </Badge>
                    ))}
                </div>
            </td>
        </tr>
    );
}