import { makeAutoObservable } from "mobx";
import {
	answeredQuestionsText,
	constraints,
	resultRoute,
} from "../../../Common/constants";

import { McqQuestionsServiceTypes } from "../../services/McqQuestionsService";

import { McqQuestionsModel } from "../McqQuestionsModels/McqQuestionsModel";
import {
	FetchResDataTypes,
	UpdatedFetchResDataTypes,
	UpdatedEachQuestionType,
	questionNumArray,
	useNavigateMethodTypes,
} from "../types";

export class McqQuestionsStore {
	APIResponseStatus: boolean;
	APIResponseData: UpdatedFetchResDataTypes;
	index: number;
	isAssessmentStarted: boolean;
	existingQuestion: UpdatedEachQuestionType;
	wholeTimerSecs: number;
	timerText: string;
	noOfAnsweredQuestions: number;
	noOfUnansweredQuestions: number;
	score: number;
	isTimeup: boolean;
	apiStatus: string;
	APIService: McqQuestionsServiceTypes;
	uniqueId: NodeJS.Timeout | string;
	selectedOption: string;
	questionNumsArray: Array<questionNumArray>;
	incorrectAnsweredMCQs: Array<UpdatedEachQuestionType>;
	isLastQuestion: boolean;
	navigate: any;

	constructor(APIServiceInstance: McqQuestionsServiceTypes) {
		makeAutoObservable(this);

		this.APIResponseStatus = false;
		this.APIResponseData = {
			total: 0,
			questions: [],
			responseStatus: false,
		};
		this.index = 0;
		this.isAssessmentStarted = false;
		this.existingQuestion = {
			id: "",
			optionsType: "",
			questionText: "",
			options: [],
			userSelectedOptionId: "",
		};
		this.wholeTimerSecs = 600;
		this.timerText = "00:10:00";
		this.noOfAnsweredQuestions = 0;
		this.noOfUnansweredQuestions = 0;
		this.score = 0;
		this.isTimeup = false;
		this.apiStatus = constraints.initial;
		this.APIService = APIServiceInstance;
		this.uniqueId = "";
		this.selectedOption = "";
		this.questionNumsArray = [];
		this.incorrectAnsweredMCQs = [];
		this.isLastQuestion = false;
		this.navigate = {};
	}

	startAssessment = (): void => {
		this.isAssessmentStarted = true;
	};

	completeAssessment = (): void => {
		this.isAssessmentStarted = false;

		clearInterval(this.uniqueId);

		this.navigate(resultRoute, { replace: true });

		const incorrectAnswers = this.APIResponseData.questions.filter(
			(eachQuestion) => {
				const eachQuestionResults = eachQuestion.options.filter(
					(eachOption) => {
						return (
							eachOption.isCorrect === "true" &&
							eachOption.id === eachQuestion.userSelectedOptionId
						);
					},
				);

				return eachQuestionResults.length === 0;
			},
		);

		this.incorrectAnsweredMCQs = incorrectAnswers;
		this.score = this.APIResponseData.total - incorrectAnswers.length;
	};

	setNavigateMethod = (navigate: any): void => {
		this.navigate = navigate;
	};

	startTimer = (): void => {
		this.uniqueId = setInterval(this.changeTimer, 1000);
	};

	convertTimerValueToString = (time: number): string => {
		if (time < 10) {
			return `0${time}`;
		}
		return `${time}`;
	};

	changeTimer = (): void => {
		this.wholeTimerSecs -= 1;

		const hours = this.convertTimerValueToString(
			Math.floor(this.wholeTimerSecs / 3600),
		);
		const minutes = this.convertTimerValueToString(
			Math.floor((this.wholeTimerSecs % 3600) / 60),
		);
		const seconds = this.convertTimerValueToString(
			this.wholeTimerSecs % 60,
		);

		if (this.wholeTimerSecs === 0) {
			this.completeAssessment();
		}

		this.timerText = `${hours}:${minutes}:${seconds}`;
	};

	nextQuestion = (): void => {
		if (this.noOfAnsweredQuestions === this.APIResponseData.total - 1) {
			this.isLastQuestion = true;
		}

		if (this.index < this.APIResponseData.total - 1) {
			const updatedIndex = this.index + 1;
			this.index = updatedIndex;
			this.existingQuestion =
				this.APIResponseData.questions[updatedIndex];
		}
	};

	selectQuestion = (value: number): void => {
		this.index = value - 1;
		this.existingQuestion = this.APIResponseData.questions[value - 1];

		if (this.noOfAnsweredQuestions === this.APIResponseData.total - 1) {
			this.isLastQuestion = true;
		}
	};

	selectOption = (id: string): void => {
		this.APIResponseData.questions[this.index].userSelectedOptionId = id;
		this.selectedOption = id;
		if (!this.questionNumsArray[this.index].isAnswered) {
			this.noOfAnsweredQuestions += 1;
			this.noOfUnansweredQuestions -= 1;
		}
		this.questionNumsArray[this.index].isAnswered = true;
	};

	reattemptAssessment = (navigate: any): void => {
		this.fetchData();
		this.navigate = navigate;
	};

	onSuccessAPI = (response: FetchResDataTypes): void => {
		const updatedResponse = response.questions.map(
			(eachQuestion) => new McqQuestionsModel(eachQuestion),
		);

		this.APIResponseData = {
			total: response.total,
			questions: updatedResponse,
			responseStatus: response.responseStatus,
		};
		this.apiStatus = constraints.success;
		this.existingQuestion = updatedResponse[0];

		const numbersArr = [...Array(response.total).keys()].map((num) => ({
			id: num,
			value: num + 1,
			isAnswered: false,
		}));

		this.questionNumsArray = numbersArr;
		this.noOfUnansweredQuestions = response.total;
		this.noOfAnsweredQuestions = 0;
		this.wholeTimerSecs = 6;
		this.score = 0;

		this.startTimer();
	};

	onFailureAPI = (): void => {
		this.apiStatus = constraints.failure;
	};

	fetchData = async (): Promise<void> => {
		this.apiStatus = constraints.loading;
		try {
			const response = await this.APIService.fetchMcqQuestionsData();

			if ("questions" in response) {
				this.onSuccessAPI(response);
			} else {
				this.onFailureAPI();
			}
		} catch {
			this.apiStatus = constraints.failure;
		}
	};
}
