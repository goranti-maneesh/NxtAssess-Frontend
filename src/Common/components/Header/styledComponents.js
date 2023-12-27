import tw from "twin.macro";
import styled from "styled-components";

export const HeaderMainContainer = styled.div`
	${tw`w-full h-88px pl-12 pr-12 `}

	${(props) => props.isLightMode && tw`bg-Astronaut`}

	${(props) => !props.isLightMode && tw`bg-black`}
`;

export const HeaderContainer = styled.div`
	${tw`flex justify-between items-center h-88px`}
`;

export const ModeAndLogoutBtnContainer = styled.div`
	${tw`flex items-center`}
`;

export const ModeBtn = styled.button``;

export const ModeImg = styled.img`
	${tw`h-40px mr-4`}
`;

export const LogoutBtn = styled.button`
	${tw`text-fs12_lh16 font-medium border-2 border-white rounded-8px outline-none pl-6 pr-6 pt-3 pb-3 text-white`}

	@media(max-width: 768px) {
		${tw`pl-4 pr-4 pt-2 pb-2 border`}
	}
`;
