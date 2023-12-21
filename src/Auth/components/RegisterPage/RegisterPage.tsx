import React from "react";

import {
	nxtText,
	assessText,
	signUpBtnText,
	alreadyHaveAccText,
	NxtAssessImg,
	loginRoute,
} from "../../../Common/constants";
import InputField from "../../../Common/components/InputField";
import Loader from "../../../Common/components/Loader";
import NxtAssessLogo from "../../../Common/components/NxtAssessLogo";

import { RegisterPageProps } from "../../stores/Types/registerTypes.js";

import {
	RegisterPageMainContainer,
	RegisterPageContainer,
	NxtAssessLogoContainer,
	NxtAssessText,
	NxtText,
	RegisterPageForm,
	ErrorText,
	SignUpBtn,
	AlreadyHaveAccText,
	LinkComponent,
} from "./styledComponents.js";

export const RegisterPage = (props: RegisterPageProps): JSX.Element => {
	const {
		onClickSignupForm,
		usernameProps,
		nameProps,
		passwordProps,
		confirmPasswordProps,
		errorMsg,
		apiStatus,
	} = props;

	const signupForm = (event: React.FormEvent<HTMLInputElement>): void => {
		event.preventDefault();
		onClickSignupForm();
	};

	const LoaderComponent = (): JSX.Element => {
		return (
			<Loader
				color="#d8dff2"
				secondaryColor="#ffffff"
				height={30}
				width={30}
			/>
		);
	};

	const renderRegisterPageForm = (): JSX.Element => {
		return (
			<RegisterPageForm onSubmit={signupForm}>
				<InputField requiredProps={usernameProps} />
				<InputField requiredProps={nameProps} />
				<InputField requiredProps={passwordProps} />
				<InputField requiredProps={confirmPasswordProps} />
				{errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
				<SignUpBtn type="submit">
					{apiStatus === "LOADING" ? (
						<LoaderComponent />
					) : (
						signUpBtnText
					)}
				</SignUpBtn>
				<AlreadyHaveAccText>
					{alreadyHaveAccText} -
					<LinkComponent to={loginRoute}> Click here</LinkComponent>
				</AlreadyHaveAccText>
			</RegisterPageForm>
		);
	};

	return (
		<RegisterPageMainContainer>
			<RegisterPageContainer>
				<NxtAssessLogo
					nxtAssessImg={NxtAssessImg}
					textColor="Astronaut"
				/>
				{renderRegisterPageForm()}
			</RegisterPageContainer>
		</RegisterPageMainContainer>
	);
};
