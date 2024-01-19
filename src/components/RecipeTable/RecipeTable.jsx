import {useContext} from "react";

import styles from "/src/components/RecipeTable/RecipeTable.module.scss";
import RecipeContext from "/src/contexts/RecipeContext";

export default function RecipeTable() {
    const {recipes} = useContext(RecipeContext);

    return (
        <table className={styles.recipeTable}>
            <thead className={styles.recipeTable__head}>
                <tr className={styles.recipeTable__head__row}>
                    <th className={styles.recipeTable__head__row__cell}>
                        Name
                    </th>

                    <th className={styles.recipeTable__head__row__cell}>
                        Cuisine
                    </th>

                    <th className={styles.recipeTable__head__row__cell}>
                        Category
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
                        <RecipeCategory key={index} category={category} />
                    ))}
                </div>
            </td>
        </tr>
    );
}

/**
 * @param {Object} props
 * @param {String} props.category
 */
function RecipeCategory({category}) {
    return (
        <div className={styles.recipeCategory}>
            {category}
        </div>
    );
}