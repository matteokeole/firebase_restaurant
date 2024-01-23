import {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import TextInput from "/src/components/Form/Input/TextInput";
import styles from "/src/components/Form/LoginForm/index.module.scss";
import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function LoginForm() {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthenticationContext);
    const inputs = useRef([]);
    const [emailError, setEmailError] = useState(null);

    const registerInput = input => {
        if (inputs.current.includes(input)) {
            return;
        }

        inputs.current.push(input);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setEmailError(null);

        const email = inputs.current[0].value;
        const password = inputs.current[1].value;

        try {
            await signIn(email, password);

            navigate("/administration");
        } catch {
            setEmailError("Invalid email or password.");
        }
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <TextInput
                reference={registerInput}
                type="email"
                placeholder="Email"
                required={true}
                error={emailError}
            />

            <TextInput
                reference={registerInput}
                type="password"
                placeholder="Password"
                required={true}
                error={null}
            />

            <div className={styles.loginForm__footer}>
                <input type="submit" value="Log in" className={styles.loginForm__footer__submit} />
            </div>
        </form>
    );
}