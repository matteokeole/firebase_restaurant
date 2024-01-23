import {createContext, useState} from "react";

const CartContext = createContext(null);

export default CartContext;

const dummyItems = [
    {
        name: "test 1",
        image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    }, {
        name: "test 2",
        image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    }, {
        name: "test 3",
        image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    },
];

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState(dummyItems);

    /**
     * @param {import("/src/contexts/RecipeContext").Recipe} item
     */
    const isItemInCart = item => cartItems.indexOf(item) !== -1;

    /**
     * @param {import("/src/contexts/RecipeContext").Recipe} item
     */
    const addItem = item => setCartItems([...cartItems, item]);

    /**
     * @param {Number} itemIndex
     */
    const removeItem = itemIndex => setCartItems(cartItems.toSpliced(itemIndex, 1));

    /**
     * @param {import("/src/contexts/RecipeContext").Recipe} item
     */
    const toggleItem = item => {
        const itemIndex = cartItems.indexOf(item);

        return itemIndex === -1 ?
            addItem(item) :
            removeItem(itemIndex);
    };

    return (
        <CartContext.Provider value={{cartItems, isItemInCart, addItem, removeItem, toggleItem}}>
            {children}
        </CartContext.Provider>
    );
}