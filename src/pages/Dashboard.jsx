import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useContext } from "react";
import Vehicles from "../components/Vehicles";
import NumberPad from "../components/NumberPad";
import Deliveries from "../components/Deliveries";
import Home from "../components/Home";
import AppContext from "../context/appData/AppContext";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
function Dashboard() {
  const { driver } = useContext(AppContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const pull_isLoggedIn = (data) => {
  //   setIsLoggedIn(data);
  // };

  return (
    <>
      <div className="flex justify-center items-center w-3/4 h-5/6 bg-slate-700 rounded-xl">
        <Routes>
          <Route path="/" element={<NumberPad />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          {/* <Route path="/user/:login" element={<User />} />
            <Route path="/notfound" element={<NotFound />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
        {/* {driver === null ? <NumberPad /> : driver.isLoggedIn && <AppHome />} */}
      </div>
    </>
  );
}
export default Dashboard;
