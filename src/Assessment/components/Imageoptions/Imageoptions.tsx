import { DefaultAndImgOptionsPropsTypes } from "../../stores/types";

import {
	ImageOptionLiElement,
	ImageOptionBtn,
	ImgOption,
} from "./styledComponents";

export const ImageOptions = (props: DefaultAndImgOptionsPropsTypes) => {
	const { eachOption, selectOption, selectedOption } = props;

	const onClickOption = (id: string) => {
		selectOption(id);
	};

	return (
		<ImageOptionLiElement key={eachOption.id}>
			<ImageOptionBtn
				type="button"
				onClick={() => onClickOption(eachOption.id)}
				isSelected={eachOption.id === selectedOption}>
				<ImgOption src={eachOption.imageUrl} />
			</ImageOptionBtn>
		</ImageOptionLiElement>
	);
};
