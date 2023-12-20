import { Route, Navigate, RouteProps, Outlet } from "react-router-dom";

import {loginRoute} from "../../constants"

import { getJwtToken } from "../../utils/StorageUtils";

export const ProtectedRoute = (props: RouteProps): JSX.Element => {
	const jwtToken = getJwtToken();

	if (jwtToken) {
		return <Outlet />;
	}
	return <Navigate to={loginRoute} replace={true} />;
};
