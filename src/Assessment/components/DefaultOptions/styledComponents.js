import tw from "twin.macro";
import styled from "styled-components";

export const DefaultOptionLiElement = styled.li`
	${tw`w-380px h-64px mr-12 mb-8`}
`;

export const DefaultOptionBtn = styled.button`
	${tw`bg-Zumthor text-PickledBluewood w-full rounded-8px text-left pt-4 pb-4 pl-6 pr-6 mr-auto outline-none text-fs20_lh32 font-normal cursor-pointer`}

    ${props => props.isSelected && tw`bg-WaikawaGray text-CatskillWhite`}
`;
