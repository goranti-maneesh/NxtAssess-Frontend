import tw from "twin.macro";
import styled from "styled-components";

export const ResultPage = styled.div`
	${tw``}
`;

export const ResultPageMainContainer = styled.div`
	${tw`bg-Selago rounded-4px h-90vh flex justify-center items-center`}
`;

export const ResultPageContainer = styled.div`
	${tw`w-80per max-w-818px shadow-loginPageCard pt-8 pb-12 flex flex-col items-center text-center bg-white`}

	@media(max-width: 768px) {
		${tw`pt-6 pb-6 pl-10 pr-10`}
	}
`;

export const AssessmentCompleteImg = styled.img`
	${tw`w-485px h-364px mb-6`}

	@media(max-width: 768px) {
		${tw`w-230px h-170px`}
	}
`;

export const CongratsText = styled.p`
	${tw`text-PickledBluewood text-fs24_lh32 font-medium`}

	@media(max-width: 768px) {
		${tw`text-fs16_lh24`}
	}
`;

export const TimeTakenTextAndTime = styled.p`
	${tw`text-PickledBluewood text-fs18_lh24 flex items-center mt-6`}

	@media(max-width: 768px) {
		${tw`text-fs14_lh24 mt-3`}
	}
`;

export const TimeTaken = styled.span`
	${tw`text-ChathamsBlue text-fs24_lh32 ml-3`}

	@media(max-width: 768px) {
		${tw`text-fs16_lh24 ml-2`}
	}
`;

export const YourScoreText = styled.p`
	${tw`mt-6 mb-8 text-ChathamsBlue text-fs24_lh32 font-medium flex items-center`}

	@media(max-width: 768px) {
		${tw`text-fs20_lh32 mt-3`}
	}
`;

export const ScoreText = styled.span`
	${tw`text-CongressBlue font-bold text-fs48_lh48 ml-4`}

	@media(max-width: 768px) {
		${tw`text-fs32_lh48`}
	}
`;

export const ReattemptBtn = styled.button`
	${tw`bg-ChathamsBlue rounded-4px pr-8 pl-8 pt-2 pb-2 text-white outline-none text-fs16_lh28`}

	@media(max-width: 768px) {
		${tw`text-fs12_lh16`}
	}
`;

export const AssessmentTimeUpImg = styled.img`
	${tw`w-604px h-386px`}

	@media(max-width: 768px) {
		${tw`w-264px h-170px`}
	}
`;

export const TimeUpText = styled.h1`
	${tw`text-PickledBluewood font-medium text-fs36_lh44 mt-8 mb-8`}

	@media(max-width: 768px) {
		${tw`mt-6 mb-2 text-fs18_lh24 font-bold`}
	}
`;

export const DidNotCompleteInTimeText = styled.p`
	${tw`text-SlateGray text-fs16_lh24`}

	@media(max-width: 768px) {
		${tw`text-fs14_lh20`}
	}
`;

// export const ResultPage = styled.div``
