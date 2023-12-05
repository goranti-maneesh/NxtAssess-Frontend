import {userDetailsTypes, loginSuccessResTypes, loginFailureTypes} from '../../stores/types'

export interface LoginServiceType {
    fetchLoginAPI: (requestObj: userDetailsTypes) => Promise<loginSuccessResTypes | loginFailureTypes>
}