import { notFoundHeading, notFounDescription } from "../../constants";

import WrapperComponent from "../WrapperComponent";

import {
	NotFoundContainer,
	NotFoundHeading,
	NotFoundDescription,
} from "./styledComponents";

export const NotFound = (): JSX.Element => {
	return (
		<WrapperComponent>
			<NotFoundContainer>
				<NotFoundHeading>{notFoundHeading}</NotFoundHeading>
				<NotFoundDescription>{notFounDescription}</NotFoundDescription>
			</NotFoundContainer>
		</WrapperComponent>
	);
};
