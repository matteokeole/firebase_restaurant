import Container from "/src/components/Container";
import styles from "/src/components/Carousel/Slide/FeaturedRecipeSlide/index.module.scss";

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.recipe
 */
export default function FeaturedRecipeSlide({recipe}) {
	return (
		<div className={styles.featuredRecipeSlide}>
			<img src={recipe.image} alt={recipe.name} className={styles.featuredRecipeSlide__image} />

			<Container className={styles.featuredRecipeSlide__presentation}>
				<h3 className={styles.featuredRecipeSlide__presentation__title}>
					{recipe.name}.
				</h3>

				{!!recipe.instructions.length && (
					<strong className={styles.featuredRecipeSlide__presentation__subtitle}>
						{recipe.instructions.at(-1)}
					</strong>
				)}
			</Container>
		</div>
	);
}