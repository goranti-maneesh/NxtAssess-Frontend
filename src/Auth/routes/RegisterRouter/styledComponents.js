import tw from "twin.macro";
import styled from "styled-components";

export const RegisterPageRouteContainer = styled.div`
	${tw`bg-Selago h-screen flex justify-center items-center`}

	@media(max-width: 768px) {
		${tw`bg-white`}
	}
`;
