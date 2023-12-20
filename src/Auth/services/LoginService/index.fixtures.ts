import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import {
	UserDetailsTypes,
	LoginSuccessResTypes,
} from "../../stores/Types/loginTypes";
import loginFixturesData from "../../fixtures/getLoginResponse.json";

import { LoginServiceType } from "./index";

export class LoginService implements LoginServiceType {
	fetchLoginAPI = (
		userDetails: UserDetailsTypes,
	): Promise<LoginSuccessResTypes> => {
		return resolveWithTimeout(loginFixturesData);
	};
}
