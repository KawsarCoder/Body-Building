import React from "react";
// side bar link added 
import Aside from "../Aside/Aside";

const Localdb = ({ brakes, durations, brakeTimeClick }) => {
  
  localStorage.setItem("defult", 0);
  let timeDuration = localStorage.getItem("brake");
  // local Storage value check 
  if (brakes) {
    localStorage.setItem("brake", brakes);
  } else {
    localStorage.setItem("brakes", brakes);
  }
  return (
    <div>
      {/* side var dynamic value form local storage  */}
      <Aside
        durations={durations}
        brakes={timeDuration}
        brakeTimeClick={brakeTimeClick}
      ></Aside>
    </div>
  );
};

export default Localdb;
