import {Link} from "react-router-dom";

import Card from "/src/components/Card";
import Container from "/src/components/Container";
import styles from "/src/pages/Administration/HomePage/index.module.scss";

export default function HomePage() {
	return (
		<Container>
			<div className={styles.header}>
				<h1 className={styles.header__title}>
					Administration
				</h1>

				<div className={styles.header__toolbar}>
					<Link to="/administration/logout" className={styles.header__toolbar__logOutLink}>
						Log out
					</Link>
				</div>
			</div>

			<section className={styles.cards}>
				<Link to="/administration/recipes">
					<Card>
						Recipes
					</Card>
				</Link>

				<Link to="/administration/recipes/new">
					<Card>
						New recipe
					</Card>
				</Link>
			</section>
		</Container>
	);
}