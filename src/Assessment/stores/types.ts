export interface FetchOptionsTypes {
	id: string;
	text: string;
	is_correct: string;
	image_url: string;
}

export interface EachQuestionType {
	id: string;
	options_type: string;
	question_text: string;
	options: Array<FetchOptionsTypes>;
}

export interface FetchResDataTypes {
	total: number;
	questions: Array<EachQuestionType>;
	responseStatus: boolean;
}

export interface UpdatedFetchOptionsTypes {
	id: string;
	text: string;
	isCorrect: string;
	imageUrl: string;
}

export interface UpdatedEachQuestionType {
	id: string;
	optionsType: string;
	questionText: string;
	options: Array<UpdatedFetchOptionsTypes>;
	userSelectedOptionId: string;
}

export interface UpdatedFetchResDataTypes {
	total: number;
	questions: Array<UpdatedEachQuestionType>;
	responseStatus: boolean;
}

export interface DefaultAndImgOptionsPropsTypes {
	eachOption: UpdatedFetchOptionsTypes;
	selectOption: (id: string) => void;
	selectedOption: string;
}

export interface SelectOptionsPropsTypes {
	options: Array<UpdatedFetchOptionsTypes>;
	selectOption: (id: string) => void;
	selectedOption: string;
}

export interface questionNumArray {
	id: number;
	value: number;
	isAnswered: boolean;
}

export interface assessmentPropsTypes {
	existingQuestion: UpdatedEachQuestionType;
	timerText: string;
	noOfAnsweredQuestions: number;
	noOfUnansweredQuestions: number;
	apiStatus: string;
	selectedOption: string;
	questionNumsArray: Array<questionNumArray>;
	startAssessment: () => void;
	completeAssessment: () => void;
	nextQuestion: () => void;
	selectQuestion: (index: number) => void;
	selectOption: (id: string) => void;
}

export interface useNavigateMethodTypes {
	NavigateFunction: (
		to: string | number,
		options?: { replace?: boolean },
	) => void;
}
