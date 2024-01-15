import tw from "twin.macro";
import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const ResultPage = styled.div`
    ${tw``}
`;

export const ResultPageMainContainer = styled.div`
    ${tw`bg-Selago rounded-4px h-85vh flex justify-center items-center`}
`;

export const ResultPageContainer = styled.div`
    ${tw`w-80per max-w-818px shadow-loginPageCard pt-8 pb-12 flex flex-col items-center text-center bg-white`}

    @media(max-width: 768px) {
        ${tw`pt-6 pb-6 pl-10 pr-10`}
    }
`;

export const ResultPageReviewsContainer = styled.div`
    ${tw`w-80per max-w-818px shadow-loginPageCard p-8 pb-12 bg-white`}

    @media(max-width: 768px) {
        ${tw`pt-6 pb-6 pl-10 pr-10`}
    }
`;

export const AssessmentCompleteImg = styled.img`
    ${tw`w-230px h-170px mb-6`}

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
    ${tw`mt-6 mb-4 text-ChathamsBlue text-fs24_lh32 font-medium flex items-center`}

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
    ${tw`w-264px h-170px`}
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

export const ReattemptAndReviewBtn = styled.div`
    ${tw`mt-4`}

    @media(max-width: 556px) {
        ${tw`flex flex-col`}
    }
`;

export const ReviewMistakesBtn = styled.button`
    ${tw`border border-ChathamsBlue border-solid text-fs16_lh28 rounded-4px pr-8 pl-8 pt-2 pb-2 text-ChathamsBlue ml-4`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }

    @media (max-width: 556px) {
        ${tw`ml-0 mt-4`}
    }
`;

export const ReviewMistakesContainer = styled.div`
    ${tw`min-h-30vh`}

    @media(max-width: 768px) {
        ${tw`h-full`}
    }
`;

export const ReviewMistakeEle = styled.div``;

export const QuestionText = styled.h1`
    ${tw`mb-4 text-ChathamsBlue text-fs16_lh24 font-medium`}
`;

export const OptionsUlEle = styled.ul``;

export const EachOptionLiEle = styled.li`
    ${tw`text-PickledBluewood text-fs16_lh24 p-1 mb-1 flex items-center`}
`;

export const EachOptionSpanEle = styled.span`
    ${(props) => props.incorrectOption && tw`text-Red`}

    ${(props) => props.correctOption && tw`text-DarkGreen`}
`;

export const CorrectIncorrectAnswers = styled.p`
    ${tw`text-SlateGray text-fs16_lh24 flex items-center justify-center`}
`;

export const CorrectIncorrectAnswersScore = styled.span`
    ${tw`text-ChathamsBlue font-bold ml-3`}
`;

export const ScoresSection = styled.div`
    ${tw`text-center`}
`;

export const CorrectIncorrectAnswersContainer = styled.div`
    ${tw`flex `}
`;

export const NextAndDoneBtnsContainer = styled.div``;

export const DoneAndNextButton = styled.button`
    ${tw`mt-4 bg-ChathamsBlue rounded-4px pr-8 pl-8 pt-2 pb-2 text-white outline-none text-fs16_lh28`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const RightIcon = styled(MdDone)`
    ${tw`text-DarkGreen w-6 h-6 ml-2`}
`;

export const WrongIcon = styled(RxCross2)`
    ${tw`text-Red w-6 h-6 ml-2`}
`;
