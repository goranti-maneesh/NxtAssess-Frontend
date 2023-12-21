export interface RegisterAPISuccessRes {
	status: number;
	message: string;
	responseStatus: boolean;
}

export interface RegisterAPIFailureRes {
	status: number;
	error_msg: string;
	responseStatus: boolean;
}

export interface RegisterAPIReqObj {
	username: string;
	name: string;
	password: string;
	confirm_password: string;
}

export interface RegisterUserDetailsTypes {
	username: string;
	name: string;
	password: string;
	confirmPassword: string;
}

export interface InputLabelProps {
	labelText: string;
	id: string;
	placeholder: string;
	onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
	value: string;
	type: string;
}

export interface RegisterPageProps {
	onClickSignupForm: () => void;
	usernameProps: InputLabelProps;
	nameProps: InputLabelProps;
	passwordProps: InputLabelProps;
	confirmPasswordProps: InputLabelProps;
	errorMsg: string;
	apiStatus: string;
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
	requiredProps: InputPropsTypes;
}
