import {userDetailsTypes} from '../../stores/types'

import {LoginServiceType} from './index'

export class LoginService implements LoginServiceType{
    fetchLoginAPI = async (userDetails: userDetailsTypes) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch("https://user-access.onrender.com/login", options)

        const data = await response.json()
        console.log(response, data)
        return({
            responseStatus: response.ok,
            ...data
        })

    }
}