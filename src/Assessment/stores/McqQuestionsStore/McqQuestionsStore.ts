import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constants";

import { McqQuestionsServiceTypes } from "../../services/McqQuestionsService";

import { McqQuestionsModel } from "../McqQuestionsModels/McqQuestionsModel";
import {
	FetchResDataTypes,
	UpdatedFetchResDataTypes,
	UpdatedEachQuestionType,
	questionNumArray
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
	constraint: string;
	APIService: McqQuestionsServiceTypes;
	uniqueId: NodeJS.Timeout | string;
	selectedOption: string
	questionNumsArray: Array<questionNumArray>
	incorrectAnsweredMCQs: Array<UpdatedEachQuestionType>

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
		this.timerText = "00:00:00";
		this.noOfAnsweredQuestions = 0;
		this.noOfUnansweredQuestions = 0;
		this.score = 0;
		this.isTimeup = false;
		this.constraint = constraints.initial;
		this.APIService = APIServiceInstance;
		this.uniqueId = "";
		this.selectedOption = ""
		this.questionNumsArray = []
		this.incorrectAnsweredMCQs = []
	}

	startAssessment = () => {
		this.isAssessmentStarted = true;
	};

	completeAssessment = () => {
		this.isAssessmentStarted = false;
		clearInterval(this.uniqueId);

		const incorrectAnswers = this.APIResponseData.questions.map((eachQuestion) => {
			return(
				eachQuestion.options.filter((eachOption) => eachOption.id !== eachQuestion.userSelectedOptionId)
			)
		})

		console.log(incorrectAnswers)
	};

	startTimer = () => {
		this.uniqueId = setInterval(this.changeTimer, 1000);
	};

	changeTimer = () => {
		const hours = this.wholeTimerSecs / 3600;
		const minutes = (this.wholeTimerSecs % 3600) / 60;
		const seconds = this.wholeTimerSecs % 60;

		this.timerText = `${hours}:${minutes}:${seconds}`;

		this.wholeTimerSecs -= 1;
	};

	nextQuestion = () => {
		if (this.index < this.APIResponseData.total) {
			const updatedIndex = this.index + 1;
			this.index = updatedIndex;
			this.existingQuestion =
				this.APIResponseData.questions[updatedIndex];
		}
	};

	selectQuestion = (index: number) => {
		this.index = index;
	};

	selectOption = (id: string) => {
		this.APIResponseData.questions[this.index].userSelectedOptionId = id;
		this.selectedOption = id
	};

	onSuccessAPI = (response: FetchResDataTypes) => {
		const updatedResponse = response.questions.map(
			(eachQuestion) => new McqQuestionsModel(eachQuestion),
		);

		this.APIResponseData = {
			total: response.total,
			questions: updatedResponse,
			responseStatus: response.responseStatus,
		};
		this.constraint = constraints.success;
		this.existingQuestion = updatedResponse[0];

		const numbersArr = [...Array(response.total).keys()].map(num => ({
			id: num,
			value: num + 1,
			isAnswered: false
		}))

		this.questionNumsArray = numbersArr

		this.startTimer();
	};

	onFailureAPI = () => {
		this.constraint = constraints.failure;
	};

	fetchData = async () => {
		this.constraint = constraints.loading;

		const response = await this.APIService.fetchMcqQuestionsData();

		console.log(response);

		if ("questions" in response) {
			this.onSuccessAPI(response);
		} else {
			this.onFailureAPI();
		}
	};
}
