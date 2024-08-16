import { memo } from "react";

import { InputFieldPropsTypes } from "../../types";

import {
	InputFieldContainer,
	LabelEle,
	InputElement,
	StarIcon,
} from "./styledComponents";

export const InputField = memo((props: InputFieldPropsTypes): JSX.Element => {
	const { requiredProps } = props;

	const { type, onChangeMethod, labelText, id, placeholder, value } =
		requiredProps;

	console.log(labelText, "labelText");

	return (
		<InputFieldContainer>
			<LabelEle htmlFor={id}>
				{labelText} <StarIcon fill="#EF4444" />
			</LabelEle>
			<InputElement
				type={type}
				onChange={onChangeMethod}
				id={id}
				placeholder={placeholder}
				value={value}
			/>
		</InputFieldContainer>
	);
});
