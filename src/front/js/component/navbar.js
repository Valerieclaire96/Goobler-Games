import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary mr-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Games <i class="fa-solid fa-puzzle-piece"></i></a>
      <form class="d-flex ml-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  );
};
