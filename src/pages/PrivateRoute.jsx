import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const data = useSelector((state) => Boolean(state?.reducer?.tk));
  return data ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
