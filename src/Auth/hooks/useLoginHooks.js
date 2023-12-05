import { useContext, createContext } from "react";

import { LoginService } from "../services/LoginService/index.api";
import { LoginStore } from "../stores/LoginStore/index.ts";

const loginServiceInstance = new LoginService();

const loginStoreInstance = new LoginStore(loginServiceInstance);

const LoginContext = createContext(loginStoreInstance);

export const LoginHookContext = ({ children }) => {
    return (
        <LoginContext.Provider value={loginStoreInstance}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginHook = () => useContext(LoginContext);
