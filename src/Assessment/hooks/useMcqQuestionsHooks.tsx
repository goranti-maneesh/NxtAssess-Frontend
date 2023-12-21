import { useContext, createContext, ReactNode } from "react";

import { McqQuestionsStore } from "../stores/McqQuestionsStore/McqQuestionsStore";

import { McqQuestionsService } from "../../Common";

const mcqQuestionsServiceInstance = new McqQuestionsService();

const mcqQuestionsStoreInstance = new McqQuestionsStore(
	mcqQuestionsServiceInstance,
);

const McqQuestionsContext = createContext(mcqQuestionsStoreInstance);

export const McqQuestionsHookContext = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<McqQuestionsContext.Provider value={mcqQuestionsStoreInstance}>
			{children}
		</McqQuestionsContext.Provider>
	);
};

export const useMcqQuestionsHook = () => useContext(McqQuestionsContext);
