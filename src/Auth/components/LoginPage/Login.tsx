import React, { memo, lazy } from "react";
import { useContext } from "react";

// import InputField from "../../../Common/components/InputField";
import {
	newToNxtAssessText,
	NxtAssessImg,
	nxtText,
	assessText,
	loginBtnText,
	registerRoute,
} from "../../../Common/constants";
import Loader from "../../../Common/components/Loader";
import NxtAssessLogo from "../../../Common/components/NxtAssessLogo";
import { ObjContext } from "../../../Common/context";

import { InputFieldPropsTypes } from "../../stores/Types/loginTypes";

import {
	ErrorText,
	AlreadyHaveAccText,
	LinkComponent,
	RegisterPageContainer,
	RegisterPageForm,
	RegisterPageMainContainer,
	SignUpBtn,
} from "../RegisterPage/styledComponents";

const InputField = lazy(() => import("../../../Common/components/InputField"));

export const LoginPage = memo((props: InputFieldPropsTypes): JSX.Element => {
	const {
		onSubmitLoginForm,
		usernameProps,
		passwordProps,
		errorMsg,
		apiStatus,
	} = props;

	const { isLightMode } = useContext(ObjContext);

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		onSubmitLoginForm();
	};

	const renderLoader = (): JSX.Element => {
		return (
			<Loader
				color="#d8dff2"
				secondaryColor="#ffffff"
				height={30}
				width={30}
			/>
		);
	};

	const renderLoginPageForm = (): JSX.Element => {
		return (
			<RegisterPageForm onSubmit={onSubmitForm}>
				<InputField requiredProps={usernameProps} />
				<InputField requiredProps={passwordProps} />
				{errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
				<SignUpBtn type="submit">
					{apiStatus === "LOADING" ? renderLoader() : loginBtnText}
				</SignUpBtn>
				<AlreadyHaveAccText>
					{newToNxtAssessText} -
					<LinkComponent to={registerRoute}>
						{" "}
						Click here
					</LinkComponent>
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
});
