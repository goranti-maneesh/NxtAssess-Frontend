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
    doneText,
    nextText,
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
    ReviewMistakesContainer,
    ReviewMistakeEle,
    QuestionText,
    OptionsUlEle,
    EachOptionLiEle,
    EachOptionSpanEle,
    ScoresSection,
    NextAndDoneBtnsContainer,
    DoneAndNextButton,
    ResultPageReviewsContainer,
    WrongIcon,
    RightIcon,
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
        incorrectQuestionIndex,
        renderNextIncorrectQuestion,
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

    const onClickNextBtn = (): void => {
        renderNextIncorrectQuestion();
    };

    const onClickHideReviews = (): void => {
        hideReviewMistakes();
    };

    const renderReviewAndReattemptBtns = () => {
        return (
            <ReattemptAndReviewBtn>
                <ReattemptBtn type="button" onClick={onClcikReattemptBtn}>
                    {reattemptText}
                </ReattemptBtn>
                {incorrectAnsweredMCQs.length !== 0 ? (
                    <ReviewMistakesBtn
                        type="button"
                        onClick={displayReviewMistakes}
                    >
                        {reviewMistakesText}
                    </ReviewMistakesBtn>
                ) : null}
            </ReattemptAndReviewBtn>
        );
    };

    const renderScores = () => {
        return (
            <ScoresSection>
                <YourScoreText>
                    {`${yourScoreText} `}
                    <ScoreText>{score}</ScoreText>
                </YourScoreText>
            </ScoresSection>
        );
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
                {renderScores()}
                {renderReviewAndReattemptBtns()}
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
                {renderScores()}
                {renderReviewAndReattemptBtns()}
            </ResultPageContainer>
        );
    };

    const renderNextAndDoneBtns = () => {
        return (
            <NextAndDoneBtnsContainer>
                {incorrectAnsweredMCQs.length - 1 === incorrectQuestionIndex ? (
                    <DoneAndNextButton
                        type="buton"
                        onClick={onClickHideReviews}
                    >
                        {doneText}
                    </DoneAndNextButton>
                ) : (
                    <DoneAndNextButton type="button" onClick={onClickNextBtn}>
                        {nextText}
                    </DoneAndNextButton>
                )}
            </NextAndDoneBtnsContainer>
        );
    };

    const renderReviewMistakes = () => {
        const existingReviewQue = incorrectAnsweredMCQs[incorrectQuestionIndex];
        return (
            <ResultPageReviewsContainer>
                <ReviewMistakesContainer>
                    <ReviewMistakeEle>
                        <QuestionText>
                            {existingReviewQue.questionText}
                        </QuestionText>
                        <OptionsUlEle>
                            {existingReviewQue.options.map((eachOption) => {
                                const incorrectOption =
                                    existingReviewQue.userSelectedOptionId ===
                                    eachOption.id;
                                const correctOption =
                                    eachOption.isCorrect === "true";

                                return (
                                    <EachOptionLiEle key={eachOption.id}>
                                        <EachOptionSpanEle
                                            incorrectOption={incorrectOption}
                                            correctOption={correctOption}
                                        >
                                            {eachOption.text}
                                        </EachOptionSpanEle>
                                        {correctOption && (
                                            <RightIcon/>
                                        )}
                                        {incorrectOption && (
                                            <WrongIcon />
                                        )}
                                    </EachOptionLiEle>
                                );
                            })}
                        </OptionsUlEle>
                    </ReviewMistakeEle>
                </ReviewMistakesContainer>
                {renderNextAndDoneBtns()}
            </ResultPageReviewsContainer>
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
