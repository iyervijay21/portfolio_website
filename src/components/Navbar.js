import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-bold ">
          Vijay Iyer
        </a>

        <button className="btn btn-outline-info ms-auto me-3">
          contact me
        </button>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <span className=" fas fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a
              href="/"
              className="nav-item nav-link text-dark font-weight-light h6 my-auto"
            >
              Blogs
            </a>
            <a
              href="/"
              className="nav-item nav-link text-dark font-weight-light h6 my-auto"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
