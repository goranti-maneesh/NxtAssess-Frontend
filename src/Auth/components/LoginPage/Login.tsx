import React from "react";

import InputField from "../../../Common/components/InputField";
import {
	newToNxtAssessText,
	NxtAssessImg,
	nxtText,
	assessText,
	loginBtnText,
} from "../../../Common/constants";
import Loader from "../../../Common/components/Loader";
import NxtAssessLogo from "../../../Common/components/NxtAssessLogo";
import {
	ErrorText,
	AlreadyHaveAccText,
	LinkComponent,
	RegisterPageContainer,
	RegisterPageForm,
	RegisterPageMainContainer,
	SignUpBtn,
} from "../../../Register/components/RegisterPage/styledComponents";

import { InputFieldPropsTypes } from "../../stores/types";

export const LoginPage = (props: InputFieldPropsTypes) => {
	const {
		onSubmitLoginForm,
		usernameProps,
		passwordProps,
		errorMsg,
		constraint,
	} = props;

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		onSubmitLoginForm();
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

	const renderLoginPageForm = () => {
		return (
			<RegisterPageForm onSubmit={onSubmitForm}>
				<InputField requiredProps={usernameProps} />
				<InputField requiredProps={passwordProps} />
				{errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
				<SignUpBtn type="submit">
					{constraint === "LOADING" ? (
						<LoaderComponent />
					) : (
						loginBtnText
					)}
				</SignUpBtn>
				<AlreadyHaveAccText>
					{newToNxtAssessText} -
					<LinkComponent to="/register"> Click here</LinkComponent>
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
				{renderLoginPageForm()}
			</RegisterPageContainer>
		</RegisterPageMainContainer>
	);
};
