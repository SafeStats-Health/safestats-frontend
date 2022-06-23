import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('login'));
  return user ? <Outlet/> : <Navigate to="/login"/>;
};
