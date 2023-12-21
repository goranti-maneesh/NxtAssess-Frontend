import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { loginRoute, constraints } from "../../../Common/constants";
import ErrorView from "../../../Common/components/ErrorView";

import RegisterPage from "../../components/RegisterPage";
import { InputLabelProps } from "../../stores/Types/registerTypes";
import { useRegisterHook } from "../../hooks/useRegisterHooks";

import { RegisterPageRouteContainer } from "./styledComponents.js";

export const RegisterPageRoute = observer((): JSX.Element => {
	const registerHook = useRegisterHook();

	const navigation = useNavigate();

	const {
		username,
		password,
		name,
		confirmPassword,
		errorMsg,
		responseStatus,
		apiStatus,
		fetchRegisterAPI,
	} = registerHook;

	const onClickSignupForm = (): void => {
		const { setErrorMsg } = registerHook;

		if (
			username === "" ||
			name === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			setErrorMsg("Enter valid inputs");
		} else {
			fetchRegisterAPI();
		}
	};

	const onchangeUsername = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		const { setUsername } = registerHook;

		setUsername(event.currentTarget.value);
	};

	const onchangeName = (event: React.FormEvent<HTMLInputElement>): void => {
		const { setName } = registerHook;

		setName(event.currentTarget.value);
	};

	const onchangePassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		const { setPassword } = registerHook;

		setPassword(event.currentTarget.value);
	};

	const onchangeConfirmPassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		const { setConfirmPassword } = registerHook;

		setConfirmPassword(event.currentTarget.value);
	};

	const usernameProps: InputLabelProps = {
		labelText: "USERNAME",
		id: "username",
		placeholder: "Username",
		onChangeMethod: onchangeUsername,
		value: username,
		type: "text",
	};

	const nameProps: InputLabelProps = {
		labelText: "NAME",
		id: "name",
		placeholder: "Name",
		onChangeMethod: onchangeName,
		value: name,
		type: "text",
	};

	const passwordProps: InputLabelProps = {
		labelText: "PASSWORD",
		id: "password",
		placeholder: "Password",
		onChangeMethod: onchangePassword,
		value: password,
		type: "password",
	};

	const confirmPasswordProps: InputLabelProps = {
		labelText: "CONFIRM PASSWORD",
		id: "confirmPassword",
		placeholder: "Confirm password",
		onChangeMethod: onchangeConfirmPassword,
		value: confirmPassword,
		type: "password",
	};

	useEffect(() => {
		if (responseStatus) {
			navigation(loginRoute);
		}
	}, [responseStatus]);

	const renderRegisterPage = (): JSX.Element => (
		<RegisterPage
			onClickSignupForm={onClickSignupForm}
			usernameProps={usernameProps}
			nameProps={nameProps}
			passwordProps={passwordProps}
			confirmPasswordProps={confirmPasswordProps}
			errorMsg={errorMsg}
			apiStatus={apiStatus}
		/>
	);

	const renderFailureView = (): JSX.Element => (
		<ErrorView fetchMethod={fetchRegisterAPI} />
	);

	const renderAllViews = (): JSX.Element => {
		switch (apiStatus) {
			case constraints.failure:
				return renderFailureView();
			default:
				return renderRegisterPage();
		}
	};

	return (
		<RegisterPageRouteContainer>
			{renderAllViews()}
		</RegisterPageRouteContainer>
	);
});
