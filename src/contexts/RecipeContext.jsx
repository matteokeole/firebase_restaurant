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

    useEffect(() => {
        if (!json) {
            return;
        }

        setRecipes(json.recipes);
    }, [json]);

    return (
        <RecipeContext.Provider value={{recipes}}>
            {children}
        </RecipeContext.Provider>
    );
}