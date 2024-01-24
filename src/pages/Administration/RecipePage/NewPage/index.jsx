import Container from "/src/components/Container";
import RecipeForm from "/src/components/Form/RecipeForm";
import BackLink from "/src/components/Link/BackLink";
import styles from "/src/pages/Administration/RecipePage/NewPage/index.module.scss";

export default function NewPage() {
	/**
	 * @type {import("/src/contexts/RecipeContext").Recipe}
	 */
	const recipe = {
		id: null,
		name: null,
		image: null,
		cuisine: null,
		difficulty: null,
		prepTimeMinutes: null,
		cookTimeMinutes: null,
		ingredients: [],
		mealType: [],
	};

	return (
		<Container>
			<BackLink href="/administration/recipes">
				Recipes
			</BackLink>

			<h1>
				New Recipe
			</h1>

			<div className={styles.formContainer}>
				<RecipeForm recipe={recipe} />
			</div>
		</Container>
	);
}