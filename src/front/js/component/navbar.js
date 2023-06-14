import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary mr-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Games <i className="fa-solid fa-puzzle-piece"></i>
        </a>
        <form className="d-flex ml-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
