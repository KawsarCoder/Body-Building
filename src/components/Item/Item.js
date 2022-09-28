import React from "react";

const Item = (props) => {
  const { name, time, details, img, age } = props.cart;
  return (
    <div className="bg-secondary p-3 m-4 rounded col-lg-4 col-md-6 col-sm-10 col-10">
      <img className="w-100 rounded" src={img} alt=""></img>
      <h3 className="mt-3">Name: {name}</h3>
      <p className="w-50 text-white-50">{details} </p>
      <h6>Age: {age}</h6>
      <h5>Duration: {time} m</h5>
      <button className="bg-white text-secondary fw-bold border px-3 py-2 rounded mt-3">
        Add to cart
      </button>
    </div>
  );
};

export default Item;
