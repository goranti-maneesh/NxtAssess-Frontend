

import React from 'react'

import RegisterPage from '../components/RegisterPage/index.tsx'
import {InputLabelProps} from '../stores/types'

import {RegisterPageRouteContainer} from './styledComponents.js'

export const RegisterPageRoute = (): JSX.Element => {

    const onClickSignupForm = (): void => {}

    const onchangeUsername = (event: React.FormEvent<HTMLInputElement>): void => {}

    const onchangeName = (event: React.FormEvent<HTMLInputElement>): void => {}

    const onchangePassword = (event: React.FormEvent<HTMLInputElement>): void => {}

    const onchangeConfirmPassword = (event: React.FormEvent<HTMLInputElement>): void => {}

    const usernameProps: InputLabelProps = {
        labelText: "USERNAME",
        id: "username",
        placeholder: "Username",
        onChangeMethod: onchangeUsername,
        value: "",
        type: "text",
    }

    const nameProps: InputLabelProps = {
        labelText: "NAME",
        id: "name",
        placeholder: "Name",
        onChangeMethod: onchangeName,
        value: "",
        type: "text",
    };

    const passwordProps: InputLabelProps = {
        labelText: "PASSWORD",
        id: "password",
        placeholder: "Password",
        onChangeMethod: onchangePassword,
        value: "",
        type: "password",
    };

    const confirmPasswordProps: InputLabelProps = {
        labelText: "CONFIRM PASSWORD",
        id: "confirmPassword",
        placeholder: "Confirm password",
        onChangeMethod: onchangeConfirmPassword,
        value: "",
        type: "password",
    };
    
    return(
        <RegisterPageRouteContainer>
            <RegisterPage onClickSignupForm={onClickSignupForm} usernameProps={usernameProps} nameProps={nameProps} passwordProps={passwordProps} confirmPasswordProps={confirmPasswordProps}/>
        </RegisterPageRouteContainer>
    )

}