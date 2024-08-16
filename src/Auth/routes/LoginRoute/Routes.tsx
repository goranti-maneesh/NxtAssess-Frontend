import React, { useEffect, useCallback, lazy, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { constraints, homeRoute } from "../../../Common/constants";

import { getJwtToken } from "../../../Common/utils/StorageUtils";
import ErrorView from "../../../Common/components/ErrorView";

// import LoginPage from "../../components/LoginPage";
import { useLoginHook } from "../../hooks/useLoginHooks";
import { InputPropsTypes } from "../../stores/Types/loginTypes";

import { RegisterPageRouteContainer } from "../RegisterRouter/styledComponents";

const LoginPage = lazy(() => import("../../components/LoginPage"));

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

	const onSubmitLoginForm = useCallback(async (): Promise<void> => {
		const { username, password } = loginHook;
		console.log(username, password, "submit");
		if (username === "" || password === "") {
			const { setErrorMsg } = loginHook;

			setErrorMsg("Enter valid inputs");
		} else {
			fetchLoginApi(navigate);
		}
	}, [responseStatus]);

	const onChangeUsername = useCallback(
		(event: React.FormEvent<HTMLInputElement>): void => {
			const { setUsername } = loginHook;

			setUsername(event.currentTarget.value);
			console.log(username, "username");
		},
		[username]
	);

	const onChangePassword = useCallback(
		(event: React.FormEvent<HTMLInputElement>): void => {
			const { setPassword } = loginHook;

			setPassword(event.currentTarget.value);
		},
		[password]
	);

	useEffect(() => {
		if (getJwtToken() !== null) {
			navigate(homeRoute);
		}
	}, []);

	const usernameProps: InputPropsTypes = useMemo(
		() => ({
			type: "text",
			value: username,
			onChangeMethod: onChangeUsername,
			placeholder: "Username",
			id: "username-login",
			labelText: "USERNAME",
		}),
		[username, onChangeUsername]
	);

	const passwordProps: InputPropsTypes = useMemo(
		() => ({
			type: "password",
			value: password,
			onChangeMethod: onChangePassword,
			placeholder: "Password",
			id: "password-login",
			labelText: "PASSWORD",
		}),
		[password, onChangePassword]
	);

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
