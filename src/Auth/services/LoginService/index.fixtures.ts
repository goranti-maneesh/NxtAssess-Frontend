import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import {userDetailsTypes, loginSuccessResTypes} from '../../stores/types'
import loginFixturesData from '../../fixtures/getLoginResponse.json'

import {LoginServiceType} from './index'

export class LoginService implements LoginServiceType{
    fetchLoginAPI = (userDetails: userDetailsTypes): Promise<loginSuccessResTypes> => {
        return resolveWithTimeout(loginFixturesData)
    }
}