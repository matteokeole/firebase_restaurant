import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {createContext, useEffect, useState} from "react";

import {auth} from "/firebase.config";

const AuthenticationContext = createContext(null);

export default AuthenticationContext;

/**
 * @param {React.ReactNode} children
 */
export function AuthenticationContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signIn = (email, password) => new Promise((resolve, reject) => signInWithEmailAndPassword(auth, email, password)
        .then(resolve)
        .catch(reject),
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthenticationContext.Provider value={{user, signIn}}>
            {!isLoading && children}
        </AuthenticationContext.Provider>
    );
}