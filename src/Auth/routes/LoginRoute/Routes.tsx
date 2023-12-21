import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { constraints, homeRoute } from "../../../Common/constants";

import { getJwtToken } from "../../../Common/utils/StorageUtils";
import ErrorView from "../../../Common/components/ErrorView";

import LoginPage from "../../components/LoginPage";
import { useLoginHook } from "../../hooks/useLoginHooks";
import { InputPropsTypes } from "../../stores/Types/loginTypes";

import { RegisterPageRouteContainer } from "../RegisterRouter/styledComponents";

export const LoginPageRoute = observer((): JSX.Element => {
	const loginHook = useLoginHook();

	const navigate = useNavigate();

	const {
		apiStatus,
		username,
		password,
		errorMsg,
		fetchLoginApi,
		responseStatus,
	} = loginHook;

	const onSubmitLoginForm = async (): Promise<void> => {
		if (username === "" || password === "") {
			const { setErrorMsg } = loginHook;

			setErrorMsg("Enter valid inputs");
		} else {
			fetchLoginApi(navigate);
		}
	};

	const onChangeUsername = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		const { setUsername } = loginHook;

		setUsername(event.currentTarget.value);
	};

	const onChangePassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		const { setPassword } = loginHook;

		setPassword(event.currentTarget.value);
	};

	useEffect(() => {
		if (getJwtToken() !== null) {
			navigate(homeRoute);
		}
	}, []);

	const usernameProps: InputPropsTypes = {
		type: "text",
		value: username,
		onChangeMethod: onChangeUsername,
		placeholder: "Username",
		id: "username-login",
		labelText: "USERNAME",
	};

	const passwordProps: InputPropsTypes = {
		type: "password",
		value: password,
		onChangeMethod: onChangePassword,
		placeholder: "Password",
		id: "password-login",
		labelText: "PASSWORD",
	};

	const renderLoginPage = (): JSX.Element => (
		<LoginPage
			onSubmitLoginForm={onSubmitLoginForm}
			usernameProps={usernameProps}
			passwordProps={passwordProps}
			apiStatus={apiStatus}
			errorMsg={errorMsg}
		/>
	);

	const retryOnLoginAPI = async (): Promise<void> => {
		await fetchLoginApi(navigate);
	};

	const renderFailureView = (): JSX.Element => (
		<ErrorView fetchMethod={retryOnLoginAPI} />
	);

	const renderAllViews = (): JSX.Element => {
		switch (apiStatus) {
			case constraints.failure:
				return renderFailureView();
			default:
				return renderLoginPage();
		}
	};

	return (
		<RegisterPageRouteContainer>
			{renderAllViews()}
		</RegisterPageRouteContainer>
	);
});
