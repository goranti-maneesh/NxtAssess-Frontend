import { Route, Navigate, RouteProps, Outlet } from "react-router-dom";

import { getJwtToken } from "../../utils/StorageUtils";

export const ProtectedRoute = (props: RouteProps): JSX.Element => {
	const jwtToken = getJwtToken();
	console.log(props);

	if (jwtToken) {
		return <Outlet />;
	}
	return <Navigate to="/login" replace={true} />;
};
