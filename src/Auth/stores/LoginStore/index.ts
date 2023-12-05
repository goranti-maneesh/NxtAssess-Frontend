import { action, makeAutoObservable, observable } from 'mobx'
import {constraints} from '../../../Common/constants'
import {setJwtToken} from '../../../Common/utils/StorageUtils'

import { LoginService } from '../../services/LoginService/index.api'
import {LoginServiceType} from '../../services/LoginService/index'

import {loginFailureTypes, loginSuccessResTypes} from '../types'

export class LoginStore{
    @observable constraint: string
    @observable  responseStatus: boolean
    @observable  username: string
    @observable password: string
    @observable  loginApiInstance: LoginServiceType
    @observable  errorMsg: string

    constructor(loginServiceInstance: LoginService){
        makeAutoObservable(this)
        this.constraint = constraints.initial
        this.responseStatus = false
        this.username = ""
        this.password = ""
        this.loginApiInstance = loginServiceInstance
        this.errorMsg = ""
    }

    @action
    setUsername = (username: string) => {
        this.username = username 
    }

    @action
    setPassword = (password: string) => {
        this.password = password
    }

    @action
    setErrorMsg = (errorMsg: string) => {
        this.errorMsg = errorMsg
    }
    
    @action
    onSuccessLoginApi = (response: loginSuccessResTypes) => {
        console.log(response.responseStatus, response, 'response')
        setJwtToken(response.jwt_token)
        this.responseStatus = response.responseStatus
    }

    @action
    onFailureLoginApi = (error_msg: string) => {
        this.setErrorMsg(error_msg)
    }

    @action
    fetchLoginApi = async () => {
        this.constraint = constraints.loading

        const userDetails = {
            username: this.username,
            password: this.password
        }

        const loginResponse: loginSuccessResTypes | loginFailureTypes = await this.loginApiInstance.fetchLoginAPI(userDetails)

        if("jwt_token" in loginResponse){
            this.onSuccessLoginApi(loginResponse)
        }
        else{
            this.setErrorMsg(loginResponse.error_msg)
        }

        this.constraint = constraints.success
    }
}