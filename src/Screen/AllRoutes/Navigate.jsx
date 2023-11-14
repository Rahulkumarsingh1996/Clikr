import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../AllRoutes/Navigate.css'
const Navigate = () => {
  return (
    <>
      <ul className="sidebar_menu">
        <li className="menu-item">
          <Link to="/" className="option-menu">
            <i class="fa-solid fa-house"></i>
            <span className="options_name">Home</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/search" className="option-menu">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span className="options_name">Search</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/reel" className="option-menu">
            {" "}
            <i class="fa-solid fa-circle-play"></i>
            <span className="options_name">Reel</span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/message" className="option-menu">
            <i class="fa-solid fa-comment"></i>
            <span className="options_name">Message</span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/profile" className="option-menu">
            {" "}
            <i class="fa-solid fa-user"></i>
            <span className="options_name">Profile</span>
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Navigate;
