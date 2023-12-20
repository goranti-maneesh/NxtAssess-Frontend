import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
	ReattemptBtn,
	AssessmentTimeUpImg,
	TimeUpText,
	DidNotCompleteInTimeText,
} from "./styledComponents";

export const Result = () => {
	const mcqQuestionsHook = useMcqQuestionsHook();

	const navigate = useNavigate();

	const {
		score,
		timerText,
		wholeTimerSecs,
		reattemptAssessment,
		noOfAnsweredQuestions,
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
				<ReattemptBtn type="button" onClick={onClcikReattemptBtn}>
					{reattemptText}
				</ReattemptBtn>
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
				<ReattemptBtn type="button" onClick={onClcikReattemptBtn}>
					{reattemptText}
				</ReattemptBtn>
			</ResultPageContainer>
		);
	};

	return (
		<WrapperComponent>
			<ResultPage>
				<Header />
				<ResultPageMainContainer>
					{wholeTimerSecs !== 0
						? renderAssessmentCompletePage()
						: renderTimeUpAssessmentPage()}
				</ResultPageMainContainer>
			</ResultPage>
		</WrapperComponent>
	);
};
