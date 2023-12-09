import React from "react"

import {nxtText, assessText, signUpBtnText, alreadyHaveAccText, NxtAssessImg} from '../../../Common/constants/index.js'
import InputField from "../../../Common/components/InputField"
import Loader from "../../../Common/components/Loader"
import NxtAssessLogo from "../../../Common/components/NxtAssessLogo"

import {RegisterPageProps} from '../../stores/types'

import {RegisterPageMainContainer, RegisterPageContainer, NxtAssessLogoContainer,
    NxtAssessText, NxtText, RegisterPageForm, ErrorText, SignUpBtn,
    AlreadyHaveAccText, LinkComponent} from './styledComponents'

export const RegisterPage = (props: RegisterPageProps):JSX.Element => {

    const {onClickSignupForm, usernameProps, nameProps, passwordProps, confirmPasswordProps, errorMsg, constraint} = props

    const signupForm = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        onClickSignupForm()
    }

    const LoaderComponent = () => {
        return(
            <Loader color="#d8dff2" secondaryColor="#ffffff" height={30} width={30}/>
        )
    }

    const renderRegisterPageForm = () => {
        return(
            <RegisterPageForm onSubmit={signupForm}>
                <InputField requiredProps={usernameProps}/>
                <InputField requiredProps={nameProps}/>
                <InputField requiredProps={passwordProps}/>
                <InputField requiredProps={confirmPasswordProps}/>
                {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
                <SignUpBtn type="submit">{constraint === 'LOADING' ? <LoaderComponent/> : signUpBtnText}</SignUpBtn>
                <AlreadyHaveAccText>
                {alreadyHaveAccText} - 
                <LinkComponent to="/login"> Click here</LinkComponent>
                </AlreadyHaveAccText>
            </RegisterPageForm>
        )
    }

    return(
        <RegisterPageMainContainer>
            <RegisterPageContainer>
                <NxtAssessLogo nxtAssessImg={NxtAssessImg} textColor="Astronaut"/>
                {renderRegisterPageForm()}
            </RegisterPageContainer>
        </RegisterPageMainContainer>
    )
}