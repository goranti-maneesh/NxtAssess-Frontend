import { DefaultAndImgOptionsPropsTypes } from "../../stores/types";

import {
	ImageOptionLiElement,
	ImageOptionBtn,
	ImgOption,
} from "./styledComponents";

export const ImageOptions = (props: DefaultAndImgOptionsPropsTypes) => {
	return (
		<ImageOptionLiElement key="">
			<ImageOptionBtn>
				<ImgOption></ImgOption>
			</ImageOptionBtn>
		</ImageOptionLiElement>
	);
};
