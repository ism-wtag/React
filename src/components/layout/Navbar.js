import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a class="navbar-brand">FaRaBi</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" exact to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" exact to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" exact to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <Link exact to="/users/add" class="btn btn-outline-light mx-5">Add User</Link>
    </nav>
  )
}

export default Navbar;
