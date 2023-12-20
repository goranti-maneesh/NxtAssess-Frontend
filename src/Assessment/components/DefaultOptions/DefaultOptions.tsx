import { DefaultAndImgOptionsPropsTypes } from "../../stores/types";

import { DefaultOptionLiElement, DefaultOptionBtn } from "./styledComponents";

export const DefaultOptions = (props: DefaultAndImgOptionsPropsTypes) => {
	const { eachOption, selectOption, selectedOption } = props;

	const onClickOption = (id: string): void => {
		selectOption(id);
	};

	return (
		<DefaultOptionLiElement key={eachOption.id}>
			<DefaultOptionBtn
				type="button"
				onClick={() => onClickOption(eachOption.id)}
				isSelected={eachOption.id === selectedOption}>
				{eachOption.text}
			</DefaultOptionBtn>
		</DefaultOptionLiElement>
	);
};
