import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constants";
import { setJwtToken } from "../../../Common/utils/StorageUtils";

import { LoginService } from "../../services/LoginService/index.api";
import { LoginServiceType } from "../../services/LoginService/index";

import { LoginFailureTypes, LoginSuccessResTypes } from "../types";

export class LoginStore {
	constraint: string;
	responseStatus: boolean;
	username: string;
	password: string;
	loginApiInstance: LoginServiceType;
	errorMsg: string;

	constructor(loginServiceInstance: LoginService) {
		makeAutoObservable(this);
		this.constraint = constraints.initial;
		this.responseStatus = false;
		this.username = "";
		this.password = "";
		this.loginApiInstance = loginServiceInstance;
		this.errorMsg = "";
	}

	setUsername = (username: string) => {
		this.username = username;
	};

	setPassword = (password: string) => {
		this.password = password;
	};

	setErrorMsg = (errorMsg: string) => {
		this.errorMsg = errorMsg;
	};

	onSuccessLoginApi = (response: LoginSuccessResTypes) => {
		console.log(response.responseStatus, response, "response");
		setJwtToken(response.jwt_token);
		this.responseStatus = response.responseStatus;
	};

	onFailureLoginApi = (error_msg: string) => {
		this.setErrorMsg(error_msg);
	};

	fetchLoginApi = async () => {
		this.constraint = constraints.loading;

		const userDetails = {
			username: this.username,
			password: this.password,
		};

		const loginResponse: LoginSuccessResTypes | LoginFailureTypes =
			await this.loginApiInstance.fetchLoginAPI(userDetails);

		if ("jwt_token" in loginResponse) {
			this.onSuccessLoginApi(loginResponse);
		} else {
			this.setErrorMsg(loginResponse.error_msg);
		}

		this.constraint = constraints.success;
	};
}
