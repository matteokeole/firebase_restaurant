import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Carousel from "/src/components/Carousel";
import FeaturedRecipeSlide from "/src/components/Carousel/Slide/FeaturedRecipeSlide";
import Container from "/src/components/Container";
import RecipeContext from "/src/contexts/RecipeContext";
import styles from "/src/pages/HomePage/index.module.scss";

export default function HomePage() {
    const {recipes} = useContext(RecipeContext);
    const [featuredRecipes, setFeaturedRecipes] = useState([]);

    useEffect(() => {
        if (recipes === null) {
            return;
        }

        setFeaturedRecipes(recipes.slice(0, 5));
    }, [recipes]);

    return (
        <>
            <Carousel>
                {featuredRecipes.map(featuredRecipe => (
                    <FeaturedRecipeSlide key={featuredRecipe.id} recipe={featuredRecipe} />
                ))}
            </Carousel>

            <Container>
                <h1>
                    Welcome!
                </h1>

                <p>
                    Welcome to Firebase Restaurant, where culinary excellence meets a warm and inviting ambiance. Nestled in the heart of the city, Firebase takes pride in offering a unique dining experience that transcends traditional boundaries.<br />
                    Our menu is a vibrant fusion of global flavors, meticulously curated to tantalize your taste buds and elevate your dining journey.<br />
                    From sizzling starters to decadent desserts, each dish is crafted with precision using the finest, locally sourced ingredients.
                </p>

                <Link to="/cart" className={styles.cartLink}>
                    Go to my cart
                </Link>
            </Container>
        </>
    );
}