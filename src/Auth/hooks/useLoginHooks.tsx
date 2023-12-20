import { useContext, createContext, ReactNode } from "react";

import { LoginService } from "../services/LoginService/index.api";
import { LoginStore } from "../stores/LoginStore/LoginStore";

const loginServiceInstance = new LoginService();

const loginStoreInstance = new LoginStore(loginServiceInstance);

const LoginContext = createContext(loginStoreInstance);

export const LoginHookContext = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return (
		<LoginContext.Provider value={loginStoreInstance}>
			{children}
		</LoginContext.Provider>
	);
};

export const useLoginHook = () => useContext(LoginContext);
