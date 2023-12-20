import {
	RegisterAPIReqObj,
	RegisterAPISuccessRes,
	RegisterAPIFailureRes,
} from "../../stores/Types/registerTypes";

import { RegisterServiceType } from "./index";

export class RegisterService implements RegisterServiceType {
	fetchRegisterAPI = async (
		userDetails: RegisterAPIReqObj,
	): Promise<RegisterAPISuccessRes | RegisterAPIFailureRes> => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userDetails),
		};

		const ApiUrl = "https://user-access.onrender.com/register";

		const response = await fetch(ApiUrl, options);

		const data = await response.json();

		return {
			...data,
			responseStatus: response.ok,
		};
	};
}
