import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

import {
	timeLeftText,
	answeredQuestionsText,
	unansweredQuestionsText,
	questionsText,
	submitTestText,
} from "../../../Common/constants";

import { useMcqQuestionsHook } from "../../hooks/useMcqQuestionsHooks";

import {
	MCQDetailsContainer,
	TimerContainer,
	TimeLeftText,
	Timer,
	McqQuestionDetails,
	NoOfAnsweredUnansweredQuestions,
	NoOfQuestions,
	AnsweredQuestionsCount,
	UnansweredQuestionsCount,
	AnsweredAndUnansweredQuestionText,
	HrLine,
	QuestionNumsSection,
	QuestionNumsText,
	QuestionNumsUlElement,
	EachNumberLiElement,
	EachNumberBtn,
	SubmitTestBtn,
} from "./styledComponents";

export const MCQDetails = observer((): JSX.Element => {
	const mcqQuestionsHook = useMcqQuestionsHook();

	const navigate = useNavigate();

	const {
		questionNumsArray,
		timerText,
		APIResponseData,
		noOfAnsweredQuestions,
		noOfUnansweredQuestions,
		selectQuestion,
		index,
		completeAssessment,
	} = mcqQuestionsHook;

	const submitTest = (): void => {
		completeAssessment();
	};

	const renderQuestionNumbers = (): JSX.Element[] => {
		return questionNumsArray.map((eachQuestionNum) => (
			<EachNumberLiElement key={eachQuestionNum.id}>
				<EachNumberBtn
					type="button"
					onClick={() => selectQuestion(eachQuestionNum.value)}
					isAnswered={eachQuestionNum.isAnswered}
					disabled={eachQuestionNum.isAnswered}
					isExistingQuestion={index === eachQuestionNum.id}>
					{eachQuestionNum.value}
				</EachNumberBtn>
			</EachNumberLiElement>
		));
	};

	return (
		<MCQDetailsContainer>
			<TimerContainer>
				<TimeLeftText>{timeLeftText}</TimeLeftText>
				<Timer>{timerText}</Timer>
			</TimerContainer>
			<McqQuestionDetails>
				<NoOfAnsweredUnansweredQuestions>
					<NoOfQuestions>
						<AnsweredQuestionsCount>{`${noOfAnsweredQuestions} `}</AnsweredQuestionsCount>
						<AnsweredAndUnansweredQuestionText>
							{answeredQuestionsText}
						</AnsweredAndUnansweredQuestionText>
					</NoOfQuestions>
					<NoOfQuestions>
						<UnansweredQuestionsCount>{`${noOfUnansweredQuestions} `}</UnansweredQuestionsCount>
						<AnsweredAndUnansweredQuestionText>
							{unansweredQuestionsText}
						</AnsweredAndUnansweredQuestionText>
					</NoOfQuestions>
				</NoOfAnsweredUnansweredQuestions>
				<HrLine />
				<QuestionNumsSection>
					<QuestionNumsText>{`${questionsText} (${APIResponseData.total})`}</QuestionNumsText>
					<QuestionNumsUlElement>
						{renderQuestionNumbers()}
					</QuestionNumsUlElement>
				</QuestionNumsSection>
				<SubmitTestBtn
					type="button"
					onClick={() => completeAssessment()}>
					{submitTestText}
				</SubmitTestBtn>
			</McqQuestionDetails>
		</MCQDetailsContainer>
	);
});
