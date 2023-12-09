import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import mcqQuesionsFixturesData from '../../fixtures/getAssessmentData.json'
import {FetchResDataTypes} from '../../stores/types'

import {McqQuestionsServiceTypes} from './index'

export class McqQuestionsService implements McqQuestionsServiceTypes{
    fetchMcqQuestionsData = (): Promise<FetchResDataTypes> => {
        return resolveWithTimeout(mcqQuesionsFixturesData)
    }
}