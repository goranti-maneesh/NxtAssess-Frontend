import tw from "twin.macro";
import styled from "styled-components";

export const MCQDetailsContainer = styled.div`
	${tw`h-full `}
`;

export const TimerContainer = styled.div`
	${tw`bg-EastBay rounded-2px pl-6 pr-6 pt-3 pb-3 flex justify-between items-center h-53px mb-2`}

	@media(max-width: 768px) {
		${tw`h-45px p-3 mb-3`}
	}
`;

export const TimeLeftText = styled.p`
	${tw`text-CatskillWhite text-fs18_lh30 font-normal`}

	@media(max-width: 768px) {
		${tw`text-fs16_lh24`}
	}
`;

export const Timer = styled.p`
	${tw`text-CatskillWhite font-medium text-fs24_lh32`}

	@media(max-width: 768px) {
		${tw`text-fs18_lh20`}
	}
`;

export const McqQuestionDetails = styled.div`
	${tw`h-92per bg-white shadow-assessmentPage flex flex-col`}
`;

export const NoOfAnsweredUnansweredQuestions = styled.div`
	${tw`pt-6 pb-2 pl-4 pr-4 flex justify-between flex-wrap`}
`;

export const NoOfQuestions = styled.div`
	${tw`flex items-center mb-4`}
`;

export const AnsweredQuestionsCount = styled.span`
	${tw`w-34px h-34px bg-Deluge block rounded-50per text-fs16_lh24 text-CatskillWhite flex items-center justify-center`}

	@media(max-width: 768px) {
		${tw`w-32px h-32px`}
	}
`;

export const UnansweredQuestionsCount = styled.span`
	${tw`w-34px h-34px block border border-Geyser border-solid rounded-50per text-fs16_lh24 text-SlateGray flex items-center justify-center`}

	@media(max-width: 768px) {
		${tw`w-32px h-32px`}
	}
`;

export const AnsweredAndUnansweredQuestionText = styled.p`
	${tw`ml-2 text-fs14_lh20 text-Bismark`}
`;

export const HrLine = styled.hr``;

export const QuestionNumsSection = styled.div`
	${tw`pt-6 pl-4 pr-4`}
`;

export const QuestionNumsText = styled.h1`
	${tw`text-ChathamsBlue text-fs18_lh30 font-medium mb-4`}
`;

export const QuestionNumsUlElement = styled.ul`
	${tw`flex flex-wrap`}
`;

export const EachNumberLiElement = styled.li`
	${tw`mr-3 mb-4`}
`;

export const EachNumberBtn = styled.button`
	${tw`border border-solid border-CatskillWhite2 bg-Selago outline-none cursor-pointer rounded-2px text-SlateGray text-fs14_lh20 w-32px h-32px flex items-center justify-center`}

	${(props) =>
		props.isAnswered &&
		tw`border-Deluge bg-answeredQueNoBg cursor-not-allowed pointer-events-none`}
    
    ${(props) => props.isExistingQuestion && tw`border-Malibu bg-Zumthor`}
`;

export const SubmitTestBtn = styled.button`
	${tw`mt-auto mb-12 border border-solid border-ChathamsBlue outline-none rounded-4px text-fs16_lh24 text-ChathamsBlue mr-4 ml-4 h-12`}
`;
