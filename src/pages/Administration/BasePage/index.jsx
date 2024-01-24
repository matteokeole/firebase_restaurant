import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";

import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function BasePage() {
	const {user} = useContext(AuthenticationContext);

	if (!user) {
		return (
			<Navigate to="/administration/login" />
		);
	}

	return (
		<Outlet />
	);
}