import Cookies from "js-cookie";

import { JWTtoken } from "../constants/index.js";

export const setJwtToken = (jwtToken: string): void => {
	Cookies.set(JWTtoken, jwtToken, { expires: 30 });
};

export const getJwtToken = (): string | null => {
	const cookie = Cookies.get(JWTtoken);

	if (cookie !== undefined) {
		return cookie;
	} else {
		return null;
	}
};

export const removeJwtToken = (): void => {
	Cookies.remove(JWTtoken);
};
