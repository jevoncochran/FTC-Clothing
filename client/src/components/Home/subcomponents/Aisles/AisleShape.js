import React from "react";
import "./Aisles.scss";

const AisleShape = (props) => {
  return (
    <div
      className="aisle-shape"
      onClick={() => props.history.push(`/shop/${props.aisle.toLowerCase()}`)}
    >
      <div
        className="aisle-shape-img"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: props.imagePosition,
        }}
      ></div>
      <p className="aisle-shape-name">{props.aisle}</p>
    </div>
  );
};

export default AisleShape;
