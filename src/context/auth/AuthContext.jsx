import { useState, createContext, useReducer } from "react";
import authReducer from "./authReducer";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const initialState = {
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // //this will be function that fetches all offline data on loadup
  // const fetchOfflinedb = async () =>{
  //   const response = await fetch(`http://localhost:5000/drivers`);
  //   const data = await response.json();
  //   console.log(data);
  // }

  //this searches database for user with pin; if found sets userobject in state
  const loginUser = async (pin) => {
    const response = await fetch(`http://localhost:5000/drivers?pin=${pin}`);
    const data = await response.json();
    dispatch({
      type: "DRIVER_LOGIN",
      payload: data[0],
    });
    return data.status;
  };

  const getData = () => {
    const data = {
      drivers: drivers,
      vehicles: vehicles,
      donors: donors,
      recipients: recipients,
      region: region,
    };
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };
  const getDriver = (pin) => {
    dispatch({
      type: "GET_DRIVER",
      payload: pin,
    });
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <AppContext.Provider
      value={{
        driver: state.driver,
        drivers: state.drivers,
        vehicles: state.vehicles,
        donors: state.donors,
        recipients: state.recipients,
        region: state.region,
        getData,
        getDriver,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
