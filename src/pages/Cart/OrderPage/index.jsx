import {useContext} from "react";

import Container from "/src/components/Container";
import OrderForm from "/src/components/Form/OrderForm";
import CartContext from "/src/contexts/CartContext";
import styles from "/src/pages/Cart/OrderPage/index.module.scss";
import NotFoundPage from "/src/pages/NotFoundPage";

export default function OrderPage() {
	const {cartItems} = useContext(CartContext);

	if (!cartItems.length) {
		return (
			<NotFoundPage />
		);
	}

	return (
		<Container>
			<h1>
				Fill in your details
			</h1>

			<div className={styles.formContainer}>
				<OrderForm />
			</div>
		</Container>
	);
}