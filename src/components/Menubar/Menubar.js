import React from "react";
// import Blog from "../Blog/Blog";
const Menubar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand bg-info p-2 fw-bold rounded text-white ms-3"
          href="./"
        >
          Build Your Body
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="../../index.js">
              Home
            </a>
            <a className="nav-item nav-link" href="../../index.js">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
