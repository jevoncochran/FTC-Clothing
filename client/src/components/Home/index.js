import React from "react";
import "./Home.scss";
import Intro from "./subcomponents/Intro";
import Aisles from "./subcomponents/Aisles";

const Home = (props) => {
  return (
    <div className="home">
      <Intro />
      <Aisles history={props.history} />
    </div>
  );
};

export default Home;
