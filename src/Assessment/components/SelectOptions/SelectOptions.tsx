import { useEffect } from "react";
import { SelectOptionsPropsTypes } from "../../stores/types";

import { SelectElement, OptionElement } from "./styledComponents";

export const SelectOptions = (props: SelectOptionsPropsTypes) => {
	const { options, selectOption, selectedOption } = props;

	const onClickOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		selectOption(event.target.value);
	};

	useEffect(() => {
		selectOption(options[0].id);
	}, []);

	return (
		<SelectElement
			id="single-select"
			value={selectedOption}
			onChange={onClickOption}>
			{options.map((eachOption) => (
				<OptionElement
					key={eachOption.id}
					value={eachOption.id}
					isSelected={eachOption.id === selectedOption}>
					{eachOption.text}
				</OptionElement>
			))}
		</SelectElement>
	);
};
