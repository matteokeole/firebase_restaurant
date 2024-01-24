import {useContext} from "react";
import {Navigate} from "react-router-dom";

import Container from "/src/components/Container";
import LoginForm from "/src/components/Form/LoginForm";
import AuthenticationContext from "/src/contexts/AuthenticationContext";
import styles from "/src/pages/LoginPage/index.module.scss";

export default function LoginPage() {
	const {user} = useContext(AuthenticationContext);

	if (!!user) {
		return (
			<Navigate to="/administration" />
		);
	}

	return (
		<Container>
			<h1>
				Login
			</h1>

			<div className={styles.formContainer}>
				<LoginForm />
			</div>
		</Container>
	);
}