import { observer } from "mobx-react";
import { nextQuestionText, optionTypes } from "../../../Common/constants";

import { useMcqQuestionsHook } from "../../hooks/useMcqQuestionsHooks";

import DefaultOptions from "../DefaultOptions";
import ImageOptions from "../Imageoptions";
import MCQDetails from "../MCQDetails";

import {
	AssessmentMainContainer,
	AssessmentContainer,
	MCQQuestionSection,
	MCQDetailsSection,
	QuestionText,
	HrLine,
	OptionsUlElement,
	OptionLiElement,
	NextQuestionBtn,
	QuestionAndOptions,
	SelectContainer,
} from "./styledComponents";
import SelectOptions from "../SelectOptions";

export const Assessment = observer((): JSX.Element => {
	const mcqQuestionsHook = useMcqQuestionsHook();

	const {
		existingQuestion,
		nextQuestion,
		selectOption,
		selectedOption,
		isLastQuestion,
	} = mcqQuestionsHook;

	const renderDefaultOptions = (): JSX.Element => {
		return (
			<OptionsUlElement>
				{existingQuestion.options.map((eachOption) => (
					<DefaultOptions
						eachOption={eachOption}
						selectOption={selectOption}
						selectedOption={selectedOption}
						key={eachOption.id}
					/>
				))}
			</OptionsUlElement>
		);
	};

	const renderImageOptions = (): JSX.Element => {
		return (
			<OptionsUlElement>
				{existingQuestion.options.map((eachOption) => (
					<ImageOptions
						eachOption={eachOption}
						selectOption={selectOption}
						selectedOption={selectedOption}
						key={eachOption.id}
					/>
				))}
			</OptionsUlElement>
		);
	};

	const renderSelectOptions = (): JSX.Element => {
		return (
			<SelectContainer>
				<SelectOptions
					options={existingQuestion.options}
					selectOption={selectOption}
					selectedOption={selectedOption}
				/>
			</SelectContainer>
		);
	};

	const renderOptions = (): JSX.Element | null => {
		switch (existingQuestion.optionsType) {
			case optionTypes.default:
				return renderDefaultOptions();
			case optionTypes.image:
				return renderImageOptions();
			case optionTypes.select:
				return renderSelectOptions();
			default:
				return null;
		}
	};

	const renderNextButton = (): JSX.Element => (
		<NextQuestionBtn type="button" onClick={() => nextQuestion()}>
			{nextQuestionText}
		</NextQuestionBtn>
	);

	const renderQuestion = (): JSX.Element => {
		return (
			<MCQQuestionSection>
				<QuestionAndOptions>
					<QuestionText>{existingQuestion.questionText}</QuestionText>
					<HrLine />
					{renderOptions()}
				</QuestionAndOptions>
				{isLastQuestion ? null : renderNextButton()}
			</MCQQuestionSection>
		);
	};

	return (
		<AssessmentMainContainer>
			<AssessmentContainer>
				{renderQuestion()}
				<MCQDetailsSection>
					<MCQDetails />
				</MCQDetailsSection>
			</AssessmentContainer>
		</AssessmentMainContainer>
	);
});
