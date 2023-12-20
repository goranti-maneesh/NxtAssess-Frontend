import { UserDetailsTypes } from "../../stores/Types/loginTypes";

import { LoginServiceType } from "./index";

export class LoginService implements LoginServiceType {
	fetchLoginAPI = async (userDetails: UserDetailsTypes) => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userDetails),
		};

		const response = await fetch(
			"https://user-access.onrender.com/login",
			options,
		);

		const data = await response.json();

		return {
			responseStatus: response.ok,
			...data,
		};
	};
}
