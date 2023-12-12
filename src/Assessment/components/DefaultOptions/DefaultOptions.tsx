import { DefaultAndImgOptionsPropsTypes } from "../../stores/types";

import { DefaultOptionLiElement, DefaultOptionBtn } from "./styledComponents";

export const DefaultOptions = (props: DefaultAndImgOptionsPropsTypes) => {
	return (
		<DefaultOptionLiElement>
			<DefaultOptionBtn></DefaultOptionBtn>
		</DefaultOptionLiElement>
	);
};
