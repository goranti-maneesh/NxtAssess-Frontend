import tw from "twin.macro";
import styled from "styled-components";

export const HomeMainContainer = styled.div``;

export const HomeContainer = styled.div`
	${tw`h-90vh flex items-center justify-between pl-96px pr-96px`}

	@media (max-width: 768px) {
		${tw`flex-col pt-6 pl-6 pr-6 pb-12`}
	}
`;

export const InstructionsSection = styled.div`
	${tw`w-631px h-566px rounded-8px shadow-homePage p-12`}

	@media(max-width: 1200px) {
		${tw`h-70vh`}
	}

	@media (max-width: 992px){
		${tw`h-50vh`}
	}

	@media (max-width: 768px) {
		${tw`order-1 shadow-none w-full h-full`}
	}
`;

export const InstructionsHeading = styled.h1`
	${tw`text-ChathamsBlue text-fs32_lh24 font-bold mb-8`}

	@media (max-width: 768px) {
		${tw`text-fs20_lh32 mb-4`}
	}
`;

export const InstructionPoint = styled.div`
	${tw`text-fs24_lh24 text-Bismark mb-6 flex`}

	@media (max-width: 992px) {
		${tw`text-fs14_lh20 mb-3`}
	}
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

	@media (max-width: 768px) {
		${tw`mt-5 text-fs12_lh16`}
	}
`;

export const HomePageAssessmentImg = styled.img`
	${tw`w-568px ml-49px`}

	@media (max-width: 1200px) {
		${tw`w-410px`}
	}

	@media (max-width: 768px) {
		${tw`order-none w-310px ml-0 mb-6`}
	}
`;

export const Instructions = styled.div``;
