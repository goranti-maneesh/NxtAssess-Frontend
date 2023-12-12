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
}

export interface SelectOptionsPropsTypes {
	options: Array<UpdatedFetchOptionsTypes>;
}
