import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import {
	assessmentCompleteText,
	timeTakentext,
	yourScoreText,
	reattemptText,
	timeUpText,
	didnotCompleteWithInTimeText,
	assessmentCompletedImg,
	assessmentTimeUpImg,
	homeRoute,
	assessmentRoute,
	reviewMistakesText,
} from "../../../Common/constants";

import { useMcqQuestionsHook } from "../../hooks/useMcqQuestionsHooks";

import {
	ResultPage,
	ResultPageMainContainer,
	ResultPageContainer,
	AssessmentCompleteImg,
	CongratsText,
	TimeTakenTextAndTime,
	TimeTaken,
	YourScoreText,
	ScoreText,
	ReattemptAndReviewBtn,
	ReattemptBtn,
	ReviewMistakesBtn,
	AssessmentTimeUpImg,
	TimeUpText,
	DidNotCompleteInTimeText,
	ReviewMistakesUlEle,
	ReviewMistakeLiEle,
	QuestionText,
	OptionsContainer,
	CorrectOption,
	SelectedOption,
} from "./styledComponents";

export const Result = observer((): JSX.Element => {
	const mcqQuestionsHook = useMcqQuestionsHook();

	const navigate = useNavigate();

	const {
		score,
		timerText,
		wholeTimerSecs,
		reattemptAssessment,
		noOfAnsweredQuestions,
		displayReviewMistakes,
		hideReviewMistakes,
		showReviewMistakes,
		incorrectAnsweredMCQs,
	} = mcqQuestionsHook;

	useEffect(() => {
		if (wholeTimerSecs === 600 && noOfAnsweredQuestions === 0) {
			navigate(homeRoute, { replace: true });
		}
	}, []);

	const onClcikReattemptBtn = (): void => {
		reattemptAssessment(navigate);
		navigate(assessmentRoute, { replace: true });
	};

	const renderAssessmentCompletePage = (): JSX.Element => {
		return (
			<ResultPageContainer>
				<AssessmentCompleteImg src={assessmentCompletedImg} />
				<CongratsText>{assessmentCompleteText}</CongratsText>
				<TimeTakenTextAndTime>
					{`${timeTakentext} `}
					<TimeTaken>{timerText}</TimeTaken>
				</TimeTakenTextAndTime>
				<YourScoreText>
					{`${yourScoreText} `}
					<ScoreText>{score}</ScoreText>
				</YourScoreText>
				<ReattemptAndReviewBtn>
					<ReattemptBtn type="button" onClick={onClcikReattemptBtn}>
						{reattemptText}
					</ReattemptBtn>
					<ReviewMistakesBtn
						type="button"
						onClick={displayReviewMistakes}>
						{reviewMistakesText}
					</ReviewMistakesBtn>
				</ReattemptAndReviewBtn>
			</ResultPageContainer>
		);
	};

	const renderTimeUpAssessmentPage = (): JSX.Element => {
		return (
			<ResultPageContainer>
				<AssessmentTimeUpImg src={assessmentTimeUpImg} />
				<TimeUpText>{timeUpText}</TimeUpText>
				<DidNotCompleteInTimeText>
					{didnotCompleteWithInTimeText}
				</DidNotCompleteInTimeText>
				<YourScoreText>
					{`${yourScoreText} `}
					<ScoreText>{score}</ScoreText>
				</YourScoreText>
				<ReattemptAndReviewBtn>
					<ReattemptBtn type="button" onClick={onClcikReattemptBtn}>
						{reattemptText}
					</ReattemptBtn>
					<ReviewMistakesBtn
						type="button"
						onClick={displayReviewMistakes}>
						{reviewMistakesText}
					</ReviewMistakesBtn>
				</ReattemptAndReviewBtn>
			</ResultPageContainer>
		);
	};

	const renderReviewMistakes = () => {
		console.log(incorrectAnsweredMCQs);
		return (
			<ResultPageContainer>
				<ReviewMistakesUlEle>
					{incorrectAnsweredMCQs.map((eachReview) => {
						const correctOption = eachReview.options.filter(
							(eachOption) => eachOption.isCorrect === "true",
						);
						const selectedOption = eachReview.options.filter(
							(eachOption) =>
								eachOption.id ===
								eachReview.userSelectedOptionId,
						);
						return (
							<ReviewMistakeLiEle>
								<QuestionText>
									{eachReview.questionText}
								</QuestionText>
								<OptionsContainer>
									<CorrectOption>
										{correctOption[0].text}
									</CorrectOption>
									<SelectedOption>
										{selectedOption[0].text}
									</SelectedOption>
								</OptionsContainer>
							</ReviewMistakeLiEle>
						);
					})}
				</ReviewMistakesUlEle>
			</ResultPageContainer>
		);
	};

	return (
		<WrapperComponent>
			<ResultPage>
				<Header />
				<ResultPageMainContainer>
					{showReviewMistakes
						? renderReviewMistakes()
						: wholeTimerSecs !== 0
						? renderAssessmentCompletePage()
						: renderTimeUpAssessmentPage()}
				</ResultPageMainContainer>
			</ResultPage>
		</WrapperComponent>
	);
});
