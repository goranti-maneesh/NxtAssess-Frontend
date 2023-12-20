import { useNavigate } from "react-router-dom";

import { NxtAssessLightImg, logoutText, loginRoute } from "../../constants";
import { removeJwtToken } from "../../utils/StorageUtils";

import NxtAssessLogo from "../NxtAssessLogo";

import {
	HeaderMainContainer,
	HeaderContainer,
	LogoutBtn,
} from "./styledComponents";

export const Header = (): JSX.Element => {
	const navigate = useNavigate();

	const onClickLogoutBtn = (): void => {
		removeJwtToken();
		navigate(loginRoute, { replace: true });
	};

	return (
		<HeaderMainContainer>
			<HeaderContainer>
				<NxtAssessLogo
					nxtAssessImg={NxtAssessLightImg}
					textColor="white"
				/>
				<LogoutBtn type="button" onClick={onClickLogoutBtn}>
					{logoutText}
				</LogoutBtn>
			</HeaderContainer>
		</HeaderMainContainer>
	);
};
