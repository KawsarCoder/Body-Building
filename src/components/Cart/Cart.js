import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
// import Aside from "../Aside/Aside";
import Localdb from "../Localdb/Localdb";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [durations, setDurations] = useState(0);
  const [brakes, setBrakes] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  let buttonClick = (time) => {
    setDurations(durations + parseFloat(time));
  };

  let brakeTimeClick = (time) => {
    // console.log(time);
    setBrakes(parseFloat(time));

    // localStorage.setItem("brake", time);
  };

  return (
    <div>
      <div className="row w-75">
        {carts.map((cart) => (
          <Item key={cart.id} cart={cart} buttonClick={buttonClick}></Item>
        ))}
      </div>
      <div></div>
      <div>
        <Localdb
          brakes={brakes}
          brakeTimeClick={brakeTimeClick}
          durations={durations}
        ></Localdb>
      </div>
    </div>
  );
};

export default Cart;
