import React from "react";
import "./Aside.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aside = (props) => {
  const { durations, brakeTimeClick, brakes } = props;
  const notify = () =>
    toast.success("Congratulations, You're done well! Keep it up!!!", {
      position: "top-center",
    });
  return (
    <div id="aside-div" className="rounded bg-white p-4">
      <div className="d-flex">
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
          <div className="col-lg-4">
            <h4>
              75<span className="fw-light fs-5">kg </span>
            </h4>
            <span> Weight</span>
          </div>
          <div className="col-lg-4">
            <h4>
              6.5<span className="fw-light fs-5">inch </span>
            </h4>
            <span> Height</span>
          </div>
          <div className="col-lg-4">
            <h4>
              25<span className="fw-light fs-5">yrs </span>
            </h4>
            <span> Age</span>
          </div>
        </div>
      </div>
      <div>
        <h4>Break Time</h4>
        <div className="row bg-secondary p-3 rounded justify-content-center">
          <button
            onClick={() => brakeTimeClick(20)}
            className="col-lg-2 mx-2 bg-white rounded-circle border"
          >
            <span>20</span>s
          </button>
          <button
            onClick={() => brakeTimeClick(30)}
            className="col-lg-2 mx-2 bg-white rounded-circle border"
          >
            <span>30</span>s
          </button>
          <button
            onClick={() => brakeTimeClick(40)}
            className="col-lg-2 mx-2 bg-white rounded-circle border"
          >
            <span>40</span>s
          </button>
          <button
            onClick={() => brakeTimeClick(50)}
            className="col-lg-2 mx-2 bg-white rounded-circle border"
          >
            <span>50</span>s
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h4>Exercise Details:</h4>
        <div className="bg-secondary rounded px-4 py-2 text-light">
          <h5>Exercise Time: {durations} m</h5>
        </div>
        <div className="bg-secondary rounded  px-4 py-2 text-light mt-3">
          <h5>Break Time: {brakes} s</h5>
        </div>
      </div>
      <div className="row">
        <button
          onClick={notify}
          className=" border mt-5 py-2 bg-primary fw-bold fs-5 text-white rounded"
        >
          Complete Activity
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Aside;
