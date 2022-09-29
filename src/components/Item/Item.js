import React from "react";
const Item = (props) => {
  // const {buttonClick} = props
  const { name, time, details, img, age } = props.cart;
  // console.log(props.durations);
  return (
    <div className="bg-secondary text-white p-3 m-4 rounded col-lg-5 col-md-6 col-sm-10 col-10">
      <img className="w-100 rounded" src={img} alt=""></img>
      <h3 className="mt-3">Name: {name}</h3>
      <p className="w-75 text-white-50">{details} </p>
      <h6>Age: {age}</h6>
      <h5>Duration: {time} m</h5>
      <button
        onClick={() => props.buttonClick(time)}
        className="bg-white text-secondary fw-bold border px-3 py-2 rounded mt-3"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
