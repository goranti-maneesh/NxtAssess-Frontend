import { useContext } from 'react'

import { WrapperComponentPropsTypes } from '../../types'
import { ObjContext } from '../../context'

import {WrapperComponentMainContainer, WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = ({children}: WrapperComponentPropsTypes): JSX.Element => {

    const {isLightMode} = useContext(ObjContext)

    return(
        <WrapperComponentMainContainer>
            <WrapperComponentContainer isLightMode={isLightMode}>
                {children}
            </WrapperComponentContainer>
        </WrapperComponentMainContainer>
    )
}