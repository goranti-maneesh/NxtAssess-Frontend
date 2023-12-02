import { makeAutoObservable } from "mobx";

export class RegisterStore{

    name: string
    username: string
    password: string
    confirmPassword: string
    errorMsg: string
    registerAPIService: object

    constructor(){
        makeAutoObservable(this)

        this.name = ""
        this.username = ""
        this.password = ""
        this.confirmPassword = ""
        this.errorMsg = ""
        this.registerAPIService = {}
    }

    setUsername = (event) => {
        this.username = event.target.value
    }

    setName = () => {}

    setPassword = () => {}

    setConfirmPassword = () => {}

    setErrorMsg = () => {}

    onSuccessRegisterAPI = () => {}

    onFailureRegisterAPI = () => {}

    fetchRegisterAPI = () => {}
}