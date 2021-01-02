import React from "react";
import "./Nav.scss";

const NavAisle = (props) => {
  return (
    <div className="nav-aisle">
      <div
        className="nav-aisle-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: props.backgroundPosition,
        }}
      ></div>
      <p className="nav-aisle-name">{props.aisle}</p>
    </div>
  );
};

export default NavAisle;
