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
`;

export const AssessmentCompleteImg = styled.img`
	${tw`w-485px h-364px mb-6`}
`;

export const CongratsText = styled.p`
	${tw`text-PickledBluewood text-fs24_lh32 font-medium`}
`;

export const TimeTakenTextAndTime = styled.p`
	${tw`text-PickledBluewood text-fs18_lh24 flex items-center mt-6`}
`;

export const TimeTaken = styled.span`
	${tw`text-ChathamsBlue text-fs24_lh32 ml-3`}
`;

export const YourScoreText = styled.p`
	${tw`mt-6 mb-8 text-ChathamsBlue text-fs24_lh32 font-medium flex items-center`}
`;

export const ScoreText = styled.span`
	${tw`text-CongressBlue font-bold text-fs48_lh48 ml-4`}
`;

export const ReattemptBtn = styled.button`
	${tw`bg-ChathamsBlue rounded-4px pr-8 pl-8 pt-2 pb-2 text-white outline-none text-fs16_lh28`}
`;

export const AssessmentTimeUpImg = styled.img`
	${tw`w-604px h-386px`}
`;

export const TimeUpText = styled.h1`
	${tw`text-PickledBluewood font-medium text-fs36_lh44 mt-8 mb-8`}
`;

export const DidNotCompleteInTimeText = styled.p`
	${tw`text-SlateGray text-fs16_lh24`}
`;

// export const ResultPage = styled.div``
