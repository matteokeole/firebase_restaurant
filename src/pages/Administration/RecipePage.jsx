import Container from "/src/components/Container/Container";
import RecipeTable from "/src/components/RecipeTable";

export default function RecipePage() {
    return (
        <Container>
            <h1>
                Recipes
            </h1>

            <RecipeTable />
        </Container>
    );
}