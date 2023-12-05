export interface loginSuccessResTypes{
    jwt_token: string,
    responseStatus: boolean,
}

export interface loginFailureTypes{
    error_msg: string,
    status_code: number,
    responseStatus: boolean,
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
    onSubmitLoginForm: () => void,
    usernameProps: inputPropsTypes,
    passwordProps: inputPropsTypes,
    errorMsg: string,
    constraint: string
}

export interface userDetailsTypes{
    username: string,
    password: string
}