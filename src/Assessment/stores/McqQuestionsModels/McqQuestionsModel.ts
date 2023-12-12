import {EachQuestionType, UpdatedFetchOptionsTypes} from '../types'

import {OptionsModel} from './OptionsModel'

export class McqQuestionsModel{
    id: string
    optionsType: string
    questionText: string
    options: Array<UpdatedFetchOptionsTypes>
    userSelectedOptionId: string

    constructor(question: EachQuestionType){
        this.id = question.id
        this.optionsType = question.options_type
        this.questionText = question.question_text
        this.options = question.options.map((eachOption) => new OptionsModel(eachOption))
        this.userSelectedOptionId = ''
    }
}