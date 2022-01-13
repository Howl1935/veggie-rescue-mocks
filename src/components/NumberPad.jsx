import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/appData/AppContext";
import { Link } from "react-router-dom";
function NumberPad(props) {
  let navigate = useNavigate();

  const { donors, drivers, getData, driver, getDriver, loginUser } =
    useContext(AppContext);

  const [pin, addNumber] = useState("");
  const [user, setUser] = useState(null);

  const onClick = (e) => {
    if (pin.length <= 3) {
      addNumber(pin + e.target.value);
    } else {
      console.log("Too many letters, submit or try again");
    }
  };

  const submit = () => {
    if (pin.length === 4) {
      loginUser(pin);
      navigate(`/home`);
    } else {
      alert("doesnt exist");
    }

    addNumber("");
  };
  return (
    <>
      {driver !== null && <div>{driver.driver}</div>}
      <div className="h-1/4">{pin}</div>
      <div className="grid grid-cols-3 gap-4 text-amber-100 w-1/2 h-5/6 rounded-2xl">
        <button
          onClick={onClick}
          value="1"
          className="flex bg-gray-900 justify-center items-center"
        >
          1
        </button>
        <button
          onClick={onClick}
          value="2"
          className="flex bg-gray-900 justify-center items-center"
        >
          2
        </button>
        <button
          onClick={onClick}
          value="3"
          className="flex bg-gray-900 justify-center items-center"
        >
          3
        </button>
        <button
          onClick={onClick}
          value="4"
          className="flex bg-gray-900 justify-center items-center"
        >
          4
        </button>
        <button
          onClick={onClick}
          value="5"
          className="flex bg-gray-900 justify-center items-center"
        >
          5
        </button>
        <button
          onClick={onClick}
          value="6"
          className="flex bg-gray-900 justify-center items-center"
        >
          6
        </button>
        <button
          onClick={onClick}
          value="7"
          className="flex bg-gray-900 justify-center items-center"
        >
          7
        </button>
        <button
          onClick={onClick}
          value="8"
          className="flex bg-gray-900 justify-center items-center"
        >
          8
        </button>
        <button
          onClick={onClick}
          value="9"
          className="flex bg-gray-900 justify-center items-center"
        >
          9
        </button>
        <button
          onClick={() => {
            addNumber("");
          }}
          value="d"
          className="flex bg-gray-900 justify-center items-center"
        >
          DELETE
        </button>
        <button
          onClick={onClick}
          value="0"
          className="flex bg-gray-900 justify-center items-center"
        >
          0
        </button>
        <button
          onClick={submit}
          value="s"
          className="flex bg-gray-900 justify-center items-center"
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default NumberPad;
