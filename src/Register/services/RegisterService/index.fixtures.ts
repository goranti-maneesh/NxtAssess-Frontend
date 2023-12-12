import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import { RegisterAPIReqObj, RegisterAPISuccessRes } from "../../stores/types";
import registerFixtureResponse from "../../fixtures/getRegisterRegister.json";

import { RegisterServiceType } from "./index";

export class RegisterService implements RegisterServiceType {
	fetchRegisterAPI = (
		userDetails: RegisterAPIReqObj,
	): Promise<RegisterAPISuccessRes> => {
		return resolveWithTimeout(registerFixtureResponse);
	};
}
