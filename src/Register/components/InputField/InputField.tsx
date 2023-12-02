import React from 'react'

import {InputFieldContainer, LabelEle, InputElement} from './styledComponents'

export const InputField = (props) => {

    const {requiredProps} = props

    const {type, onChangeMethod, labelText, id, placeholder, value} = requiredProps

    return(
        <InputFieldContainer>
            <LabelEle htmlFor={id}>{labelText}</LabelEle>
            <InputElement type={type} onChange={onChangeMethod} id={id} placeholder={placeholder} value={value}/>
        </InputFieldContainer>
    )

}