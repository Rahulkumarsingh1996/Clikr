import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigate = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/reel">Reel</Link>
        </li>

        <li>
          <Link to="/message">Message</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

      </ul>

      <Outlet />
    </>
  );
};

export default Navigate;
