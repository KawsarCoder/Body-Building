import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="row">
      {carts.map((cart) => (
        <Item key={cart.id} cart={cart}></Item>
      ))}
    </div>
  );
};

export default Cart;
