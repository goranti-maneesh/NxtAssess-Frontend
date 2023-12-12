import { useEffect } from "react";
import { observer } from "mobx-react";

import Assessment from "../components/Assessment";
import { useMcqQuestionsHook } from "../hooks/useMcqQuestionsHooks";

export const AssessmentRoute = observer(() => {
	const mcqQuestionSHook = useMcqQuestionsHook();

	const { fetchData, selectOption, existingQuestion, nextQuestion } =
		mcqQuestionSHook;

	const onClickSelectOption = (id: string) => {
		selectOption(id);
	};

	const onClickNextQuestion = () => {
		nextQuestion();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Assessment />
		</div>
	);
});
