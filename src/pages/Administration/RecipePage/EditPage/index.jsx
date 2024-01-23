import {useContext} from "react";
import {useParams} from "react-router-dom";

import Container from "/src/components/Container";
import RecipeForm from "/src/components/Form/RecipeForm";
import BackLink from "/src/components/Link/BackLink";
import RecipeContext from "/src/contexts/RecipeContext";
import styles from "/src/pages/Administration/RecipePage/EditPage/index.module.scss";
import NotFoundPage from "/src/pages/NotFoundPage";

export default function EditPage() {
    const id = Number(useParams().id);
    const {findById} = useContext(RecipeContext);
    const recipe = findById(id);

    if (!recipe) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <Container>
            <BackLink href="/administration/recipes">
                Recipes
            </BackLink>

            <h1>
                {recipe.name}
            </h1>

            <div className={styles.formContainer}>
                <RecipeForm recipe={recipe} />
            </div>
        </Container>
    );
}