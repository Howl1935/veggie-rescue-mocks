const appReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,

        drivers: action.payload.drivers,
        vehicles: action.payload.vehicles,
        donors: action.payload.donors,
        recipients: action.payload.recipients,
        region: action.payload.region,
        loading: false,
      };
    case "GET_DRIVER":
      const d = state.drivers.filter((item) => item.pin === action.payload);
      console.log(d[0]);
      return {
        ...state,
        driver: d[0],
      };
    case "DRIVER_LOGIN":
      return {
        ...state,
        driver: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default appReducer;
