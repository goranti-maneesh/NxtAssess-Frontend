import {FetchResDataTypes} from '../../stores/types'

export interface McqQuestionsServiceTypes{
    fetchMcqQuestionsData: () => Promise<FetchResDataTypes>
}