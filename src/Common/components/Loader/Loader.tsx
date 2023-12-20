import { Oval } from "react-loader-spinner";

import { loaderPropsTypes } from "../../types";

import { LoaderContainer } from "./styledComponents";

export const Loader = (props: loaderPropsTypes): JSX.Element => {
	const { color, height, width, secondaryColor } = props;
	return (
		<LoaderContainer>
			<Oval
				color={color}
				height={height}
				width={width}
				secondaryColor={secondaryColor}
			/>
		</LoaderContainer>
	);
};
