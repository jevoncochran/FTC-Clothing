import React, { useState, useEffect } from "react";
import "./Intro.scss";
import { introImages } from "./introImages";
import { NavLink } from "react-router-dom";

const Intro = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = () => {
    if (imageIndex === introImages.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  console.log(introImages.length);

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="home-intro">
      <div
        className="home-intro-img-div"
        style={{
          backgroundImage: `url(${introImages[imageIndex].image})`,
          backgroundPosition: introImages[imageIndex].backgroundPosition,
        }}
      ></div>
      <div className="home-intro-text">
        <p className="home-intro-headline">PROUDLY BLACK-OWNED</p>
        <p className="home-intro-p">
          FOR THE CULTURE CLOTHING is a black-owned clothing line and
          collaborative platform offering quality, trendy streetwear at
          affordable prices.
        </p>
        <NavLink
          className="home-intro-p nav-link"
          to="/about"
          style={{ textTransform: "uppercase" }}
        >
          Our Story
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
