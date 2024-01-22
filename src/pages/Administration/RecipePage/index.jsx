import {Link} from "react-router-dom";

import Container from "/src/components/Container/Container";
import RecipeTable from "/src/components/RecipeTable";
import styles from "/src/pages/Administration/RecipePage/index.module.scss";

export default function RecipePage() {
    return (
        <Container>
            <div className={styles.header}>
                <h1 className={styles.header__title}>
                    Recipes
                </h1>

                <div className={styles.header__toolbar}>
                    <Link to="/administration/recipes/new" className={styles.header__toolbar__newRecipeLink}>
                        New recipe
                    </Link>
                </div>
            </div>

            <RecipeTable />
        </Container>
    );
}