import {
    errorViewHeading,
	errorViewDescription,
	retryBtnText,
} from "../../constants";

import WrapperComponent from "../WrapperComponent";

import {
	ErrorViewContainer,
	ErrorHeading,
	ErrorDescription,
	RetryButton,
} from "./styledComponents";

export const ErrorView = (props: { fetchMethod: () => Promise<void> }) => {
	return (
		<WrapperComponent>
			<ErrorViewContainer>
				<ErrorHeading>{errorViewHeading}</ErrorHeading>
				<ErrorDescription>{errorViewDescription}</ErrorDescription>
				<RetryButton type="button" onClick={props.fetchMethod}>
					{retryBtnText}
				</RetryButton>
			</ErrorViewContainer>
		</WrapperComponent>
	);
};
