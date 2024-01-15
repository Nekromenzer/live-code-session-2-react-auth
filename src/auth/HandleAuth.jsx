import { Navigate, Outlet } from "react-router";

const HandleAuth = () => {
  const loggedToken = localStorage.getItem("token") || null;

  const isAuthenticated = loggedToken !== null;

  if (!isAuthenticated) return <Navigate to="login" replace />;
  return <Outlet />;
};

export default HandleAuth;
