import tw from "twin.macro";
import styled from "styled-components";

export const NxtAssessLogoContainer = styled.div`
	${tw`flex flex-col items-center`}
`;

export const NxtAssessImg = styled.img`
	${tw`h-38px w-77px`}

	@media(max-width: 768px) {
		${tw`w-54px h-27px`}
	}
`;

export const NxtAssessText = styled.p`
	${tw`flex text-fs18_lh24 italic`}

	${(props) =>
		props.textColor === "white" ? tw`text-white` : tw`text-Astronaut`}

    @media(max-width: 768px) {
		${tw`text-fs14_lh20`}
	}
`;

export const NxtText = styled.span`
	${tw`font-bold mr-1`}
`;
