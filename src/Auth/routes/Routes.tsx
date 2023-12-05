import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { RegisterPageRouteContainer } from "../../Register/routes/styledComponents";
import {getJwtToken} from '../../Common/utils/StorageUtils'

import LoginPage from "../components/LoginPage";
import { useLoginHook } from "../hooks/useLoginHooks";

export const LoginPageRoute = observer((): JSX.Element => {

    const loginHook = useLoginHook();

    const navigate = useNavigate()

    const {constraint, username, password, errorMsg, fetchLoginApi, responseStatus} = loginHook

    const onSubmitLoginForm = () => {
        if(username === "" || password === ""){

            const {setErrorMsg} = loginHook

            setErrorMsg("Enter valid inputs")
        }
        else{
            fetchLoginApi()
        }
    };

    const onChangeUsername = (event: React.FormEvent<HTMLInputElement>): void => {
        
        const {setUsername} = loginHook

        setUsername(event.currentTarget.value)
    };

    const onChangePassword = (event: React.FormEvent<HTMLInputElement>): void => {

        const {setPassword} = loginHook

        setPassword(event.currentTarget.value)
    };

    useEffect(() => {
        if(responseStatus){
            navigate('/', {replace: true})
        }
    }, [responseStatus])

    useEffect(() => {
        if(getJwtToken() !== null){
            navigate('/', {replace: true})
        }
    }, []);

    const usernameProps = {
        type: "text",
        value: username,
        onChangeMethod: onChangeUsername,
        placeholder: "Username",
        id: "username-login",
        labelText: "USERNAME",
    };

    const passwordProps = {
        type: "password",
        value: password,
        onChangeMethod: onChangePassword,
        placeholder: "Password",
        id: "password-login",
        labelText: "PASSWORD",
    };

    return (
        <RegisterPageRouteContainer>
            <LoginPage
                onSubmitLoginForm={onSubmitLoginForm}
                usernameProps={usernameProps}
                passwordProps={passwordProps}
                constraint={constraint}
                errorMsg={errorMsg}
            />
        </RegisterPageRouteContainer>
    );
});
