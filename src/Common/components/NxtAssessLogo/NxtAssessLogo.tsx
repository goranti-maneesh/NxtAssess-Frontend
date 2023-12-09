import {nxtText, assessText} from '../../constants'
import { NxtAssessLogoPropsTypes } from '../../types'

import {NxtAssessLogoContainer, NxtAssessImg, NxtAssessText, NxtText} from './styledComponents'

export const NxtAssessLogo = (props: NxtAssessLogoPropsTypes) => {
    const {nxtAssessImg, textColor} = props
    return(
        <NxtAssessLogoContainer>
            <NxtAssessImg src={nxtAssessImg}/>
            <NxtAssessText textColor={textColor}><NxtText>{`${nxtText} `}</NxtText>{assessText}</NxtAssessText>
        </NxtAssessLogoContainer>
    )
}