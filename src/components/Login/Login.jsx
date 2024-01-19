import {useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";

import AuthenticationContext from "/src/contexts/AuthenticationContext";

export default function Login() {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthenticationContext);
    const inputs = useRef([]);

    const registerInput = input => {
        if (inputs.current.includes(input)) {
            return;
        }

        inputs.current.push(input);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const email = inputs.current[0].value;
        const password = inputs.current[1].value;

        try {
            await signIn(email, password);

            navigate("/administration");
        } catch {
            console.error("Invalid credentials.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    ref={registerInput}
                    type="email"
                    placeholder="Email *"
                    required
                />
            </label>

            <label>
                <input
                    ref={registerInput}
                    type="password"
                    placeholder="Password *"
                    required
                />
            </label>

            <input type="submit" value="Log in" />
        </form>
    );
}