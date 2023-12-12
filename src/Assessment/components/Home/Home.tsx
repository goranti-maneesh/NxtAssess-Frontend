import { useNavigate } from "react-router-dom";

import Header from "../../../Common/components/Header/index";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import {
	homePageInstructionPoints,
	homePageImg,
	instructionsText,
	startAssessmentText,
} from "../../../Common/constants";

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
} from "./styledComponents";

export const Home = () => {
	const navigate = useNavigate();

	const onClickStartAssessment = () => {
		navigate("/assessment");
	};

	return (
		<WrapperComponent>
			<HomeMainContainer>
				<Header />
				<HomeContainer>
					<InstructionsSection>
						<InstructionsHeading>
							{instructionsText}
						</InstructionsHeading>
						{homePageInstructionPoints.map((eachPoint) => (
							<InstructionPoint key={eachPoint.number}>
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
						<StartAssessmentBtn
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
