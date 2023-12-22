import {
	errorViewHeading,
	errorViewDescription,
	retryBtnText,
} from "../../constants";

import {
	ErrorViewContainer,
	ErrorHeading,
	ErrorDescription,
	RetryButton,
} from "./styledComponents";

export const ErrorView = (props: { fetchMethod: () => Promise<void> }) => {
	return (
		<ErrorViewContainer>
			<ErrorHeading>{errorViewHeading}</ErrorHeading>
			<ErrorDescription>{errorViewDescription}</ErrorDescription>
			<RetryButton type="button" onClick={props.fetchMethod}>
				{retryBtnText}
			</RetryButton>
		</ErrorViewContainer>
	);
};
