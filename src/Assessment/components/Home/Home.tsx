import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Header from "../../../Common/components/Header/index";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import {
	homePageInstructionPoints,
	homePageImg,
	instructionsText,
	startAssessmentText,
	assessmentRoute,
} from "../../../Common/constants";
import { ObjContext } from "../../../Common/context";

import {
	HomeMainContainer,
	HomeContainer,
	InstructionsSection,
	InstructionsHeading,
	InstructionPoint,
	InstructionPointNumber,
	InstructionKeyAndValue,
	InstructionPointKey,
	InstructionPointValue,
	StartAssessmentBtn,
	HomePageAssessmentImg,
	Instructions,
} from "./styledComponents";

export const Home = (): JSX.Element => {
	const navigate = useNavigate();

	const { isLightMode } = useContext(ObjContext);

	const onClickStartAssessment = (): void => {
		navigate(assessmentRoute);
	};

	const renderInstructions = (): JSX.Element => {
		return (
			<Instructions>
				{homePageInstructionPoints.map((eachPoint) => (
					<InstructionPoint
						key={eachPoint.number}
						isLightMode={isLightMode}>
						<InstructionPointNumber>
							{eachPoint.number}
						</InstructionPointNumber>
						<InstructionKeyAndValue>
							{eachPoint.keyText !== "" ? (
								<InstructionPointKey>{`${eachPoint.keyText} `}</InstructionPointKey>
							) : null}
							<InstructionPointValue>
								{eachPoint.value}
							</InstructionPointValue>
						</InstructionKeyAndValue>
					</InstructionPoint>
				))}
			</Instructions>
		);
	};

	return (
		<WrapperComponent>
			<HomeMainContainer>
				<Header />
				<HomeContainer>
					<InstructionsSection isLightMode={isLightMode}>
						<InstructionsHeading isLightMode={isLightMode}>
							{instructionsText}
						</InstructionsHeading>
						{renderInstructions()}
						<StartAssessmentBtn
							isLightMode={isLightMode}
							type="button"
							onClick={onClickStartAssessment}>
							{startAssessmentText}
						</StartAssessmentBtn>
					</InstructionsSection>
					<HomePageAssessmentImg src={homePageImg} />
				</HomeContainer>
			</HomeMainContainer>
		</WrapperComponent>
	);
};
