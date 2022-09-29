import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Aside from "../Aside/Aside";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [durations, setDurations] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  let buttonClick = (time) => {
    setDurations(durations + parseFloat(time));
  };
  return (
    <div>
      <div className="row w-75">
        {carts.map((cart) => (
          <Item key={cart.id} cart={cart} buttonClick={buttonClick}></Item>
        ))}
      </div>
      <Aside durations={durations}></Aside>
    </div>
  );
};

export default Cart;
