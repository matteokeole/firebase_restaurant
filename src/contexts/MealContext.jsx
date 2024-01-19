import {createContext, useState} from "react";

import useFetch from "/src/hooks/useFetch";

const MealContext = createContext(null);

export default MealContext;

/**
 * @param {React.ReactNode} children
 */
export function MealContextProvider({children}) {
    const recipes = useFetch("/recipes.json");
    const [meals, setMeals] = useState(recipes);

    return (
        <MealContext.Provider value={{meals}}>
            {children}
        </MealContext.Provider>
    );
}