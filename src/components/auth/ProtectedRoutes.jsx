import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import appContext from "../../context/appData/AppContext";
const useAuth = () => {
  const { driver } = useContext(appContext);
  console.log("Driver stuff: " + driver);
  //const driver = { isLoggedIn: true };
  console.log(driver);
  return driver !== null && driver.isloggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
