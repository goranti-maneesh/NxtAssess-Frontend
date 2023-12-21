import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constants";

import { RegisterServiceType } from "../../services/RegisterService/index";

import {
	RegisterAPISuccessRes,
	RegisterAPIFailureRes,
} from "../Types/registerTypes";

export class RegisterStore {
	apiStatus: string;
	name: string;
	username: string;
	password: string;
	confirmPassword: string;
	errorMsg: string;
	registerAPIService: RegisterServiceType;
	responseStatus: boolean;

	constructor(registerStoreInstance: RegisterServiceType) {
		makeAutoObservable(this);

		this.apiStatus = constraints.initial;
		this.name = "";
		this.username = "";
		this.password = "";
		this.confirmPassword = "";
		this.errorMsg = "";
		this.registerAPIService = registerStoreInstance;
		this.responseStatus = false;
	}

	setUsername = (username: string) => {
		this.username = username;
	};

	setName = (name: string) => {
		this.name = name;
	};

	setPassword = (password: string) => {
		this.password = password;
	};

	setConfirmPassword = (confirmPassword: string) => {
		this.confirmPassword = confirmPassword;
	};

	setErrorMsg = (errorMsg: string) => {
		this.errorMsg = errorMsg;
	};

	onSuccessRegisterAPI = (response: RegisterAPISuccessRes) => {
		this.responseStatus = response.responseStatus;
	};

	onFailureRegisterAPI = (response: RegisterAPIFailureRes) => {
		this.responseStatus = response.responseStatus;
		this.errorMsg = response.error_msg;
	};

	fetchRegisterAPI = async () => {
		this.apiStatus = constraints.loading;
		try {
			const userDetails = {
				username: this.username,
				name: this.name,
				password: this.password,
				confirm_password: this.confirmPassword,
			};

			const response = await this.registerAPIService.fetchRegisterAPI(
				userDetails,
			);

			if ("message" in response) {
				this.onSuccessRegisterAPI(response);
			} else {
				this.onFailureRegisterAPI(response);
			}

			this.apiStatus = constraints.success;
		} catch {
			this.apiStatus = constraints.failure;
		}
	};
}
