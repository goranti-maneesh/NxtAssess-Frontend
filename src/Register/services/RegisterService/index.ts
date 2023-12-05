import {registerAPIReqObj, registerAPISuccessRes, registerAPIFailureRes} from '../../stores/types'

export interface RegisterServiceType{
    fetchRegisterAPI: (userDetails: registerAPIReqObj) => Promise<registerAPISuccessRes | registerAPIFailureRes>
}