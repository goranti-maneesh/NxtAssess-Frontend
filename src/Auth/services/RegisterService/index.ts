import {
	RegisterAPIReqObj,
	RegisterAPISuccessRes,
	RegisterAPIFailureRes,
} from "../../stores/Types/registerTypes";

export interface RegisterServiceType {
	fetchRegisterAPI: (
		userDetails: RegisterAPIReqObj,
	) => Promise<RegisterAPISuccessRes | RegisterAPIFailureRes>;
}
