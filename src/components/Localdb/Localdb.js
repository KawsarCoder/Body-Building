import React from "react";
import Aside from "../Aside/Aside";
const Localdb = ({ brakes, durations, brakeTimeClick }) => {
  localStorage.setItem("defult", 0);
  let timeDuration = localStorage.getItem("brake");

  //   console.log(timeDuration);
  if (brakes) {
    localStorage.setItem("brake", brakes);
  } else {
    localStorage.setItem("brakes", brakes);
  }
  return (
    <div>
      <Aside
        durations={durations}
        brakes={timeDuration}
        brakeTimeClick={brakeTimeClick}
      ></Aside>
    </div>
  );
};

export default Localdb;
