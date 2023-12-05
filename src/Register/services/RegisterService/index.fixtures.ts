import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import {registerAPIReqObj, registerAPISuccessRes} from '../../stores/types'
import registerFixtureResponse from '../../fixtures/getRegisterRegister.json'

import {RegisterServiceType} from './index'

export class RegisterService implements RegisterServiceType {
    fetchRegisterAPI = (userDetails: registerAPIReqObj): Promise<registerAPISuccessRes> => {
        return resolveWithTimeout(registerFixtureResponse)
    }
}