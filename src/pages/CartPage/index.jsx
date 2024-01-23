import {useContext} from "react";
import {Link} from "react-router-dom";

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

            {!!cartItems.length && (
                <span className={styles.cartItemCount}>
                    {cartItems.length} item{cartItems.length === 1 ? "" : "s"}
                </span>
            )}

            {!!cartItems.length ? (
                <ul className={styles.cartItems}>
                    {cartItems.map((cartItem, index) => (
                        <CartItem key={index} item={cartItem} />
                    ))}
                </ul>
            ) : (
                <div className={styles.browseMenuLinkContainer}>
                    <BrowseMenuLink />
                </div>
            )}
        </Container>
    );
}

function BrowseMenuLink() {
    return (
        <Link to="/menus" className={styles.browseMenuLink}>
            Browse our menus
        </Link>
    );
}