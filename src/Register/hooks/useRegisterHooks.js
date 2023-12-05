import { createContext, useContext } from 'react'

import {RegisterService} from '../services/RegisterService/index.api'

import { RegisterStore } from '../stores/RegisterStore/RegisterStore'

const registerServiceInstance = new RegisterService()

const registerStoreInstance = new RegisterStore(registerServiceInstance)

const RegisterContext = createContext(registerStoreInstance)

export const RegisterHookContext = ({children}) => {
    return(
        <RegisterContext.Provider value={registerStoreInstance}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegisterHook = () => useContext(RegisterContext)