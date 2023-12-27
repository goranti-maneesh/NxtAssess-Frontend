import { createContext } from "react";

export const ObjContext = createContext({
	isLightMode: true,
	onChangeScreenColorMode: () => {},
});
