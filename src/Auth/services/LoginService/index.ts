import {
	UserDetailsTypes,
	LoginSuccessResTypes,
	LoginFailureTypes,
} from "../../stores/Types/loginTypes";

export interface LoginServiceType {
	fetchLoginAPI: (
		requestObj: UserDetailsTypes,
	) => Promise<LoginSuccessResTypes | LoginFailureTypes>;
}
