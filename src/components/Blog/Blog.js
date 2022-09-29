import React from "react";
// blog css link added 
import "./Blog.css";
const Blog = () => {
  return (
      <div id="blog-wrapper" className="d-blog text-center">
          {/* blog container create  */}
      <div className="d-flex justify-content-center">
        <h1 id="blog-text" className="mt-5 text-primary fw-bold fs-1">
          Blog
        </h1>
          </div>
          {/* question container create  */}
      <div className="blog-wrap d-block text-center mt-5 container">
        <div className="blog-content bg-secondary p-5 rounded text-white mt-4">
          {/* first question added  */}
                  <h4 className="text-info">Question-01: How does react work?</h4>
          <p>
            React is a JavaScript library developed by Facebook which, among
            other things, was used to build Instagram.com. Its aim is to allow
            developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React. js is virtual DOM.
          </p>
              </div>
              {/* second question added  */}
        <div className="blog-content bg-secondary p-5 rounded text-white mt-4">
          <h4 className="text-info">
            Question-02: What's the difference between props and state
          </h4>
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
              </div>
              {/* third question added  */}
        <div className="blog-content bg-secondary p-5 rounded text-white mt-4">
          <h4 className="text-info">
            Question-03: What is the use effect work without API data load
          </h4>
          <p>
            React useEffect hooks are powerful to run side effects, but it is
            easy to omit dependencies and create bugs in your app. The useEffect
            Hook allows you to perform side effects in your components. Some
            examples of side effects are: directly updating the DOM, and timers.
            useEffect accepts two arguments.
          </p>
        </div>
          </div>
          {/* footer container added  */}
      <div className="footer d-blog text-center border-top p-4 border-secondary mt-5">
        <h6>@ 2022-2030: All rights reserve by Md. Kawsar</h6>
      </div>
    </div>
  );
};

export default Blog;
