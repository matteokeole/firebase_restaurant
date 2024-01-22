import Container from "/src/components/Container";
import BackLink from "/src/components/Link/BackLink";
import styles from "/src/pages/Administration/RecipePage/NewPage/index.module.scss";

export default function NewPage() {
    return (
        <Container>
            <BackLink href="/administration/recipes">
                Recipes
            </BackLink>

            <h1>
                New Recipe
            </h1>

            //
        </Container>
    );
}