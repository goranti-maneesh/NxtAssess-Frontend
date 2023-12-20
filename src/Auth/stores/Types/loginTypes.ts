export interface LoginSuccessResTypes {
	jwt_token: string;
	responseStatus: boolean;
}

export interface LoginFailureTypes {
	error_msg: string;
	status_code: number;
	responseStatus: boolean;
}

export interface InputPropsTypes {
	type: string;
	onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
	labelText: string;
	id: string;
	placeholder: string;
	value: string;
}

export interface InputFieldPropsTypes {
	onSubmitLoginForm: () => void;
	usernameProps: InputPropsTypes;
	passwordProps: InputPropsTypes;
	errorMsg: string;
	constraint: string;
}

export interface UserDetailsTypes {
	username: string;
	password: string;
}
