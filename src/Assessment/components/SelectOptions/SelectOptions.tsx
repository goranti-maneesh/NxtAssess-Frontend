import { SelectOptionsPropsTypes } from "../../stores/types";

import { SelectElement, OptionElement } from "./styledComponents";

export const SelectOptions = (props: SelectOptionsPropsTypes) => {
	return (
		<SelectElement>
			<OptionElement></OptionElement>
		</SelectElement>
	);
};
