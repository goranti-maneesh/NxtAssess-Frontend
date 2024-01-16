import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  NxtAssessLightImg,
  logoutText,
  loginRoute,
  darkModeImage,
  lightModeImage,
} from "../../constants";
import { ObjContext } from "../../context";
import { removeJwtToken } from "../../utils/StorageUtils";

import NxtAssessLogo from "../NxtAssessLogo";

import {
  HeaderMainContainer,
  HeaderContainer,
  ModeAndLogoutBtnContainer,
  ModeBtn,
  ModeImg,
  LogoutBtn,
} from "./styledComponents";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const { isLightMode, onChangeScreenColorMode } = useContext(ObjContext);

  const onClickLogoutBtn = (): void => {
    removeJwtToken();
    navigate(loginRoute, { replace: true });
  };

  const onChangeScreenColor = () => {
    onChangeScreenColorMode();
  };

  return (
    <HeaderMainContainer isLightMode={isLightMode}>
      <HeaderContainer>
        <NxtAssessLogo nxtAssessImg={NxtAssessLightImg} textColor="white" />
        <ModeAndLogoutBtnContainer>
          {false ? (
            <ModeBtn type="button" onClick={onChangeScreenColor}>
              <ModeImg src={isLightMode ? lightModeImage : darkModeImage} />
            </ModeBtn>
          ) : null}
          <LogoutBtn type="button" onClick={onClickLogoutBtn}>
            {logoutText}
          </LogoutBtn>
        </ModeAndLogoutBtnContainer>
      </HeaderContainer>
    </HeaderMainContainer>
  );
};
