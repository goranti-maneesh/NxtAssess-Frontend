import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	homeRoute,
	loginRoute,
	registerRoute,
	assessmentRoute,
	resultRoute,
} from "./Common/constants";

import ProtectedRoute from "./Common/components/ProtectedRoute";
import RegisterPageRoute from "./Auth/routes/RegisterRouter";
import LoginPageRoute from "./Auth/routes/LoginRoute";
import HomeRoute from "./Assessment/components/Home";
import AssessmentRoute from "./Assessment/routes";
import ResultRoute from "./Assessment/components/Result";

import { LoginHookContext } from "./Auth/hooks/useLoginHooks";
import { RegisterHookContext } from "./Auth/hooks/useRegisterHooks";
import { McqQuestionsHookContext } from "./Assessment/hooks/useMcqQuestionsHooks";

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<LoginHookContext>
				<RegisterHookContext>
					<McqQuestionsHookContext>
						<Routes>
							<Route
								path={loginRoute}
								element={<LoginPageRoute />}
							/>
							<Route
								path={registerRoute}
								element={<RegisterPageRoute />}
							/>
							<Route element={<ProtectedRoute />}>
								<Route
									path={homeRoute}
									element={<HomeRoute />}
								/>
								<Route
									path={assessmentRoute}
									element={<AssessmentRoute />}
								/>
								<Route
									path={resultRoute}
									element={<ResultRoute />}
								/>
							</Route>
						</Routes>
					</McqQuestionsHookContext>
				</RegisterHookContext>
			</LoginHookContext>
		</BrowserRouter>
	);
};

export default App;
