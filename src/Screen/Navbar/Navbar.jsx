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
            Home
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            Search
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
           Reel
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
            Message
          </div>
          <div className="col-md-2 menu-item m-0 p-0 d-flex align-items-center gap-2">
            {" "}
Profile
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
