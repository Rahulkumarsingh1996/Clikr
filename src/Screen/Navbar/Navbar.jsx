import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="row flex-column g-4 mt-1 menu-box">
          <div className="col-md-2 menu-item">Clikr</div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            <i class="fa-solid fa-house"></i>Home
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            <i class="fa-solid fa-circle-play"></i>Reel
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            <i class="fa-solid fa-comment"></i>Message
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            <i class="fa-solid fa-user"></i>Profile
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
