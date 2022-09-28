import React from "react";

const Aside = () => {
  return (
    <div className="position-absolute bg-white p-4 top-0 end-0 w-25">
      <div className="d-flex w-75">
        <div className=" w-25 h-25 me-3">
          <img
            className="rounded-circle w-100 h-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCZQZ8HVAj2bpBBaE6x74rzFeVGb25Se2Y-n5M_-eXNRkifgB_-9zhXyNHu1KBDfYh-c&usqp=CAU"
            alt="Profile_image"
          />
        </div>
        <div>
          <h5>Md. Kawsar</h5>
          <span>Fulgazi, Feni</span>
        </div>
      </div>
      <div className="bg-secondary text-light p-4 rounded my-5">
        <div className="row">
          <h3 className="col-4">
            75<span className="fw-light fs-5">kg </span>
          </h3>
          <h3 className="col-4">
            6.5<span className="fw-light fs-5">inch </span>
          </h3>
          <h3 className="col-4">
            25<span className="fw-light fs-5">yrs </span>
          </h3>
        </div>
        <div className="row">
          <span className="col-4"> Weight</span>
          <span className="col-4"> Height</span>
          <span className="col-4"> Age</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
