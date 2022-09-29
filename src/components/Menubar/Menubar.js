import React from "react";
// import Blog from "../Blog/Blog";
const Menubar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a
          class="navbar-brand bg-info p-2 fw-bold rounded text-white ms-3"
          href="./"
        >
          Build Your Body
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="../../index.js">
              Home
            </a>
            <a class="nav-item nav-link" href="../../index.js">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
