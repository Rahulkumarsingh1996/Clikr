import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="row flex-column g-4 mt-2 menu-box">
          <div className="col-md-2 menu-item">Clikr</div>
          <div className="col-md-2 menu-item">Home</div>
          <div className="col-md-2 menu-item">Search</div>
          <div className="col-md-2 menu-item">Reel</div>
          <div className="col-md-2 menu-item">Message</div>
          <div className="col-md-1 menu-item">Profile</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
