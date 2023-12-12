import {
	RegisterAPIReqObj,
	RegisterAPISuccessRes,
	RegisterAPIFailureRes,
} from "../../stores/types";

export interface RegisterServiceType {
	fetchRegisterAPI: (
		userDetails: RegisterAPIReqObj,
	) => Promise<RegisterAPISuccessRes | RegisterAPIFailureRes>;
}
