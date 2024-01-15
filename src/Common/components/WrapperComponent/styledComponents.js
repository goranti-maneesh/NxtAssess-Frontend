import tw from "twin.macro";
import styled from "styled-components";

export const WrapperComponentMainContainer = styled.div`
	${tw`flex justify-center bg-Porcelain`}

	@media (max-width: 768px) {
		${tw`bg-white w-full`}
	}
`;

export const WrapperComponentContainer = styled.div`
	${tw`w-1440px`}

	${(props) => props.isLightMode && tw`bg-white`}

	${(props) => !props.isLightMode && tw`bg-Sirocco`}
`;
