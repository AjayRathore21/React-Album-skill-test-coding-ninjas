import React from 'react';
import './file css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar">
        <Link className="nav-item" to={"/"}>
          Home
        </Link>
        <Link className="nav-item" to={"/add"}>
          Add Album
        </Link>
      </div>
    );
};

export default Navbar;