import tw from "twin.macro";
import styled from "styled-components";

export const AssessmentMainContainer = styled.div``;

export const AssessmentContainer = styled.div`
	${tw`p-8 bg-Selago h-90vh flex`}

	@media (max-width: 768px) {
		${tw`bg-white flex-col pt-4 pl-6 pr-6 pb-8 items-center h-full`}
	}
`;

export const MCQQuestionSection = styled.div`
	${tw`bg-white shadow-assessmentPage p-12 h-full max-h-837px flex flex-col justify-between mr-8 max-w-928px w-70per `}

	@media(max-width: 992px) {
		${tw`w-50per`}
	}

	@media (max-width: 768px) {
		${tw`w-312px pt-6 pl-4 pr-4 pb-12 order-1 m-0 mt-4`}
	}
`;

export const MCQDetailsSection = styled.div`
	${tw`max-w-416px h-full`}

	@media(max-width: 992px) {
		${tw`max-w-416px`}
	}

	@media (max-width: 768px) {
		${tw`order-none max-w-312px`}
	}
`;

export const QuestionText = styled.h1`
	${tw`text-ChathamsBlue text-fs20_lh30 font-medium`}

	@media(max-width: 992px) {
		${tw`text-fs16_lh24`}
	}
`;

export const HrLine = styled.hr`
	${tw`bg-DustyGray mt-6 mb-6`}
`;

export const OptionsUlElement = styled.ul`
	${tw`flex flex-wrap`}
`;

export const OptionLiElement = styled.li``;

export const OptionBtn = styled.button``;

export const NextQuestionBtn = styled.button`
	${tw`self-end bg-ChathamsBlue rounded-4px pr-4 pl-4 pt-2 pb-2 text-white outline-none mt-6 text-fs16_lh28`}

	@media(max-width: 768px) {
		${tw`text-fs12_lh16 mt-10`}
	}
`;

export const QuestionAndOptions = styled.div``;

export const SelectContainer = styled.div`
	${tw`w-288px h-40px border-2 border-solid border-Astronaut rounded-4px`}
`;
