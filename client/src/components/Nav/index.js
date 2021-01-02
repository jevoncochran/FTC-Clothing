import React, { useState } from "react";
import "./Nav.scss";
import ftcLogoBlack from "../../assets/images/nav/ftc-logo-black.png";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { navAisles } from "./navAisles";
import NavAisle from "./NavAisle";

const Nav = (props) => {
  const [searchActive, setSearchActive] = useState(false);
  const [shopActive, setShopActive] = useState(false);

  return (
    <div
      className="nav"
      style={{
        position: shopActive ? "absolute" : "relative",
        zIndex: shopActive ? 999 : 0,
      }}
    >
      <div className="nav-top">
        <div className="nav-logo-div">
          <NavLink to="/">
            <img
              className="nav-logo"
              src={ftcLogoBlack}
              alt="For the Culture Clothing logo"
            />
          </NavLink>
        </div>
        <div className="nav-pages-div">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <p className="nav-link" onClick={() => setShopActive(true)}>
            Shop
          </p>
          <NavLink className="nav-link" to="/designers">
            Designers
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="nav-actions-div">
          <div
            className="nav-actions-search-div"
            style={{ border: searchActive ? "1px solid black" : "none" }}
          >
            <div className="nav-action-icon">
              <IoCloseSharp
                style={{
                  borderRight: searchActive ? "1px solid black" : "none",
                  height: "100%",
                  display: searchActive ? "block" : "none",
                }}
                onClick={() => setSearchActive(false)}
              />
            </div>
            <input
              className="nav-actions-search-input"
              type="text"
              name="search_query"
              placeholder="Enter query here"
              style={{ display: searchActive ? "block" : "none" }}
            />
            <div
              className="nav-action-icon"
              style={{
                //   border: "1px dashed black",
                //   width: "80%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              onClick={() => setSearchActive(true)}
            >
              <AiOutlineSearch
                style={{
                  // border: "1px dashed black",
                  height: "100%",
                  borderLeft: searchActive ? "1px solid black" : "none",
                }}
              />
            </div>
          </div>

          <div className="nav-action-icon">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
      <div
        className="nav-bottom"
        style={{ display: shopActive ? "flex" : "none" }}
      >
        <div className="nav-bottom-aisles">
          {navAisles.map((aisle) => {
            return (
              <NavAisle
                key={aisle.aisle}
                image={aisle.image}
                aisle={aisle.aisle}
                backgroundPosition={aisle.background_position}
              />
            );
          })}
        </div>
        <div
          className="nav-bottom-close-icon"
          onClick={() => setShopActive(false)}
        >
          <AiOutlineCloseSquare />
        </div>
      </div>
    </div>
  );
};

export default Nav;
