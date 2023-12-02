import React from "react"

import {nxtText, assessText, signUpBtnText, alreadyHaveAccText, NxtAssessImg} from '../../../Components/constants'

import {RegisterPageProps} from '../../stores/types.ts'

import InputField from "../InputField/index.tsx"

import {RegisterPageMainContainer, RegisterPageContainer, NxtAssessLogoContainer, NxtAssessLogo,
    NxtAssessText, NxtText, RegisterPageForm, ErrorText, SignUpBtn,
    AlreadyHaveAccText, LinkComponent} from './styledComponents'

export const RegisterPage = (props: RegisterPageProps):JSX.Element => {

    const {onClickSignupForm, usernameProps, nameProps, passwordProps, confirmPasswordProps} = props

    const renderRegisterPageForm = () => {
        return(
            <RegisterPageForm onSubmit={onClickSignupForm}>
                <InputField requiredProps={usernameProps}/>
                <InputField requiredProps={nameProps}/>
                <InputField requiredProps={passwordProps}/>
                <InputField requiredProps={confirmPasswordProps}/>
                {/* {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null} */}
                <SignUpBtn type="submit">{signUpBtnText}</SignUpBtn>
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
                <NxtAssessLogoContainer>
                    <NxtAssessLogo src={NxtAssessImg}/>
                    <NxtAssessText><NxtText>{`${nxtText} `}</NxtText>{assessText}</NxtAssessText>
                </NxtAssessLogoContainer>
                {renderRegisterPageForm()}
            </RegisterPageContainer>
        </RegisterPageMainContainer>
    )
}