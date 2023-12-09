import { constraints } from "../../../Common/constants"

import { McqQuestionsServiceTypes } from "../../services/McqQuestionsService"

export class McqQuestionsStore{

    APIResponseStatus: boolean
    APIResponseData: object
    index: number
    isAssessmentStarted: boolean
    existingQuestion: object
    wholeTimerSecs: number
    noOfAnsweredQuestions: number
    noOfUnansweredQuestions: number
    score: number
    isTimeup: boolean
    constraint: string
    APIService: McqQuestionsServiceTypes

    constructor(APIServiceInstance: McqQuestionsServiceTypes){
        this.APIResponseStatus = false
        this.APIResponseData = {}
        this.index = 0
        this.isAssessmentStarted = false
        this.existingQuestion = {}
        this.wholeTimerSecs = 0
        this.noOfAnsweredQuestions = 0
        this.noOfUnansweredQuestions = 0
        this.score = 0
        this.isTimeup = false
        this.constraint = constraints.initial
        this.APIService = APIServiceInstance
    }

    startAssessment = () => {}

    completeAssessment = () => {}

    startTimer = () => {}

    changeTimer = () => {}

    nextQuestion = () => {}

    selectQuestion = () => {}

    selectOptions = () => {}

    onSuccessAPI = () => {}

    onFailureAPI = () => {}

    fetchData = () => {}
}