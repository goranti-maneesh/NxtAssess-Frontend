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
    confirmPasswordProps: InputLabelProps
}