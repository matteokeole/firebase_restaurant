import {useContext} from "react";

import RecipeCard from "/src/components/Card/RecipeCard";
import Container from "/src/components/Container";
import RecipeContext from "/src/contexts/RecipeContext";
import styles from "/src/pages/MenuPage/index.module.scss";

export default function MenuPage() {
    const {recipes} = useContext(RecipeContext);

    return (
        <Container>
            <h1>
                Our Menus
            </h1>

            <div className={styles.recipes}>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </Container>
    );
}