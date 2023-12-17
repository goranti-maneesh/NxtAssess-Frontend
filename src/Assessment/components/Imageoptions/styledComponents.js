import tw from "twin.macro";
import styled from "styled-components";

export const ImageOptionLiElement = styled.li`
	${tw`mr-16 mb-12`}
`;

export const ImageOptionBtn = styled.button`
	${tw`outline-none cursor-pointer`}

	${(props) =>
		props.isSelected &&
		tw`border-2 border-solid border-Astronaut rounded-4px`}
`;

export const ImgOption = styled.img`
	${tw`w-304px h-84px rounded-4px`}
`;
