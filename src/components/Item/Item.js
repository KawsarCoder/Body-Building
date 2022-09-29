import React from "react";
const Item = (props) => {
  // destructuring props  
  const { name, time, details, img, age } = props.cart;

  return (
    // dynamic exercise value created 
    <div className="bg-secondary text-white p-3 m-4 rounded col-lg-3 col-md-6 col-sm-10 col-10">
      <img className="w-100 rounded" src={img} alt=""></img>
      <h4 className="mt-3">Name: {name}</h4>
      <p className="w-100 fw-light text-white-50">{details} </p>
      <h6>Age: {age}</h6>
      <h6>Duration: {time} m</h6>
      <button
        onClick={() => props.buttonClick(time)}
        className="bg-white text-secondary fw-bold border px-3 py-2 rounded mt-3 selected-button"
        appearance="primary"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
