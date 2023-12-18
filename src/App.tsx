import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ObjContext } from "./Common/context";
import ProtectedRoute from "./Common/components/ProtectedRoute";
import RegisterPageRoute from "./Register/routes";
import LoginPageRoute from "./Auth/routes";
import HomeRoute from "./Assessment/components/Home";
import AssessmentRoute from "./Assessment/routes";
import ResultRoute from "./Assessment/components/Result";

import { LoginHookContext } from "./Auth/hooks/useLoginHooks.js";
import { RegisterHookContext } from "./Register/hooks/useRegisterHooks.js";
import { McqQuestionsHookContext } from "./Assessment/hooks/useMcqQuestionsHooks";

const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = () => {
	const [isDesktopView, setScreenSize] = useState(
		mediaQuery.matches as boolean,
	);

	useEffect(() => {
		const changeScreenSize = (event: MediaQueryListEvent) => {
			setScreenSize(event.matches);
		};

		mediaQuery.onchange = (event) => changeScreenSize(event);
	}, []);

	return (
		<ObjContext.Provider value={{ isDesktopView: isDesktopView }}>
			<BrowserRouter>
				<LoginHookContext>
					<RegisterHookContext>
						<McqQuestionsHookContext>
							<Routes>
								<Route
									path="/login"
									element={<LoginPageRoute />}
								/>
								<Route
									path="/register"
									element={<RegisterPageRoute />}
								/>
								<Route element={<ProtectedRoute />}>
									<Route path="/" element={<HomeRoute />} />
									<Route
										path="/assessment"
										element={<AssessmentRoute />}
									/>
									<Route
										path="/result"
										element={<ResultRoute />}
									/>
								</Route>
							</Routes>
						</McqQuestionsHookContext>
					</RegisterHookContext>
				</LoginHookContext>
			</BrowserRouter>
		</ObjContext.Provider>
	);
};

export default App;
