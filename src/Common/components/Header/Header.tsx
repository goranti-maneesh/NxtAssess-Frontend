import { NxtAssessLightImg, logoutText } from "../../constants"

import NxtAssessLogo from "../NxtAssessLogo"

import {HeaderMainContainer, HeaderContainer, LogoutBtn} from './styledComponents'

export const Header = () => {
    return(
        <HeaderMainContainer>
            <HeaderContainer>
                <NxtAssessLogo nxtAssessImg={NxtAssessLightImg} textColor="white" />
                <LogoutBtn>{logoutText}</LogoutBtn>
            </HeaderContainer>
        </HeaderMainContainer>
    )
}