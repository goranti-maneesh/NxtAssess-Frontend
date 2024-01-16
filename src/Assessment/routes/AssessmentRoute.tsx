import { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

import WrapperComponent from "../../Common/components/WrapperComponent";
import Header from "../../Common/components/Header";
import { constraints } from "../../Common/constants";
import Loader from "../../Common/components/Loader";

import Assessment from "../components/Assessment";
import { useMcqQuestionsHook } from "../hooks/useMcqQuestionsHooks";

import {
  AssessmentRouteCantainer,
  LoaderAssessmentContainer,
} from "./styledComponents";
import ErrorView from "../../Common/components/ErrorView";

export const AssessmentRoute = observer((): JSX.Element => {
  const mcqQuestionSHook = useMcqQuestionsHook();

  const navigate = useNavigate();

  const {
    fetchData,
    selectOption,
    existingQuestion,
    nextQuestion,
    apiStatus,
    setNavigateMethod,
    stopTimer,
  } = mcqQuestionSHook;

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  if (apiStatus === constraints.initial) {
    fetchData();
    setNavigateMethod(navigate);
  }

  const renderSuccessView = (): JSX.Element => <Assessment />;

  const renderLoader = (): JSX.Element => (
    <LoaderAssessmentContainer>
      <Loader color="#263868" height={50} width={50} secondaryColor="" />
    </LoaderAssessmentContainer>
  );

  const renderFailure = (): JSX.Element => (
    <ErrorView fetchMethod={fetchData} />
  );

  const assessmentRouteViews = (): JSX.Element | null => {
    switch (apiStatus) {
      case constraints.success:
        return renderSuccessView();
      case constraints.loading:
        return renderLoader();
      case constraints.failure:
        return renderFailure();
      default:
        return null;
    }
  };

  return (
    <WrapperComponent>
      <AssessmentRouteCantainer>
        <Header />
        {assessmentRouteViews()}
      </AssessmentRouteCantainer>
    </WrapperComponent>
  );
});
