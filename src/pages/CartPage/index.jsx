import {useContext} from "react";

import CartItem from "/src/components/CartItem";
import Container from "/src/components/Container";
import CartContext from "/src/contexts/CartContext";
import styles from "/src/pages/CartPage/index.module.scss";

export default function CartPage() {
    const {cartItems} = useContext(CartContext);

    return (
        <Container>
            <h1 className={styles.title}>
                Cart
            </h1>

            <span className={styles.cartItemCount}>
                {cartItems.length} items
            </span>

            <ul className={styles.cartItems}>
                {cartItems.map((cartItem, index) => (
                    <CartItem key={index} item={cartItem} />
                ))}
            </ul>
        </Container>
    );
}