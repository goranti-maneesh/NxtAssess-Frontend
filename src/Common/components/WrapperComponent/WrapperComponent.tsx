import { WrapperComponentPropsTypes } from '../../types'

import {WrapperComponentMainContainer, WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = ({children}: WrapperComponentPropsTypes): JSX.Element => {

    return(
        <WrapperComponentMainContainer>
            <WrapperComponentContainer>
                {children}
            </WrapperComponentContainer>
        </WrapperComponentMainContainer>
    )
}