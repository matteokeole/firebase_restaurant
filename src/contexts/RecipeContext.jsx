import {createContext, useEffect, useState} from "react";

import useFetch from "/src/hooks/useFetch";

/**
 * @typedef {Object} Recipe
 * @property {Number} id
 * @property {String} name
 * @property {String} image
 * @property {String} cuisine
 * @property {String} difficulty
 * @property {Number} prepTimeMinutes
 * @property {Number} cookTimeMinutes
 * @property {String[]} ingredients
 * @property {String[]} mealType
 */

const difficulties = [
    "Easy",
    "Medium",
    "Hard",
];

const mealTypes = [
    "Appetizer",
    "Beverage",
    "Breakfast",
    "Dessert",
    "Dinner",
    "Lunch",
    "Side Dish",
    "Snack",
];

const RecipeContext = createContext(null);

export default RecipeContext;

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function RecipeContextProvider({children}) {
    const json = useFetch("/recipes.json");
    const [recipes, setRecipes] = useState([]);

    /**
     * @param {Recipe} recipe
     */
    const createOrUpdate = recipe => {
        if (!!recipe.id) {
            // Update
            const recipeIndex = recipes.findIndex(_recipe => _recipe.id === recipe.id);

            setRecipes(recipes.toSpliced(recipeIndex, 1, recipe));
        } else {
            // Create
            recipe.id = Math.max(...recipes.map(recipe => recipe.id)) + 1;

            setRecipes([...recipes, recipe]);
        }
    };

    /**
     * @param {Number} id
     */
    const findById = id => recipes.find(recipe => recipe.id === id);

    /**
     * @param {Number} order
     */
    const sortByName = order => {
        setRecipes(recipes.toSorted((a, b) => a.name.localeCompare(b.name) * order));
    };

    useEffect(() => {
        if (!json) {
            return;
        }

        setRecipes(json.recipes);
    }, [json]);

    return (
        <RecipeContext.Provider value={{recipes, difficulties, mealTypes, createOrUpdate, findById, sortByName}}>
            {children}
        </RecipeContext.Provider>
    );
}