export interface registerAPISuccessRes{
    status: number,
    message: string,
    responseStatus: boolean
}

export interface registerAPIFailureRes{
    status: number,
    error_msg: string,
    responseStatus: boolean
}

export interface registerAPIReqObj{
    username: string,
    name: string,
    password: string,
    confirm_password: string
}

export interface registerUserDetailsTypes{
    username: string,
    name: string,
    password: string,
    confirmPassword: string
}

export interface InputLabelProps{
    labelText: string,
    id: string,
    placeholder: string,
    onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    type: string,
}

export interface RegisterPageProps{
    onClickSignupForm: () => void,
    usernameProps: InputLabelProps,
    nameProps: InputLabelProps,
    passwordProps: InputLabelProps,
    confirmPasswordProps: InputLabelProps,
    errorMsg: string,
    constraint: string
}

export interface inputPropsTypes {
    type: string, 
    onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void, 
    labelText: string,
    id: string, 
    placeholder: string, 
    value: string
}

export interface inputFieldPropsTypes {
    requiredProps: inputPropsTypes
}