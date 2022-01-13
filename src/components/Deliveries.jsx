import { useContext, useEffect } from "react";
import AppContext from "../context/appData/AppContext";
import DeliveryTable from "./DeliveryTable";
function Deliveries() {
  const { driver } = useContext(AppContext);
  

  return (
    <div className="w-full h-full bg-zinc-100  rounded-xl">
      <div>Welcome  {driver.driver } </div>
      <DeliveryTable />
    </div>
  );
}

export default Deliveries;
