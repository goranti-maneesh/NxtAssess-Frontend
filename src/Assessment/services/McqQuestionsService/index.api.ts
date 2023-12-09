import { FetchResDataTypes } from "../../stores/types";

import { McqQuestionsServiceTypes } from "./index";

export class McqQuestionsService implements McqQuestionsServiceTypes{

    fetchMcqQuestionsData = async (): Promise<FetchResDataTypes> => {
        
        const options = {
            method: "GET"
        }

        const apiUrl = "https://apis.ccbp.in/assess/questions"

        const response = await fetch(apiUrl, options)

        const data = await response.json()

        return({
            ...data,
            responseStatus: response.ok
        })
    }
}