import {createContext, useState} from "react";

const CartContext = createContext(null);

export default CartContext;

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function CartContextProvider({children}) {
	const [cartItems, setCartItems] = useState([]);
	const [hasOrdered, setHasOrdered] = useState(false);

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

	const order = () => setHasOrdered(true);

	return (
		<CartContext.Provider value={{cartItems, hasOrdered, isItemInCart, addItem, removeItem, toggleItem, order}}>
			{children}
		</CartContext.Provider>
	);
}