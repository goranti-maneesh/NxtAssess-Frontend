import tw from "twin.macro";
import styled from "styled-components";

export const AssessmentMainContainer = styled.div``;

export const AssessmentContainer = styled.div`
	${tw`p-8 bg-Selago h-90vh`}
`;

export const MCQQuestionSection = styled.div`
	${tw`bg-white shadow-assessmentPage p-12 h-full flex flex-col justify-between`}
`;

export const MCQDetailsSection = styled.div``;

export const QuestionText = styled.h1`
	${tw`text-ChathamsBlue text-fs20_lh30 font-medium`}
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
`;

export const QuestionAndOptions = styled.div``;

export const SelectContainer = styled.div`
	${tw`w-288px h-40px border-2 border-solid border-Astronaut rounded-4px`}
`;
