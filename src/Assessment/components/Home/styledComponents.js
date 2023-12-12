import tw from "twin.macro";
import styled from "styled-components";

export const HomeMainContainer = styled.div``;

export const HomeContainer = styled.div`
	${tw`h-90vh flex items-center justify-between pl-96px pr-96px`}
`;

export const InstructionsSection = styled.div`
	${tw`w-631px h-566px rounded-8px shadow-homePage p-12`}
`;

export const InstructionsHeading = styled.h1`
	${tw`text-ChathamsBlue text-fs32_lh24 font-bold mb-8`}
`;

export const InstructionPoint = styled.div`
	${tw`text-fs24_lh24 text-Bismark mb-6 flex`}
`;

export const InstructionPointNumber = styled.span`
	${tw`font-normal mr-2`}
`;

export const InstructionKeyAndValue = styled.p``;

export const InstructionPointKey = styled.span`
	${tw`font-medium`}
`;

export const InstructionPointValue = styled.span`
	${tw`font-normal`}
`;

export const StartAssessmentBtn = styled.button`
	${tw`bg-ChathamsBlue rounded-4px pr-4 pl-4 pt-2 pb-2 text-white outline-none mt-6 text-fs16_lh28`}
`;

export const HomePageAssessmentImg = styled.img`
	${tw`w-568px ml-49px`}
`;
