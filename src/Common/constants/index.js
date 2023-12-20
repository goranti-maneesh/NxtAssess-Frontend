export const homeRoute = "/"
export const loginRoute = "/login"
export const registerRoute = "/register"
export const assessmentRoute = "/assessment"
export const resultRoute = "/result"

export const nxtText = "NXT";
export const assessText = "Assess";
export const signUpBtnText = "Sign Up";
export const loginBtnText = "Login";
export const alreadyHaveAccText = "Already have an account?";
export const newToNxtAssessText = "New to Nxt Assess?";
export const logoutText = "Logout";
export const startAssessmentText = "Start Assessment";
export const nextQuestionText = "Next Question";
export const JWTtoken = "jwt_token";
export const instructionsText = "Instructions";
export const timeLeftText = "Time Left";
export const answeredQuestionsText = "Answered Questions";
export const unansweredQuestionsText = "Unanswered Questions";
export const questionsText = "Questions";
export const submitTestText = "Submit Test";
export const assessmentCompleteText = "Congrats! You completed the assessment.";
export const timeTakentext = "Time Taken:";
export const yourScoreText = "Your Score:";
export const reattemptText = "Reattempt";
export const timeUpText = "Time is up";
export const didnotCompleteWithInTimeText =
	"You did not complete the assessment within the time.";
export const pageNotFoundText= "Page Not Found"
export const pageNotFoundDescripiton = "We are sorry, the page you requested could not be found"

export const NxtAssessImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1701530848/image_28_Traced_lty02g.png";
export const NxtAssessLightImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1702134023/image_28_Traced_1_aufbvz.png";
export const homePageImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1702189936/Group_scj2g0.png";
export const assessmentCompletedImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1702832764/Asset_2_1_jlbtle.png";
export const assessmentTimeUpImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1702832754/calender_1_1_xkqfvj.png";
export const notFoundImg =
	"https://res.cloudinary.com/degjdup40/image/upload/v1702914100/Group_7504_qy16re.png";

export const constraints = {
	initial: "INITIAL",
	success: "SUCCESS",
	failure: "FAILURE",
	loading: "LOADING",
};

export const homePageInstructionPoints = [
	{
		number: "1.",
		keyText: "Total Questions:",
		value: "10",
	},
	{
		number: "2.",
		keyText: "Types of Questions:",
		value: "MCQs",
	},
	{
		number: "3.",
		keyText: "Duration:",
		value: "10 Mins",
	},
	{
		number: "4.",
		keyText: "Marking Scheme:",
		value: "Every Correct response, get 1 mark",
	},
	{
		number: "5.",
		keyText: "",
		value: "All the progress will be lost, if you reload during the assessment",
	},
];

export const optionTypes = {
	image: "IMAGE",
	select: "SINGLE_SELECT",
	default: "DEFAULT",
};
