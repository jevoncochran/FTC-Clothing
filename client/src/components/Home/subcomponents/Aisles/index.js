import React from "react";
import "./Aisles.scss";
import AisleShape from "./AisleShape";
import { aisleData } from "./aisleData";

const Aisles = (props) => {
  return (
    <div className="aisles">
      {aisleData.map((aisle) => {
        return (
          <AisleShape
            key={aisle.aisle}
            image={aisle.image}
            aisle={aisle.aisle}
            imagePosition={aisle.image_position}
            history={props.history}
            style={{ height: "100%" }}
          />
        );
      })}
    </div>
  );
};

export default Aisles;
