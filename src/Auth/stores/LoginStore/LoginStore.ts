import { makeAutoObservable } from "mobx";

import { constraints, homeRoute } from "../../../Common/constants";
import { setJwtToken, getJwtToken } from "../../../Common/utils/StorageUtils";

import { LoginService } from "../../services/LoginService/index.api";
import { LoginServiceType } from "../../services/LoginService/index";

import { LoginFailureTypes, LoginSuccessResTypes } from "../Types/loginTypes";

export class LoginStore {
	apiStatus: string;
	responseStatus: boolean;
	username: string;
	password: string;
	loginApiInstance: LoginServiceType;
	errorMsg: string;

	constructor(loginServiceInstance: LoginService) {
		makeAutoObservable(this);
		this.apiStatus = constraints.initial;
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
		this.responseStatus = response.responseStatus;
		setJwtToken(response.jwt_token);
	};

	onFailureLoginApi = (error_msg: string) => {
		this.setErrorMsg(error_msg);
	};

	fetchLoginApi = async (navigate: any) => {
		this.apiStatus = constraints.loading;

		const userDetails = {
			username: this.username,
			password: this.password,
		};

		try {
			const loginResponse: LoginSuccessResTypes | LoginFailureTypes =
				await this.loginApiInstance.fetchLoginAPI(userDetails);

			if ("jwt_token" in loginResponse) {
				this.onSuccessLoginApi(loginResponse);
				navigate(homeRoute, { replace: true });
			} else {
				this.setErrorMsg(loginResponse.error_msg);
			}

			this.apiStatus = constraints.success;
		} catch {
			this.apiStatus = constraints.failure;
		}
	};
}
