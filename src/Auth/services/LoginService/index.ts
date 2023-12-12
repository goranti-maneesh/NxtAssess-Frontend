import {
	UserDetailsTypes,
	LoginSuccessResTypes,
	LoginFailureTypes,
} from "../../stores/types";

export interface LoginServiceType {
	fetchLoginAPI: (
		requestObj: UserDetailsTypes,
	) => Promise<LoginSuccessResTypes | LoginFailureTypes>;
}
