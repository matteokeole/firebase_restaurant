import {useContext} from "react";

import Article from "/src/components/Article";
import Container from "/src/components/Container";
import RecipeContext from "/src/contexts/RecipeContext";
import styles from "/src/pages/PresentationPage/index.module.scss";

export default function PresentationPage() {
    const {recipes} = useContext(RecipeContext);

    return (
        <Container>
            <h1>
                Presentation
            </h1>

            <section className={styles.presentation}>
                <Article>
                    <p>
                        Welcome to Firebase Restaurant, where the essence of diverse culinary traditions converges in a tasteful and relaxed setting. Positioned at the heart of the city, Firebase prides itself on presenting a menu that harmonizes global influences with locally-sourced, premium ingredients. The restaurant's contemporary ambiance strikes a perfect balance, creating an unassuming yet stylish backdrop suitable for a range of dining occasions. With a dedicated team committed to providing attentive service, Firebase Restaurant invites guests to savor a neutral and inclusive dining experience.<br /><br />
                        Whether you're seeking a casual meal or a special celebration, join us as we strive to offer a welcoming environment for all patrons to enjoy a delightful array of flavors. Explore our menu featuring culinary delights from around the world and indulge in the art of fine dining. Visit Firebase Restaurant and embark on a culinary journey like no other, where every dish is crafted with care and precision to ensure a memorable dining experience.<br /><br />
                        We look forward to welcoming you to Firebase Restaurant, where good food and a welcoming atmosphere come together to create a truly enjoyable dining experience.
                    </p>

                    <img src={recipes[0]?.image} alt={recipes[0]?.name} />
                </Article>

                <h2>
                    Serving you since 1998
                </h2>

                <Article>
                    <img src={recipes[1]?.image} alt={recipes[1]?.name} />

                    <p>
                        Welcome to Firebase Restaurant, where the essence of diverse culinary traditions converges in a tasteful and relaxed setting. Positioned at the heart of the city, Firebase prides itself on presenting a menu that harmonizes global influences with locally-sourced, premium ingredients. The restaurant's contemporary ambiance strikes a perfect balance, creating an unassuming yet stylish backdrop suitable for a range of dining occasions. With a dedicated team committed to providing attentive service, Firebase Restaurant invites guests to savor a neutral and inclusive dining experience.<br /><br />
                        Whether you're seeking a casual meal or a special celebration, join us as we strive to offer a welcoming environment for all patrons to enjoy a delightful array of flavors. Explore our menu featuring culinary delights from around the world and indulge in the art of fine dining. Visit Firebase Restaurant and embark on a culinary journey like no other, where every dish is crafted with care and precision to ensure a memorable dining experience.<br /><br />
                        We look forward to welcoming you to Firebase Restaurant, where good food and a welcoming atmosphere come together to create a truly enjoyable dining experience.
                    </p>
                </Article>

                <Article>
                    <p>
                        Welcome to Firebase Restaurant, where the essence of diverse culinary traditions converges in a tasteful and relaxed setting. Positioned at the heart of the city, Firebase prides itself on presenting a menu that harmonizes global influences with locally-sourced, premium ingredients. The restaurant's contemporary ambiance strikes a perfect balance, creating an unassuming yet stylish backdrop suitable for a range of dining occasions. With a dedicated team committed to providing attentive service, Firebase Restaurant invites guests to savor a neutral and inclusive dining experience.<br /><br />
                        Whether you're seeking a casual meal or a special celebration, join us as we strive to offer a welcoming environment for all patrons to enjoy a delightful array of flavors. Explore our menu featuring culinary delights from around the world and indulge in the art of fine dining. Visit Firebase Restaurant and embark on a culinary journey like no other, where every dish is crafted with care and precision to ensure a memorable dining experience.<br /><br />
                        We look forward to welcoming you to Firebase Restaurant, where good food and a welcoming atmosphere come together to create a truly enjoyable dining experience.
                    </p>

                    <img src={recipes[2]?.image} alt={recipes[2]?.name} />
                </Article>
            </section>
        </Container>
    );
}