import tw from "twin.macro";
import styled from "styled-components";

export const ErrorViewContainer = styled.div`
	${tw`text-center h-90vh flex flex-col justify-center items-center`}
`;

export const ErrorHeading = styled.h1`
	${tw`text-fs36_lh44 font-medium mb-4 text-PickledBluewood`}

	@media(max-width: 768px) {
		${tw`text-fs16_lh24 mb-2`}
	}
`;

export const ErrorDescription = styled.p`
	${tw`text-fs16_lh24 font-medium mb-8 text-SlateGray`}

	@media(max-width: 768px) {
		${tw`text-fs14_lh24 mb-6`}
	}
`;

export const RetryButton = styled.button`
	${tw`bg-Astronaut rounded-4px outline-none text-white font-bold text-fs12_lh16 pt-2 pb-2 pl-8 pr-8`}
`;
