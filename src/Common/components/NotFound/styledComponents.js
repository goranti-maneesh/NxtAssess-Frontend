import tw from "twin.macro";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
	${tw`text-center h-90vh flex flex-col justify-center items-center`}
`;

export const NotFoundHeading = styled.h1`
	${tw`text-fs36_lh44 font-medium mb-4 text-PickledBluewood`}

	@media(max-width: 768px) {
		${tw`text-fs16_lh24 mb-2`}
	}
`;

export const NotFoundDescription = styled.p`
	${tw`text-fs16_lh24 font-medium mb-8 text-SlateGray`}

	@media(max-width: 768px) {
		${tw`text-fs14_lh24 mb-6`}
	}
`;
