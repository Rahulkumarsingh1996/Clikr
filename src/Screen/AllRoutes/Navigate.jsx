import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../Navbar/Navbar.css'
const Navigate = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }} className="float-start">
        <li className="menu-item">
          <Link to="/" className="option-menu">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/search" className="option-menu">Search</Link>
        </li>
        <li className="menu-item"> 
          <Link to="/reel" className="option-menu">Reel</Link>
        </li>

        <li className="menu-item">
          <Link to="/message" className="option-menu">Message</Link>
        </li>

        <li className="menu-item">
          <Link to="/profile" className="option-menu">Profile</Link>
        </li>

      </ul>

      <Outlet />
    </>
  );
};

export default Navigate;
