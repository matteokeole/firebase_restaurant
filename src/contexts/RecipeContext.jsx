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
        <RecipeContext.Provider value={{recipes, sortByName}}>
            {children}
        </RecipeContext.Provider>
    );
}