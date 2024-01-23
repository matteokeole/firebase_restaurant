import {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import styles from "/src/components/Form/RecipeForm/index.module.scss";
import Select from "/src/components/Form/Input/Select";
import TextInput from "/src/components/Form/Input/TextInput";
import RecipeContext from "/src/contexts/RecipeContext";

/**
 * @param {Object} props
 * @param {import("/src/contexts/RecipeContext").Recipe} props.recipe
 */
export default function RecipeForm({recipe: _recipe}) {
    const navigate = useNavigate();
    const {difficulties, mealTypes, createOrUpdate} = useContext(RecipeContext);
    const [recipe, setRecipe] = useState(_recipe);
    const inputs = useRef([]);

    const registerInput = input => {
        if (inputs.current.includes(input)) {
            return;
        }

        inputs.current.push(input);
    };

    const handleChangeName = event => {
        const name = event.target.value;

        setRecipe(previousRecipe => ({...previousRecipe, name}));
    };

    const handleChangeImageUrl = event => {
        const imageUrl = event.target.value;

        setRecipe(previousRecipe => ({...previousRecipe, image: imageUrl}));
    };

    const handleChangeCuisine = event => {
        const cuisine = event.target.value;

        setRecipe(previousRecipe => ({...previousRecipe, cuisine}));
    };

    const handleChangeDifficulty = event => {
        const difficulty = event.target.value;

        setRecipe(previousRecipe => ({...previousRecipe, difficulty}));
    };

    const handleChangePreparationTime = event => {
        const preparationTime = Number(event.target.value);

        setRecipe(previousRecipe => ({...previousRecipe, prepTimeMinutes: preparationTime}));
    };

    const handleChangeCookingTime = event => {
        const cookingTime = Number(event.target.value);

        setRecipe(previousRecipe => ({...previousRecipe, cookTimeMinutes: cookingTime}));
    };

    const handleChangeMealTypes = event => {
        const mealTypes = [...event.target.selectedOptions].map(option => option.value);

        setRecipe(previousRecipe => ({...previousRecipe, mealType: mealTypes}));
    };

    const handleSubmit = event => {
        event.preventDefault();

        createOrUpdate(recipe);

        navigate("/administration/recipes");
    };

    return (
        <form className={styles.recipeForm} onSubmit={handleSubmit}>
            <TextInput
                reference={registerInput}
                type="text"
                placeholder="Name"
                value={recipe.name}
                required={true}
                onChange={handleChangeName}
            />

            <TextInput
                reference={registerInput}
                type="url"
                placeholder="Image URL"
                value={recipe.image}
                required={true}
                onChange={handleChangeImageUrl}
            />

            <TextInput
                reference={registerInput}
                type="text"
                placeholder="Cuisine"
                value={recipe.cuisine}
                required={true}
                onChange={handleChangeCuisine}
            />

            <Select
                reference={registerInput}
                placeholder="Difficulty"
                defaultValue={recipe.difficulty}
                options={difficulties}
                required={true}
                onChange={handleChangeDifficulty}
            />

            <div className={styles.recipeForm__inputGroup}>
                <TextInput
                    reference={registerInput}
                    type="number"
                    placeholder="Preparation time (min)"
                    value={recipe.prepTimeMinutes}
                    required={true}
                    onChange={handleChangePreparationTime}
                />

                <TextInput
                    reference={registerInput}
                    type="number"
                    placeholder="Cooking time (min)"
                    value={recipe.cookTimeMinutes}
                    required={true}
                    onChange={handleChangeCookingTime}
                />
            </div>

            <Select
                reference={registerInput}
                multiple={true}
                placeholder="Meal types"
                defaultValue={recipe.mealType}
                options={mealTypes}
                required={true}
                onChange={handleChangeMealTypes}
            />

            <div className={styles.recipeForm__footer}>
                <input type="submit" value="Submit" className={styles.recipeForm__footer__submit} />
            </div>
        </form>
    );
}