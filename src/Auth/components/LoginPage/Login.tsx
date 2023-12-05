import React from 'react'

import InputField from '../../../Common/InputField'
import { newToNxtAssessText, NxtAssessImg, nxtText, assessText, loginBtnText } from '../../../Common/constants'
import Loader from '../../../Common/Loader'
import { ErrorText, AlreadyHaveAccText, LinkComponent, NxtAssessLogo, NxtAssessLogoContainer, NxtAssessText, NxtText, RegisterPageContainer, RegisterPageForm, RegisterPageMainContainer, SignUpBtn } from '../../../Register/components/RegisterPage/styledComponents'

import { inputFieldPropsTypes } from '../../stores/types'

export const LoginPage = (props: inputFieldPropsTypes) => {

    const {onSubmitLoginForm, usernameProps, passwordProps, errorMsg, constraint} = props

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        onSubmitLoginForm()
    }

    const LoaderComponent = (): JSX.Element => {
        return(
            <Loader color="#d8dff2" secondaryColor="#ffffff" height={30} width={30}/>
        )
    }


    const renderLoginPageForm = () => {
        return(
            <RegisterPageForm onSubmit={onSubmitForm}>
                <InputField requiredProps={usernameProps}/>
                <InputField requiredProps={passwordProps}/>
                {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
                <SignUpBtn type="submit">{constraint === 'LOADING' ? <LoaderComponent/> : loginBtnText}</SignUpBtn>
                <AlreadyHaveAccText>
                {newToNxtAssessText} - 
                <LinkComponent to="/register"> Click here</LinkComponent>
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
            {renderLoginPageForm()}
        </RegisterPageContainer>
    </RegisterPageMainContainer>
    )
}