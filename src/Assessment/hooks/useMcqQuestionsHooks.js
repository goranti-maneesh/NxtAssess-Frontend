import { useContext, createContext } from 'react'

import {McqQuestionsStore} from '../stores/McqQuestionsStore'

import {McqQuestionsService} from '../services/McqQuestionsService/index.api'

const mcqQuestionsServiceInstance = new McqQuestionsService()

const mcqQuestionsStoreInstance = new McqQuestionsStore(mcqQuestionsServiceInstance)

const McqQuestionsContext = createContext(mcqQuestionsStoreInstance)

export const McqQuestionsContextHook = ({children}) => {
    return(
        <McqQuestionsContext.Provider value={mcqQuestionsStoreInstance}>
            {children}
        </McqQuestionsContext.Provider>
    )
} 

export const useMcqQuestionsHook = () => useContext(McqQuestionsContext)