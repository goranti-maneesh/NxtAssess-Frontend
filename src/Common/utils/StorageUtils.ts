import Cookies from 'js-cookie'

import {JWTtoken} from '../constants/index.js'

export const setJwtToken = (jwtToken: string) => {
    Cookies.set(JWTtoken, jwtToken, {expires: 30})
}

export const getJwtToken = () => {
    const cookie = Cookies.get(JWTtoken)

    if(cookie !== undefined){
        return cookie
    }
    else{
        return null
    }
}

export const removeJwtToken = () => {
    Cookies.remove(JWTtoken)
}