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

	const { score, timerText, wholeTimerSecs } = mcqQuestionsHook;

	const renderAssessmentCompletePage = () => {
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
				<ReattemptBtn>{reattemptText}</ReattemptBtn>
			</ResultPageContainer>
		);
	};

	const renderTimeUpAssessmentPage = () => {
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
				<ReattemptBtn>{reattemptText}</ReattemptBtn>
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
