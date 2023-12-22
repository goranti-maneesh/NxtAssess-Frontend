import tw from "twin.macro";
import styled from "styled-components";

export const WrapperComponentMainContainer = styled.div`
	${tw`w-screen flex justify-center bg-Porcelain`}

	@media (max-width: 768px) {
		${tw`bg-white w-full`}
	}
`;

export const WrapperComponentContainer = styled.div`
	${tw`w-1440px bg-white`}
`;
